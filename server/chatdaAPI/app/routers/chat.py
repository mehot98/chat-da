import datetime
import json
from typing import Dict

from fastapi import APIRouter, status, HTTPException, Request
from starlette.responses import StreamingResponse

import chatdaAPI.app.models.dto.chat.ChatResponseDto as response_dto
import chatdaAPI.app.models.dto.chat.ChatRequestDto as request_dto
import chatdaAPI.app.models.exmaple_chat as dump
from chatdaAPI.RAG.make_output import get_output

from elasticsearch import Elasticsearch

import logging
import ecs_logging
import time

import uuid

es = Elasticsearch(
    "http://docker-elk-elasticsearch-1:9200",
    basic_auth=("elastic", 'changeme')
)

logger = logging.getLogger("app")
logger.setLevel(logging.DEBUG)

# 콘솔 핸들러 설정
console_handler = logging.StreamHandler()
console_handler.setFormatter(ecs_logging.StdlibFormatter())
logger.addHandler(console_handler)

# prefix == chat
router = APIRouter()


@router.post("", status_code=status.HTTP_201_CREATED)
def post_chat(
        chat_request_dto: request_dto.ChatRequestDto,
        req: Request
):
    """
    기본 챗봇과의 대화 API\n
    테스트용 입력 : compare, info, recommend \n
    입력: ChatRequestDto(uuid, content)\n
    응답: ChatInfoDto, ChatCompareDto, ChatRecommendDto(type, content, modelNoLlist or modelNo)\n
    """

    response = None
    content = chat_request_dto.content
    data = None

    chat_id = uuid.uuid4().hex

    try:

        # 제일 먼저 거치는 content는 테스트 입력을 위한 case를 만납니다. info, compare, recommend, naturalSearch
        match content:
            case "info":
                data = dump.info_data
                response = response_dto.init_info_response(data, chat_id)
            case "compare":
                data = dump.compare_data
                response = response_dto.init_compare_response(data, chat_id)
            case "recommend":
                data = dump.recommend_data
                response = response_dto.init_recommend_response(data, chat_id)
            case "naturalSearch":
                response = dump.natural_data
            # 위 예제 입력에서 걸리지 않은 입력에 대해서는 langchain을 활용한 답변을 생성합니다
            case default:
                data = get_output(user_input=chat_request_dto.content, search=False)

                # 만약 model_list가 None이라면 DB에서 검색된 내용이 없다는 뜻
                if data["model_list"] is None:
                    response = response_dto.ChatExceptionDto()
                else:
                    match data["type"]:
                        # langchain으로 생성된 답변의 타입에 따라 응답으로 보낼 객체 형식을 변경합니다.
                        case "info":
                            response = response_dto.init_info_response(data, chat_id)
                        case "compare":
                            response = response_dto.init_compare_response(data, chat_id)
                        case "recommend":
                            response = response_dto.init_recommend_response(data, chat_id)
                        case "ranking":
                            response = response_dto.init_ranking_response(data, chat_id)
                        case "general":
                            response = response_dto.init_general_respose(data, chat_id)
                        case "search":
                            response = response_dto.init_search_response(data, chat_id)
                        case "dictionary":
                            response = response_dto.init_dictionary_response(data, chat_id)
                        case default:
                            # 만약 type이 지정되지 않은 값이 나온다면 Exception을 발생시킵니다.
                            raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail=[
                                {
                                    "type": "error",
                                    "msg": "Content error",
                                    "input": {
                                        "content": "string"
                                    }
                                }
                            ])
    except Exception as e:
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail=[
            {
                "type": "error",
                "msg": "Server Error",
                "input": {
                    "content": "string"
                }
            }
        ])

    log = {
        "chat_id": chat_id,
        "time": datetime.datetime.utcnow(),
        "uuid": chat_request_dto.uuid,
        "latency": time.time(),
        "type": data["type"],
        "user_message": content,
        "system_message": "",
        "model_no_list": data["model_list"][:10]
    }

    return StreamingResponse(returnData(response, data["content"], req, log, data), headers={'X-Accel-Buffering': 'no'}, media_type="text/event-stream")


@router.post("/search",
             status_code=status.HTTP_200_OK,
             response_model=response_dto.ChatSearchResponseDto)
def post_search(
        chat_request_dto: request_dto.ChatRequestDto
):
    """
    자연어 검색 리스트를 확인하는 API\n
    입력: ChatRequestDto(uuid, content)\n
    응답: ChatSearchResponseDto(type, content, model_no_list)
    """
    chat_id = uuid.uuid4().hex

    data = get_output(user_input=chat_request_dto.content, search=True)

    # Error: 나중에 model_list는 model_no_list로 변경하기,
    # 현재 리스트가 800개 조회되는 오류 발생
    data["model_list"] = data["model_no_list"][:10]

    return response_dto.init_search_response(data,chat_id)


@router.get("/ranking",
            status_code=status.HTTP_200_OK,
            response_model=response_dto.ChatRankingDetailDto)
def get_ranking():
    """
    인기 순위 10개를 받아오는 API\n
    응답: ChatRankingDto(type, content, model_list)
    """

    # 해당 입력을 넣어줌으로써 바로 랭킹 관련 데이터를 받아옵니다.
    data = get_output(user_input="요새 잘 나가는 냉장고가 뭐야?", search=True)

    chat_id = uuid.uuid4().hex
    return response_dto.init_ranking_detail_response(data, chat_id)


@router.post("/feedback", status_code=status.HTTP_201_CREATED)
def post_feedback(
        feedback_request_dto: request_dto.FeedbackRequestDto
):
    """
    채팅에 대한 피드백 등록 API\n
    입력: FeedbackRequestDto(uuid,createdAt,content)\n
    응답: HttpResponseDto(data, success)\n
    """

    query = """
        {
          "query": 
            "bool": {
              "must": [
                {
                  "match": {
                    "message": "chat_history"
                  }
                },
                {
                  "match": {
                    "chat_id": """ + feedback_request_dto.chat_id + """
                  }
                }
              ]
            }
          }
        }
        """

    result = es.search(index="logs*", body=query)

    if result['hits']['total']['value'] == 0:
        return {"success": False}

    target = result['hits']['hits'][0]['_source']

    log = {
        "chat_id": target['chat_id'],
        "time": target['time'],
        "uuid": target['uuid'],
        "latency": target['latency'],
        "type": target['type'],
        "user_message": target['user_message'],
        "system_message": target['system_message'],
        "model_no_list": target['model_no_list'],
        "feedback": feedback_request_dto.feedback
    }

    logger.info('feedback', extra=log)

    return {"success": True}


@router.post("/preference", status_code=status.HTTP_200_OK)
def post_feedback(
):

    query = """
    {
      "size": 0,
      "query": {
        "bool": {
          "must": [
            {
              "match": {
                "container.name": "chatda-server"
              }
            },
            {
              "match": {
                "message": "preference"
              }
            }
          ]
        }
      },
      "aggs": {
        "top_model_no": {
          "terms": {
            "field": "model_no",
            "size": 10,
            "order": {
              "_count": "desc"
            }
          }
        }
      }
    }
    """

    result = es.search(index="logs*", body=query)

    return [d['key'] for d in result['aggregations']['top_model_no']['buckets']]

async def returnData(response: any, stream: any, req: Request, log: Dict, data: any):
    # 만약 request 측 세션이 끊어지면 해당 Stream을 종료시키기
    is_disconnected = await req.is_disconnected()
    if is_disconnected: return
    # 처음으로 보내는 값은 모델 정보와 채팅 타입에 대한 내용
    yield f"data: {response.json(by_alias=True)}\n\n"

    if type(stream) is str:
        result = ""
        # GPT 응답에 대한 token을 EventStream으로 보내주기
        for event in stream:
            token = {
                "data": event
            }
            result += event
            yield f"data: {json.dumps(token)}\n\n"
            time.sleep(0.02)
        log["system_message"] = result
    else:
        # GPT 응답에 대한 token을 EventStream으로 보내주기
        result = ""
        for event in stream:
            token = {
                "data": event
            }
            result += event
            yield f"data: {json.dumps(token)}\n\n"
        log["system_message"] = result

    log['latency'] = time.time() - log['latency']

    logger.info("chat_history", extra=log)

    for model in data["model_list"]:
        logger.info("preference", extra={"model_no": model["제품_코드"][:10]})

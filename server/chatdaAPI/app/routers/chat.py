from typing import Union

from fastapi import APIRouter, status, HTTPException

import chatdaAPI.app.models.dto.chat.ChatResponseDto as response_dto
import chatdaAPI.app.models.dto.chat.ChatRequestDto as request_dto
import chatdaAPI.app.models.exmaple_chat as dump
from chatdaAPI.RAG.make_output import get_output

# prefix == chat
router = APIRouter()


@router.post("", status_code=status.HTTP_201_CREATED,
             response_model=Union[response_dto.ChatInfoDto, response_dto.ChatCompareDto, response_dto.ChatRecommendDto])
def post_chat(
        chat_request_dto: request_dto.ChatRequestDto
):
    """
    기본 챗봇과의 대화 API\n
    테스트용 입력 : compare, info, recommend
    입력: ChatRequestDto(uuid, content)\n
    응답: ChatInfoDto, ChatCompareDto, ChatRecommendDto(type, content, modelNoLlist or modelNo)\n
    """

    response = None
    content = chat_request_dto.content

    # 제일 먼저 거치는 content는 테스트 입력을 위한 case를 만납니다. info, compare, recommend
    match content:
        case "info":
            data = dump.info_data
            response = response_dto.init_info_response(data)
        case "compare":
            data = dump.compare_data
            response = response_dto.init_compare_response(data)
        case "recommend":
            data = dump.recommend_data
            response = response_dto.init_recommend_response(data)
        # 위 예제 입력에서 걸리지 않은 입력에 대해서는 langchain을 활용한 답변을 생성합니다
        case default:
            data = get_output(user_input=chat_request_dto.content, search=False)
            match data["type"]:
                # langchain으로 생성된 답변의 타입에 따라 응답으로 보낼 객체 형식을 변경합니다.
                case "info":
                    response = response_dto.init_info_response(data)
                case "compare":
                    response = response_dto.init_compare_response(data)
                case "recommend":
                    response = response_dto.init_recommend_response(data)
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
    return response


@router.post("/search")
def post_search(
        chat_request_dto: request_dto.ChatRequestDto
):
    """
    자연어 검색 리스트를 확인하는 API\n
    입력: SearchRequestDto(uuid, content)\n
    응답: ChatSearchResponseDto(type, content, model_no_list)
    """

    data = get_output(user_input=chat_request_dto.content, search=True)

    # 나중에 model_list는 model_no_list로 변경하기
    data["model_list"] = data["model_no_list"][:10]

    return response_dto.init_search_response(data)


@router.post("/feedback", status_code=status.HTTP_201_CREATED)
def post_feedback(
        feedback_request_dto: request_dto.FeedbackRequestDto
):
    """
    채팅에 대한 피드백 등록 API\n
    입력: FeedbackRequestDto(uuid,createdAt,content)\n
    응답: HttpResponseDto(data, success)\n
    """

    return {"success": True}

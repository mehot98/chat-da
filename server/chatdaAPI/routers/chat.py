from typing import Union

from fastapi import APIRouter, status

import models.dto.chat.ChatResponseDto as response_dto
import models.dto.chat.ChatRequestDto as request_dto
import models.exmaple as dump


# prefix == chat
router = APIRouter()


@router.post("", status_code=status.HTTP_201_CREATED,
             response_model=Union[response_dto.ChatInfoDto, response_dto.ChatCompareDto, response_dto.ChatRecommendDto])
async def post_chat(
        chat_request_dto: request_dto.ChatRequestDto
):
    """
    기본 챗봇과의 대화 API\n
    입력: ChatRequestDto(uuid, content)\n
    응답: ChatInfoDto, ChatCompareDto, ChatRecommendDto(type, content, modelNoLlist or modelNo)\n
    """

    print(chat_request_dto)

    response = None
    data = dump.recommend_data

    match data["type"]:
        case "INFO":
            response = response_dto.ChatInfoDto(
                type=data["type"],
                content=data["content"],
                model_no=data["model_list"][0]["제품_코드"]
            )
        case "COMPARE":
            model_no_list = []
            for i in data["model_list"]:
                model_no_list.append(i["제품_코드"])

            response = response_dto.ChatCompareDto(
                type=data["type"],
                content=data["content"],
                model_no_list=model_no_list
            )
        case "RECOMMEND":
            model = data["model_list"][0]
            response = response_dto.ChatRecommendDto(
                type=data["type"],
                content={
                    "message": data["content"],
                    "spec": model
                },
                model_no=model["제품_코드"]
            )

    print(response)
    return response


@router.post("/feedback", status_code=status.HTTP_201_CREATED)
async def post_feedback(
        feedback_request_dto: request_dto.FeedbackRequestDto
):
    """
    채팅에 대한 피드백 등록 API\n
    입력: FeedbackRequestDto(uuid,createdAt,content)\n
    응답: HttpResponseDto(data, success)\n
    """

    print(feedback_request_dto)
    return {"success": True}

from typing import Union

from fastapi import APIRouter, status

import models.dto.chat.ChatResponseDto as response_dto
import models.dto.chat.ChatRequestDto as request_dto

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

    info_response = response_dto.ChatInfoDto(
        type="info",
        content="A 제품은 ~~~하고 ~~해여",
        model_no="RF85C9101AP"
    )

    compare_response = response_dto.ChatCompareDto(**{
        "type": "compare",
        "content": "A 제품이 B 제품보다 ...",
        "model_no_list": [
            "RF84C906B4W",
            "RF85C9101AP"
        ]
    })

    recommend_response = response_dto.ChatRecommendDto(**{
        "type": "recommend",
        "content": {
            "message": "이 제품은 어떠세요?",
            "spec": {
                "제품_코드": "RF84C906B4W",
                "제품명": "BESPOKE 냉장고 4도어 875 L",
                "가격": "2340000",
                "혜택가": "1490000",
                "image_url": "https://images.samsung.com/kdp/goods/2023/11/16/a7b8d6bb-7665-4a69-bd14-6ac97871746b.png"
            }
        },
        "model_no_list": [
            "RF84C906B4W"
        ]
    })
    print(info_response)
    return info_response


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

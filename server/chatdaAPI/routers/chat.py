from fastapi import APIRouter

import models.dto.chat.ChatResponseDto as response_dto
import models.dto.chat.ChatRequestDto as request_dto

# prefix == chat
router = APIRouter()


@router.post("", status_code=200, response_model=response_dto.ChatResponseDto)
async def post_chat(
        chat_request_dto: request_dto.ChatRequestDto
):
    """
    기본 챗봇과의 대화 API
    입력: ChatRequestDto(uuid, content)
    응답: ChatResponseDto(type, content, modelNoLlist or modelNo)
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
                "model_no": "RF84C906B4W",
                "name": "BESPOKE 냉장고 4도어 875 L",
                "기준가": "2340000",
                "혜택가": "1490000",
                "image_url": "https://images.samsung.com/kdp/goods/2023/11/16/a7b8d6bb-7665-4a69-bd14-6ac97871746b.png"
            }
        },
        "model_no_list": [
            "RF84C906B4W"
        ]
    })
    print(info_response)

    response = response_dto.ChatResponseDto(**{
        "data": info_response,
        "success": True
    })
    return response


@router.post("/feedback", status_code=200)
async def post_chat(
        feedback_request_dto: request_dto.FeedbackRequestDto
):
    print(feedback_request_dto)
    return {"success": True}

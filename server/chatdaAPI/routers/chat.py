from fastapi import APIRouter

import models.chat.ChatResponseDto as responseDto
import models.chat.ChatRequestDto as requestDto

# prefix == chat
router = APIRouter()


@router.post("", status_code=200, response_model=responseDto.ChatResponseDto)
async def post_chat(
        chatRequestDto: requestDto.ChatRequestDto
):
    """
    기본 챗봇과의 대화 API
    입력: uuid, content
    응답: chatResponse (type, content, modelNoList or modelNo)
    """

    print(chatRequestDto)

    info_response = responseDto.ChatInfoDto(**{
        "type": "info",
        "content": "A 제품은 ~~~하고 ~~해여",
        "modelNo": "RF85C9101AP"
    })

    compare_response = responseDto.ChatCompareDto(**{
        "type": "compare",
        "content": "A 제품이 B 제품보다 ...",
        "modelNoList": [
            "RF84C906B4W",
            "RF85C9101AP"
        ]
    })

    recommend_response = responseDto.ChatRecommendDto(**{
        "type": "recommend",
        "content": {
            "message": "이 제품은 어떠세요?",
            "spec": {
                "modelNo": "RF84C906B4W",
                "name": "BESPOKE 냉장고 4도어 875 L",
                "기준가": "2340000",
                "혜택가": "1490000",
                "imageUrl": "https://images.samsung.com/kdp/goods/2023/11/16/a7b8d6bb-7665-4a69-bd14-6ac97871746b.png"
            }
        },
        "modelNoList": [
            "RF84C906B4W"
        ]
    })

    response = responseDto.ChatResponseDto(**{
        "data": recommend_response,
        "success": True
    })
    return response


@router.post("/feedback", status_code=200)
async def post_chat(
        feedbackRequestDto: requestDto.FeedbackRequestDto
):
    print(feedbackRequestDto)
    return {"success": True}

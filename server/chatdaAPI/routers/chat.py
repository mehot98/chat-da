from fastapi import APIRouter

import models.response.chat.ChatResponseDto as Dto
from models.response.chat.ChatRequestDto import ChatRequestDto

# prefix == chat
router = APIRouter()


@router.post("", status_code=200, response_model=Dto.ChatResponseDto)
async def post_chat(
        chatRequestDto: ChatRequestDto
):
    """
    기본 챗봇과의 대화 API
    입력: uuid, content
    응답: chatResponse (type, content, modelNoList or modelNo)
    """

    print(chatRequestDto)

    info_response = Dto.ChatInfoDto(**{
        "type": "info",
        "content": "A 제품은 ~~~하고 ~~해여",
        "modelNo": "RF85C9101AP"
    })

    compare_response = Dto.ChatCompareDto(**{
        "type": "compare",
        "content": "A 제품이 B 제품보다 ...",
        "modelNoList": [
            "RF84C906B4W",
            "RF85C9101AP"
        ]
    })

    recommend_response = Dto.ChatRecommendDto(**{
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

    response = Dto.ChatResponseDto(**{
        "data": recommend_response,
        "success": True
    })
    return response

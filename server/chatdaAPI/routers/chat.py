from fastapi import APIRouter

import models.response.ChatResponseDto as Dto

# prefix == chat
router = APIRouter()


@router.post("/")
async def get_chat():
    """
    기본 챗봇과의 대화시 호출되는 API
    입력값은 UUID와 채팅 내역을 보내주면 된다
    :return: type, content, modelNoList
    """

    info_response = Dto.ChatInfoResponseDto(**{
        "type": "info",
        "content":  "A 제품은 ~~~하고 ~~해여",
        "modelNo": "RF85C9101AP"
    })

    compare_response = Dto.ChatCompareResponseDto(**{
        "type": "compare",
        "content": "A 제품이 B 제품보다 ...",
        "modelNoList": [
            "RF84C906B4W",
            "RF85C9101AP"
        ]
    })

    recommend_response = Dto.ChatRecommendResponseDto(**{
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

    return info_response

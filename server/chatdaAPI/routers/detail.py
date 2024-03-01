from fastapi import APIRouter

import models.response.detail.DetailResponseDto as Dto

# prefix == detail
router = APIRouter()


@router.get("/{modelNo}", status_code=200, response_model=Dto.DetailResponseDto)
async def get_spec(
        modelNo: str
):
    """
    모델에 대한 상세 스펙 정보 요청 API
    입력: path variable - ModelNo
    응답: detailResponse(type, spec, modelNo)
    """
    print(modelNo)
    detail = Dto.DetailDto(**{
        "type": "info",
        "spec": {
            "modelNo": "RF84C906B4W",
            "name": "BESPOKE 냉장고 4도어 870 L",
            "category": "냉장고",
            "가로": "912",
            "높이": "1853",
            "깊이": "960",
            "제품타입": "BESPOKE 냉장고 4도어",
            "전체 용량": "870",
            "냉장실 용량": "517",
            "냉동실 용량": "177",
            "맞춤보관실 용량": "176",
            "소비효율등급": "1",
            "소비 전력": "42.8",
            "기준가": "2340000",
            "혜택가": "1490000",
            "reviewSummary": "삼성 냉장고로 바꿨는데 디자인도 좋고 기능도 편리해요. 김치냉장고까지 추가하면 완벽할 것 같아요. 키친핏 냉장,냉동고 세트는 크기도 적당하고 디자인도 이쁘게 잘 어울려요.",
            "reviewCount": "303",
            "rating": "4.9",
            "imageUrl": "https://images.samsung.com/kdp/goods/2023/11/16/a7b8d6bb-7665-4a69-bd14-6ac97871746b.png"
        },
        "modelNo": "RF84C906B4W"
    })

    response = Dto.DetailResponseDto(**{
        "data": detail,
        "success": True
    })
    return response

from fastapi import APIRouter, Query
from models.dto.HttpResponseDto import HttpResponseDto

# prefix == summary
router = APIRouter()


@router.get("/review", status_code=200)
async def get_review(
        model_no: str = Query(..., alias="modelNo")
):
    """
    특정 제품의 리뷰 요약 정보 조회 API
    입력: modelNo
    응답: content
    """

    print(model_no)

    review_response = {
        "content": "리뷰 내용 요약본입니다"
    }

    response = HttpResponseDto(**{
        "data": review_response,
        "success": True
    })
    return response

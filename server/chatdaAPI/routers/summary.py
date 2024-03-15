from fastapi import APIRouter, Query, status

# prefix == summary
router = APIRouter()


@router.get("/review", status_code=status.HTTP_200_OK)
def get_review(
        model_no: str = Query(..., alias="modelNo")
):
    """
    특정 제품의 리뷰 요약 정보 조회 API\n
    입력: modelNo\n
    응답: content\n
    """


    response = {
        "content": "리뷰 내용 요약본입니다"
    }

    return response


@router.get("/detail", status_code=status.HTTP_200_OK)
def get_detail(
        model_no: str = Query(..., alias="modelNo")
):
    """
    특정 제품의 정보 요약 조회 API
    입력: modelNo
    응답: content
    """

    response = {
        "content": "제품 본문에 있는 설명 요약본입니다."
    }

    return response

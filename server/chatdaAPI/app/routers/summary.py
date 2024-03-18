from fastapi import APIRouter, Query, status
from fastapi.params import Depends
from sqlalchemy.orm import Session

import chatdaAPI.app.models.dao.review_dao as dao
from chatdaAPI.app.models.utils.database import get_db

# prefix == summary
router = APIRouter()


@router.get("/review", status_code=status.HTTP_200_OK)
def get_review(
        model_no: str = Query(..., alias="modelNo"),
        db: Session = Depends(get_db)
):
    """
    특정 제품의 리뷰 요약 정보 조회 API\n
    입력: modelNo\n
    응답: content\n
    """
    review = dao.get_review_using_model(db, 제품_코드=model_no)

    response = {
        "content": review.리뷰_요약
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

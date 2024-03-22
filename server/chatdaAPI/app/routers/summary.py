from fastapi import APIRouter, Query, status
from fastapi.params import Depends
from sqlalchemy.orm import Session

import chatdaAPI.app.models.dao.summary_review_dao as review_dao
import chatdaAPI.app.models.dao.summary_detail_dao as detail_dao
from chatdaAPI.app.models.dto.summary.SummaryResponseDto import init_summary_response, SummaryResponseDto
from chatdaAPI.app.models.utils.database import get_db

# prefix == summary
router = APIRouter()


@router.get("/review", status_code=status.HTTP_200_OK,
            response_model=SummaryResponseDto)
def get_review(
        model_no: str = Query(..., alias="modelNo"),
        db: Session = Depends(get_db)
):
    """
    특정 제품의 리뷰 요약 정보 조회 API\n
    입력: modelNo\n
    응답: content\n
    """
    review = review_dao.get_summary_review_using_model(db, 제품_코드=model_no)

    if review:
        response = init_summary_response(review.리뷰_요약)
    else:
        response = init_summary_response("존재하지 않는 제품입니다")

    return response


@router.get("/detail", status_code=status.HTTP_200_OK,
            response_model=SummaryResponseDto)
def get_detail(
        model_no: str = Query(..., alias="modelNo"),
        db: Session = Depends(get_db)
):
    """
    특정 제품의 정보 요약 조회 API\n
    입력: modelNo\n
    응답: content\n
    """

    detail = detail_dao.get_summary_detail_using_model(db, 제품_코드=model_no)
    if detail:
        response = init_summary_response(detail.정보_요약)
    else:
        response = init_summary_response("존재하지 않는 제품입니다")

    return response

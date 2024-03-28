from fastapi import APIRouter, Query, status, Depends
from sqlalchemy.orm import Session

import chatdaAPI.app.models.dto.compare.CompareResponseDto as Dto
import chatdaAPI.app.models.exmaple_compare as dump
from chatdaAPI.app.models.dao.detail_dao import get_product_list_detail_using_model
from chatdaAPI.app.models.utils.database import get_db

# prefix == compare
router = APIRouter()


@router.get("", status_code=status.HTTP_200_OK, response_model=Dto.CompareResponseDto)
def get_compare_detail(
        model_no: str = Query(..., alias="modelNo"),
        db: Session = Depends(get_db)
):
    """
    제품 비교 상세보기 페이지 API\n
    입력: modelNo(RF85C9101AP,RS84B5061M9)\n
    응답: CompareResponseDto(type, spec[], model_no_list[])\n
    """
    model_no_list = model_no.split(",")

    model_list = get_product_list_detail_using_model(db,model_no_list)

    response = Dto.CompareResponseDto(
        type="compare",
        spec=model_list,
        model_no_list=model_no_list
    )

    return response


def get_model_no_list(model_list):
    return [i["제품_코드"] for i in model_list]

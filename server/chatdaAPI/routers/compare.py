from fastapi import APIRouter, Query, status

import models.dto.compare.CompareResponseDto as Dto
import models.exmaple_compare as dump


# prefix == compare
router = APIRouter()


@router.get("", status_code=status.HTTP_200_OK, response_model=Dto.CompareResponseDto)
async def get_compare_detail(
        model_no: str = Query(..., alias="modelNo")
):
    """
    제품 비교 상세보기 페이지 API\n
    입력: modelNo(EWEWE2323,WEAFWEWE23)\n
    응답: CompareResponseDto(type, spec[], model_no_list[])\n
    """
    model_no_list = model_no.split(",")
    data = dump.compare_data
    response = Dto.CompareResponseDto(
        type=data["type"],
        spec=data["model_list"],
        model_no_list=get_model_no_list(data["model_list"])
    )

    return response


def get_model_no_list(model_list):
    return [i["제품_코드"] for i in model_list]

from fastapi import APIRouter, Query, status

import models.dto.detail.DetailResponseDto as Dto
import models.exmaple_detail as dump

# prefix == detail
router = APIRouter()


@router.get("/{modelNo}", status_code=status.HTTP_200_OK, response_model=Dto.DetailResponseDto)
async def get_spec(
        model_no: str = Query(..., alias="modelNo")
):
    """
    모델에 대한 상세 스펙 정보 요청 API\n
    입력: path variable - ModelNo\n
    응답: detailResponse(type, spec, modelNo)\n
    """
    data = dump.detail_data
    model = data["model_list"][0]
    response = Dto.DetailResponseDto(
        type=data["type"],
        detail_spec=model,
        model_no=model["제품_코드"]
    )
    return response

from models.CamelModel import CamelModel
from models.dto.Spec import DetailSpecDto


class DetailResponseDto(CamelModel):
    """
    제품 상세정보 스펙 요청
    """
    type: str
    detail_spec: DetailSpecDto
    model_no: str

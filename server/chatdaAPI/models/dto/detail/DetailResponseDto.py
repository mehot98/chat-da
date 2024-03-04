from models.CamelModel import CamelModel
from models.entity.spec.Spec import DetailSpecDto


class DetailDto(CamelModel):
    """
    제품 상세정보 스펙 요청
    """
    type: str
    detail_spec: DetailSpecDto
    model_no: str


class DetailResponseDto(CamelModel):
    """
    상세 정보 요청 형식 지정
    """
    data: DetailDto
    success: bool

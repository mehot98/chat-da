from models.CamelModel import CamelModel
from models.entity.spec.Spec import DetailSpecDto


class DetailDto(CamelModel):
    type: str
    detail_spec: DetailSpecDto
    model_no: str


class DetailResponseDto(CamelModel):
    data: DetailDto
    success: bool

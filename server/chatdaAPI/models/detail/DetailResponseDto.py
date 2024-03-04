from typing import Any

from models.CamelModel import CamelModel


class DetailDto(CamelModel):
    type: str
    spec: Any
    model_no: str


class DetailResponseDto(CamelModel):
    data: DetailDto
    success: bool

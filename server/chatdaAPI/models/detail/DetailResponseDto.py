from typing import Any

from pydantic import BaseModel


class DetailDto(BaseModel):
    type: str
    spec: Any
    modelNo: str


class DetailResponseDto(BaseModel):
    data: DetailDto
    success: bool

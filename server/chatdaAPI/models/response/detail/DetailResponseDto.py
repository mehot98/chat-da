from typing import Any

from pydantic import BaseModel


class DetailResponseDto(BaseModel):
    type: str
    spec: Any
    modelNo: str

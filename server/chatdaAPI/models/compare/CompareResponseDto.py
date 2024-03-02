from typing import Any, List

from pydantic import BaseModel, Field


class CompareResponseDto(BaseModel):
    type: str
    spec: Any
    modelNoList: List[str]

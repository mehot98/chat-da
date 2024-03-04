from typing import Any, List

from models.CamelModel import CamelModel


class CompareResponseDto(CamelModel):
    type: str
    spec: Any
    model_no_list: List[str]

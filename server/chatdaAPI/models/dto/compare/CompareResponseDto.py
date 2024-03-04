from typing import List

from models.CamelModel import CamelModel
from models.entity.spec.Spec import DetailSpecDto


class CompareResponseDto(CamelModel):
    type: str
    spec: List[DetailSpecDto]
    model_no_list: List[str]

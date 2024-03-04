from typing import List

from models.CamelModel import CamelModel
from models.entity.spec.Spec import DetailSpecDto


class CompareResponseDto(CamelModel):
    """
    제품 비교시 제품마다의 상세 비교 리스트
    """
    type: str
    spec: List[DetailSpecDto]
    model_no_list: List[str]
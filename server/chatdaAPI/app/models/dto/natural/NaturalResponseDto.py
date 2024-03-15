from typing import List

from models.CamelModel import CamelModel
from models.dto.Spec import DetailSpecDto


class NaturalResponseDto(CamelModel):
    """
    자연어 검색 결과
    """
    type: str
    spec: List[DetailSpecDto]
    model_no_list: List[str]


def init_natural_response(data):
    return NaturalResponseDto(
        type=data["type"],
        spec=data["model_list"],
        model_no_list=get_model_no_list(data["model_list"])
    )


# 모델 리스트를 배열로 추출하는 함수입니다
def get_model_no_list(model_list):
    return [i["제품_코드"] for i in model_list]

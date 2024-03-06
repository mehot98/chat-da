from typing import List, Union, Any

from models.CamelModel import CamelModel


class ChatInfoDto(CamelModel):
    """
    챗봇과의 대화 중에서 제품 정보에 대한 응답 스키마
    """
    type: str
    content: str
    model_no: str


class ChatCompareDto(CamelModel):
    """
    제품 비교 관련 챗봇 채팅 내용
    """
    type: str
    content: str
    model_no_list: List[str]


class ChatSpec(CamelModel):
    """
    각 제품마다 가지고 있는 간단한 정보 (추천에 사용)
    """
    제품_코드: str
    제품명: str
    가격: str
    혜택가: str
    image_url: str


class ChatContent(CamelModel):
    """
    제품 추천시 나타낼 메세지와 제품 정보
    """
    message: str
    spec: ChatSpec


class ChatRecommendDto(CamelModel):
    """
    챗봇 제품 추천 요청시 제품 정보
    """
    type: str
    content: ChatContent
    model_no: str


# 모델 리스트를 배열로 추출하는 함수입니다
def get_model_no_list(model_list):
    return [i["제품_코드"] for i in model_list]


# pydantic은 init 함수를 구현하면 안되므로 커스텀 함수를 구현합니다

def init_info_response(data):
    return ChatInfoDto(
        type=data["type"],
        content=data["content"],
        model_no=data["model_list"][0]["제품_코드"]
    )


def init_compare_response(data):
    return ChatCompareDto(
        type=data["type"],
        content=data["content"],
        model_no_list=get_model_no_list(data["model_list"])
    )


def init_recommend_response(data):
    model = data["model_list"][0]
    return ChatRecommendDto(
        type=data["type"],
        content={
            "message": data["content"],
            "spec": model
        },
        model_no=model["제품_코드"]
    )

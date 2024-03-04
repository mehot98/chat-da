from typing import List, Union

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
    model_no: str
    제품명: str
    기준가: str
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
    model_no_list: List[str]


class ChatResponseDto(CamelModel):
    """
    기본 채팅 응답을 보낼 형식 (response 형식은 data, success로 고정)
    """
    data: Union[ChatRecommendDto, ChatInfoDto, ChatCompareDto]
    success: bool


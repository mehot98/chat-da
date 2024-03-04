from typing import List, Union

from models.CamelModel import CamelModel


class ChatInfoDto(CamelModel):
    type: str
    content: str
    model_no: str


class ChatCompareDto(CamelModel):
    type: str
    content: str
    model_no_list: List[str]


class ChatSpec(CamelModel):
    model_no: str
    name: str
    기준가: str
    혜택가: str
    image_url: str


class ChatContent(CamelModel):
    message: str
    spec: ChatSpec


class ChatRecommendDto(CamelModel):
    type: str
    content: ChatContent
    model_no_list: List[str]


class ChatResponseDto(CamelModel):
    data: Union[ChatRecommendDto, ChatInfoDto, ChatCompareDto]
    success: bool


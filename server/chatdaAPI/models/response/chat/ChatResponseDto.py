from typing import List, Union

from pydantic import BaseModel


class ChatInfoDto(BaseModel):
    type: str
    content: str
    modelNo: str


class ChatCompareDto(BaseModel):
    type: str
    content: str
    modelNoList: List[str]


class ChatSpec(BaseModel):
    modelNo: str
    name: str
    기준가: str
    혜택가: str
    imageUrl: str


class ChatContent(BaseModel):
    message: str
    spec: ChatSpec


class ChatRecommendDto(BaseModel):
    type: str
    content: ChatContent
    modelNoList: List[str]


class ChatResponseDto(BaseModel):
    data: Union[ChatRecommendDto, ChatInfoDto, ChatCompareDto]
    success: bool
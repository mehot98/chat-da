from typing import List

from pydantic import BaseModel


class ChatInfoResponseDto(BaseModel):
    type: str
    content: str
    modelNo: str


class ChatCompareResponseDto(BaseModel):
    type: str
    content: str
    modelNoList: List[str]


class Spec(BaseModel):
    modelNo: str
    name: str
    기준가: str
    혜택가: str
    imageUrl: str


class Content(BaseModel):
    message: str
    spec: Spec


class ChatRecommendResponseDto(BaseModel):
    type: str
    content: Content
    modelNoList: List[str]

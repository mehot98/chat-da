from typing import Literal

from pydantic import BaseModel


class ChatRequestDto(BaseModel):
    uuid: str
    content: str


class FeedbackRequestDto(BaseModel):
    uuid: str
    created_at: str
    feedback: Literal["긍정", "부정"]


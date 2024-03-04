from typing import Literal

from models.CamelModel import CamelModel


class ChatRequestDto(CamelModel):
    uuid: str
    content: str


class FeedbackRequestDto(CamelModel):
    uuid: str
    created_at: str
    feedback: Literal["긍정", "부정"]

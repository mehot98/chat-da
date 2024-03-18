from typing import Literal

from chatdaAPI.app.models.CamelModel import CamelModel


class ChatRequestDto(CamelModel):
    """
    기본적으로 챗봇과 채팅을 할 때 사용 되는 스키마
    """
    uuid: str
    content: str


class FeedbackRequestDto(CamelModel):
    """
    챗봇과의 대화에 대한 피드백 스키마
    """
    uuid: str
    created_at: str
    feedback: Literal["긍정", "부정"]

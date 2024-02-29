from typing import List

from pydantic import BaseModel


class ChatResponseDto(BaseModel):
    type: str
    content: str
    modelNoList: List[str]

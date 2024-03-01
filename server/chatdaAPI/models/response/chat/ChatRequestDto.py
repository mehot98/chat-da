from pydantic import BaseModel


class ChatRequestDto(BaseModel):
    uuid: str
    content: str


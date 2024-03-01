from pydantic import BaseModel
from typing import Any


class HttpResponseDto(BaseModel):
    data: Any
    success: bool

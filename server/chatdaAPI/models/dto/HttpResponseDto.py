from typing import Any

from models.CamelModel import CamelModel


class HttpResponseDto(CamelModel):
    data: Any
    success: bool

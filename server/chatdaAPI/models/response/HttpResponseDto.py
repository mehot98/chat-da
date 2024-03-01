from dataclasses import dataclass
from typing import Any


@dataclass
class HttpResponseDto:
    data: Any
    success: bool

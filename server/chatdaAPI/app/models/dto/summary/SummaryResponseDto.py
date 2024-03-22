
from chatdaAPI.app.models.utils.CamelModel import CamelModel


class SummaryResponseDto(CamelModel):
    """
    요약 내용 응답
    """
    content: str


def init_summary_response(data):
    return SummaryResponseDto(
        content=data
    )

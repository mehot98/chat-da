from datetime import datetime
from typing import Optional

from sqlalchemy import String, Text, DateTime
from sqlalchemy.orm import Mapped, mapped_column

from chatdaAPI.app.models.utils.database import Base


class Detail(Base):
    """
    제품 요약 정보에 대한 테이블과 관련된 Entity입니다
    """
    __tablename__ = 'refridgerator_details'

    id: Mapped[int] = mapped_column(primary_key=True, autoincrement=True)
    제품_코드: Mapped[str] = mapped_column(String(20))
    정보_요약: Mapped[Optional[str]] = mapped_column(Text)
    created_at: Mapped[datetime] = mapped_column(DateTime, default=datetime.now)

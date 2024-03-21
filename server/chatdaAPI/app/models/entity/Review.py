from datetime import datetime
from typing import Optional

from sqlalchemy import String, Text, DateTime
from sqlalchemy.orm import Mapped, mapped_column

from chatdaAPI.app.models.utils.database import Base


class Review(Base):
    """
    리뷰 정보 요약 테이블 Entity
    """
    __tablename__ = '리뷰_정보'

    id: Mapped[int] = mapped_column(primary_key=True, autoincrement=True)
    제품_코드: Mapped[str] = mapped_column(String(20))
    평점: Mapped[str] = mapped_column(String(10))
    리뷰_개수: Mapped[int]
    리뷰_요약: Mapped[Optional[str]] = mapped_column(Text)
    created_at: Mapped[datetime] = mapped_column(DateTime, default=datetime.now)

from typing import Optional

from chatdaAPI.app.models.utils.CamelModel import CamelModel


class SpecDto(CamelModel):
    제품_코드:str
    제품명: str
    가로: Optional[str] = None
    높이: Optional[str] = None
    깊이: Optional[str] = None
    제품_타입: Optional[str] = None
    무게: Optional[str] = None
    전체_용량: Optional[str] = None
    냉장실_용량: Optional[str] = None
    냉동실_용량: Optional[str] = None
    맞춤보관실_용량: Optional[str] = None
    소비효율등급: Optional[str] = None
    소비_전력: Optional[str] = None


class DetailSpecDto(CamelModel):
    제품_코드: str
    제품명: str
    가로: Optional[str] = None
    높이: Optional[str] = None
    깊이: Optional[str] = None
    제품_타입: Optional[str] = None
    무게: Optional[str] = None
    전체_용량: Optional[str] = None
    냉장실_용량: Optional[str] = None
    냉동실_용량: Optional[str] = None
    맞춤보관실_용량: Optional[str] = None
    소비효율등급: Optional[str] = None
    소비_전력: Optional[str] = None
    할인가: Optional[str] = None
    가격: Optional[str] = None
    리뷰_요약: Optional[str] = None
    리뷰_개수: Optional[int] = None
    평점: Optional[str] = None
    image_url: Optional[str] = None

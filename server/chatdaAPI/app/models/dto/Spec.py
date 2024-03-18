from chatdaAPI.app.models.CamelModel import CamelModel


class SpecDto(CamelModel):
    제품_코드:str
    제품명: str
    가로: str
    높이: str
    깊이: str
    제품_타입: str
    무게: str
    전체_용량: str
    냉장실_용량: str
    냉동실_용량: str
    맞춤보관실_용량: str
    소비효율등급: str
    소비_전력: str


class DetailSpecDto(CamelModel):
    제품_코드: str
    제품명: str
    가로: str
    높이: str
    깊이: str
    제품_타입: str
    무게: str
    전체_용량: str
    냉장실_용량: str
    냉동실_용량: str
    맞춤보관실_용량: str
    소비효율등급: str
    소비_전력: str
    혜택가: str
    가격: str
    review_summary: str
    review_count: int
    rating: float
    image_url: str

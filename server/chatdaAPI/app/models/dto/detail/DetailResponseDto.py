from typing import Optional

from chatdaAPI.app.models.CamelModel import CamelModel


class DetailResponseDto(CamelModel):
    """
    제품 상세정보 스펙 요청
    """
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
    가격: Optional[str] = None
    리뷰_요약: Optional[str] = None
    리뷰_개수: Optional[int] = None
    평점: Optional[str] = None
    정보_요약: Optional[str] = None
    image_url: Optional[str] = None


def init_detail_response(product, product_detail, summary_review, summary_detail):
    return DetailResponseDto(
        제품_코드=product.제품_코드,
        제품명=product.제품명,
        가로=product.가로,
        높이=product.높이,
        깊이=product.깊이,
        제품_타입=product.제품_타입,
        무게=product.무게,
        전체_용량=product.전체_용량,
        냉장실_용량=product.냉장실_용량,
        냉동실_용량=product.냉동실_용량,
        맞춤보관실_용량=product.맞춤보관실_용량,
        소비효율등급=product.소비효율등급,
        소비_전력=product.소비_전력,
        가격=product.가격,
        리뷰_요약=summary_review.리뷰_요약,
        리뷰_개수=summary_review.리뷰_개수,
        평점=summary_review.평점,
        정보_요약=summary_detail.정보_요약,
        image_url=product_detail.image_url
    )

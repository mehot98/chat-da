from sqlalchemy.orm import Session

from chatdaAPI.app.models.entity.Detail import Detail
from chatdaAPI.app.models.entity.Product import 냉장고, 냉장고_추가정보
from chatdaAPI.app.models.entity.Review import Review
from chatdaAPI.app.models.dto.detail.DetailResponseDto import init_detail_response


def get_summary_detail_using_model(db: Session, 제품_코드: str):
    product = db.query(냉장고).filter(냉장고.제품_코드 == 제품_코드).first()
    if product is None:
        return {
            "error": "Not found"
        }
    product_detail = db.query(냉장고_추가정보).filter(냉장고_추가정보.제품_코드 == 제품_코드).first()
    summary_review = db.query(Review).filter(Review.제품_코드 == 제품_코드).first()
    summary_detail = db.query(Detail).filter(Detail.제품_코드 == 제품_코드).first()

    result = init_detail_response(product, product_detail, summary_review, summary_detail)

    return result

from sqlalchemy.orm import Session

from chatdaAPI.app.models.entity.Review import Review


def get_summary_review_using_id(db: Session, review_id: int):
    """
    요약된 리뷰 정보를 id를 통해 검색
    """
    return db.query(Review).filter(Review.id == review_id).first()


def get_summary_review_using_model(db: Session, 제품_코드: str):
    """
    요약된 리뷰 정보를 제품 코드를 통해 검색
    """
    return db.query(Review).filter(Review.제품_코드 == 제품_코드).first()

from sqlalchemy.orm import Session

from chatdaAPI.app.models.entity.Review import Review


def get_review_using_id(db: Session, review_id: int):
    return db.query(Review).filter(Review.id == review_id).first()


def get_review_using_model(db: Session, 제품_코드: str):
    return db.query(Review).filter(Review.제품_코드 == 제품_코드).first()

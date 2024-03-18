from sqlalchemy.orm import Session

from chatdaAPI.app.models.entity.review import Review


def get_review(db: Session, review_id: int):
    print(db)
    return db.query(Review).filter(Review.id == review_id).first()


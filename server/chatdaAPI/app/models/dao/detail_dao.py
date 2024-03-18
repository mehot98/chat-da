from sqlalchemy.orm import Session

from chatdaAPI.app.models.entity.Detail import Detail


def get_detail_using_id(db: Session, detail_id: int):
    return db.query(Detail).filter(Detail.id == detail_id).first()


def get_detail_using_model(db: Session, 제품_코드: str):
    return db.query(Detail).filter(Detail.제품_코드 == 제품_코드).first()

from sqlalchemy.orm import Session

from chatdaAPI.app.models.entity.Product import Product


def get_summary_detail_using_id(db: Session, detail_id: int):
    return db.query(Product).filter(Product.id == detail_id).first()


def get_summary_detail_using_model(db: Session, 제품_코드: str):
    return db.query(Product).filter(Product.제품_코드 == 제품_코드).first()

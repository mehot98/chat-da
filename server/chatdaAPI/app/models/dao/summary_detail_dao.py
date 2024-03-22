from sqlalchemy.orm import Session

from chatdaAPI.app.models.entity.Detail import Detail


def get_summary_detail_using_id(db: Session, detail_id: int):
    """
    요약된 제품 정보를 id를 통해 검색
    """
    return db.query(Detail).filter(Detail.id == detail_id).first()


def get_summary_detail_using_model(db: Session, 제품_코드: str):
    """
    요약된 제품 정보를 제품 코드를 통해 검색
    """
    return db.query(Detail).filter(Detail.제품_코드 == 제품_코드).first()

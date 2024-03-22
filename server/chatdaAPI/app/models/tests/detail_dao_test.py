from fastapi import FastAPI

import chatdaAPI.app.models.dao.summary_detail_dao as dao
from chatdaAPI.app.models.utils.database import engine, Base, get_db

Base.metadata.create_all(bind=engine)

app = FastAPI()

"""
     Depends의 경우 라우터를 통해서만 입력이 가능하다
     때문에 별도로 Session을 만들어서 입력해줘야 하는데
     get_db()로 생성한다면 generator를 반환하므로 next를
     통해 세션을 받아주는 작업이 필요함

"""


def get_summary_detail_using_id(detail_id: int):
    """
        정보 요약 id를 통해 전체 요약 정보를 조회하는 함수 테스트
    """
    db = get_db()
    return dao.get_summary_detail_using_id(next(db), detail_id=detail_id)


def get_summary_detail_using_model(model_no: str):
    """
        제품 코드를 통해 제품 요약 정보를 조회하는 함수 테스트
    """

    db = get_db()
    return dao.get_summary_detail_using_model(next(db), 제품_코드=model_no)


if __name__ == "__main__":
    # 제품_정보 테이블에서 제품 코드와 아이디를 통해 조회합니다.
    print(get_summary_detail_using_id(31).정보_요약)
    print(get_summary_detail_using_model("RF85C90D1AP").정보_요약)

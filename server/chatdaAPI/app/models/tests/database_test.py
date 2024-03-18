from fastapi import FastAPI
from chatdaAPI.app.models.utils.database import Base, engine, get_db

Base.metadata.create_all(bind=engine)
app = FastAPI()

if __name__ == "__main__":
    try:
        # get_db는 db 연결을 모두 완료 한 뒤 generator 객체를 생성하는 함수
        # 함수 호출이 완료된다면 정상적으로 연결이 됐다는 뜻입니다.
        get_db()
        print("Success")
    except Exception as e:
        print("Error : " + e.__str__())




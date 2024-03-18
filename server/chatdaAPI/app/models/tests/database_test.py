if __name__ == "__main__":
    from chatdaAPI.keys import setup
    setup()

from fastapi import FastAPI
from chatdaAPI.app.models.utils.database import Base, engine, get_db

Base.metadata.create_all(bind=engine)
app = FastAPI()

if __name__ == "__main__":
    try:
        get_db()
        print("Success")
    except Exception as e:
        print("Error : " + e.__str__())




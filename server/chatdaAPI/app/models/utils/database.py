from chatdaAPI.config import config
from sqlalchemy import create_engine, URL
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

# MySQL 연결 URL 생성
url = URL.create(
    'mysql+pymysql',
    username=config.mysql_user,
    password=config.mysql_password,
    host=config.mysql_host,
    port=config.mysql_port,
    database=config.mysql_database
)

engine = create_engine(url, echo=False)
sessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()

Base.metadata.create_all(engine)
Base.metadata.bind = engine


def get_db():
    db = sessionLocal()
    try:
        yield db
    finally:
        db.close()

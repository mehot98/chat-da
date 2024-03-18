import os

from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.declarative import declarative_base

username = os.environ.get('MYSQL_ID')
password = os.environ.get('MYSQL_PWD')
host = os.environ.get('MYSQL_HOST', 'localhost')
port = os.environ.get('MYSQL_PORT', '3306')
database = os.environ.get('MYSQL_SCHEMA')

# MySQL 연결 URL 생성
url = f"mysql+pymysql://{username}:{password}@{host}:{port}/{database}"

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

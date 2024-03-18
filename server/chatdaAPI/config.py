import os
from dataclasses import dataclass

from dotenv import load_dotenv

load_dotenv()


@dataclass
class Config:
    mysql_user: str
    mysql_password: str
    mysql_host: str
    mysql_port: int
    mysql_database: str

    @staticmethod
    def create():
        return Config(
            mysql_user=os.getenv('MYSQL_USER', 'root'),
            mysql_password=os.getenv('MYSQL_PASSWORD', '<pw>'),
            mysql_host=os.getenv('MYSQL_HOST', 'localhost'),
            mysql_port=int(os.getenv('MYSQL_PORT', '3306')),
            mysql_database=os.getenv('MYSQL_DATABASE', 'chatda'),
        )


config = Config.create()

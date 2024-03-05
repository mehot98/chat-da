import sys
import os

# 현재 스크립트 파일의 절대 경로를 얻습니다.
script_dir = os.path.dirname(os.path.abspath(__file__))

# 'examples' 디렉토리의 상대 경로를 계산합니다.
examples_dir = os.path.join(script_dir, 'examples')

# 계산된 경로를 모듈 검색 경로에 추가합니다.
sys.path.append(examples_dir)

import keys

import prompt

from operator import itemgetter

from langchain_openai import ChatOpenAI

from langchain.chains import create_sql_query_chain

from langchain_community.utilities.sql_database import SQLDatabase
from langchain_community.tools.sql_database.tool import QuerySQLDataBaseTool

from langchain_core.globals import set_debug
from langchain_core.output_parsers import StrOutputParser
from langchain_core.runnables import RunnablePassthrough


# 체인 중간 과정 보기
set_debug(True)

# DB 불러오기
db = SQLDatabase.from_uri(
    f"mysql+pymysql://{os.environ['MYSQL_ID']}:{os.environ['MYSQL_PWD']}"
    f"@{os.environ['MYSQL_HOST']}/{os.environ['MYSQL_SCHEMA']}?charset=utf8mb4")
# DB 테이블 정보
context = db.get_context()

# 언어 모델 로드
llm = ChatOpenAI(model="gpt-3.5-turbo", temperature=0, verbose=True)

# SQL 실행을 위한 tool
execute_sql = QuerySQLDataBaseTool(db=db)


# 사용자의 입력으로부터 출력을 생성하는 함수
def get_output(user_input, search):
    # 사용자 입력으로부터 SQL 프롬프트와 제품을 리스트 형태로 보여줘야 하는지의 여부를 가져옴
    sql_prompt, user_input_type = prompt.sql_prompt(user_input)

    if search:
        is_list = True

    # SQL 생성을 위한 chain
    create_sql = create_sql_query_chain(llm, db, sql_prompt)

    # 답변 생성용 LCEL
    sql_chain = RunnablePassthrough.assign(query=create_sql).assign(
            result=itemgetter("query") | execute_sql
        )

    answer_chain = prompt.answer_prompt | llm | StrOutputParser()

    chain = sql_chain | answer_chain

    # 유저 입력으로부터 답변 생성
    result = chain.invoke({"question": user_input})

    return {
        "type": user_input_type,
        "content": result,
        "model_no_list": []
    }


# 테스트용
if __name__ == '__main__':
    get_output(user_input='RF85C90D1AP와 RF85C90D2AP의 차이점이 뭐야?', search=False)

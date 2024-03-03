import os

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

# SQL 생성을 위한 chain
create_sql = create_sql_query_chain(llm, db)

# SQL 실행을 위한 tool
execute_sql = QuerySQLDataBaseTool(db=db)

# 답변 생성용 LCEL
chain = (
    RunnablePassthrough.assign(query=create_sql).assign(
        result=itemgetter("query") | execute_sql
    )
    | prompt.answer_prompt | llm | StrOutputParser()
)


# 사용자의 입력으로부터 출력을 생성하는 함수
def get_output(user_input, search):
    # 사용자 입력으로부터 SQL 프롬프트와 제품을 리스트 형태로 보여줘야 하는지의 여부를 가져옴
    sql_prompt, show_list = prompt.sql_prompt(user_input)

    # 유저 입력으로부터 답변 생성
    chain.invoke({"question": user_input})


if __name__ == '__main__':
    get_output(user_input='무게가 가장 작은 제품을 추천해줘', search=False)

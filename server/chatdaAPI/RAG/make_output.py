import os
import mysql.connector
from RAG.keys import setup

setup()

import RAG.prompt as prompt

from langchain_openai import ChatOpenAI

from langchain.chains import create_sql_query_chain

from langchain_community.utilities.sql_database import SQLDatabase

from langchain_core.globals import set_debug
from langchain_core.output_parsers import StrOutputParser

from RAG.input_type import SEARCH

# 체인 중간 과정 보기
set_debug(True)

# DB 불러오기
db = SQLDatabase.from_uri(
    f"mysql+pymysql://{os.environ['MYSQL_ID']}:{os.environ['MYSQL_PWD']}"
    f"@{os.environ['MYSQL_HOST']}/{os.environ['MYSQL_SCHEMA']}?charset=utf8mb4",
    sample_rows_in_table_info=1,
    include_tables=["냉장고", "리뷰_정보"],
    max_string_length=400
)

# DB 테이블 정보
context = db.get_context()

# 언어 모델 로드
llm = ChatOpenAI(model="gpt-3.5-turbo", temperature=0, verbose=True)


# join문까지 포함된 sql을 이용하여 모든 정보를 가져와서 list를 만드는 함수
def make_model_list(query):
    # 데이터베이스 연결 설정
    config = {
        'user': os.environ['MYSQL_ID'],  # 데이터베이스 사용자 이름
        'password': os.environ['MYSQL_PWD'],  # 데이터베이스 비밀번호
        'host': os.environ['MYSQL_HOST'],  # 데이터베이스 호스트
        'database': os.environ['MYSQL_SCHEMA'],  # 데이터베이스 이름
        'raise_on_warnings': True
    }
    # 데이터베이스에 연결
    conn = mysql.connector.connect(**config)
    # 커서 생성 - 딕셔너리 형태로 결과를 가져오기 위해 dictionary=True 옵션 사용
    cursor = conn.cursor(dictionary=True)
    # SQL 쿼리 실행
    cursor.execute(query)
    # 모든 결과를 딕셔너리 리스트로 가져옴
    results = cursor.fetchall()
    # 연결 종료
    cursor.close()
    conn.close()

    return results


# 사용자의 입력으로부터 출력을 생성하는 함수
def get_output(user_input, search):
    # 사용자 입력으로부터 SQL 프롬프트와 제품을 리스트 형태로 보여줘야 하는지의 여부를 가져옴
    sql_prompt, user_input_type = prompt.sql_prompt(user_input)

    # SQL 생성을 위한 chain
    create_sql = create_sql_query_chain(llm, db, sql_prompt)

    max_rows = 4

    # SQL query 생성
    query = create_sql.invoke(
        {
            "question": user_input,
            "top_k": max_rows,
            "table_info": context["table_info"]
        }
    ).split("\n\n")

    # model list 생성
    model_list = make_model_list(query[1])
    
    # 검색 기능인 경우 model list만 생성후 리턴
    if search:
        return {
            "type": SEARCH,
            "content": "",
            "model_no_list": model_list
        }

    # 최대 행 개수 설정
    db._sample_rows_in_table_info = max_rows

    # SQL query 실행
    result = db.run(query[0], include_columns=True)

    # 얻은 결과로 답변 생성하는 체인 구성
    answer_chain = prompt.answer_prompt | llm | StrOutputParser()

    if result:
        # 유저 입력으로부터 답변 생성
        result = answer_chain.invoke({"question": user_input, "query": query[0], "result": result})
    else:
        result = "제품에 대한 정보가 존재하지 않습니다!"

    return {
        "type": user_input_type,
        "content": result,
        "model_no_list": model_list
    }


# # 테스트용
# if __name__ == '__main__':
#     res = get_output(user_input='냉장고 중에 평점이 높고 리뷰가 많은 제품들을 나열해줘', search=False)
#     print(f"type : {res['type']}")
#     print(f"content : {res['content']}")

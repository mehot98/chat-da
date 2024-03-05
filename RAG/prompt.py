import sys
import os

# 현재 스크립트 파일의 절대 경로를 얻습니다.
script_dir = os.path.dirname(os.path.abspath(__file__))

# 'examples' 디렉토리의 상대 경로를 계산합니다.
examples_dir = os.path.join(script_dir, 'examples')

# 계산된 경로를 모듈 검색 경로에 추가합니다.
sys.path.append(examples_dir)

from langchain_core.prompts import FewShotPromptTemplate, PromptTemplate

from examples import examples_main

# 답변 생성용 프롬프트
answer_prompt = PromptTemplate.from_template(
    """Given the following user question, corresponding SQL query, and SQL result, answer the user question.

Question: {question}
SQL Query: {query}
SQL Result: {result}
Answer: """
)

# SQL 생성용 프롬프트 초반
# from langchain.chains.sql_database.prompt import SQL_PROMPTS
mysql_prompt_prefix = """You are a MySQL expert. Given an input question, first create a syntactically correct MySQL query to run, then look at the results of the query and return the answer to the input question.
Unless the user specifies in the question a specific number of examples to obtain, query for at most {top_k} results using the LIMIT clause as per MySQL. You can order the results to return the most informative data in the database.
Never query for all columns from a table. You must query only the columns that are needed to answer the question. Wrap each column name in backticks (`) to denote them as delimited identifiers.
Pay attention to use only the column names you can see in the tables below. Be careful to not query for columns that do not exist. Also, pay attention to which column is in which table.
Pay attention to use CURDATE() function to get the current date, if the question involves "today".

Only use the following tables:
{table_info}

Use the following format:

User input: User input here
SQL query: SQL Query to run

Below are a number of examples of questions and their corresponding SQL queries."""

# SQL 예시 프롬프트
example_prompt = PromptTemplate.from_template(
    """User input: {input}
SQL query: {query}"""
)

# SQL 생성용 프롬프트 후반
mysql_prompt_suffix = """User input: {input}
SQL query: """


# SQL 생성용 프롬프트
def sql_prompt(user_input):
    # 유저 입력과 관련된 예시들과 유저 입력의 타입을 가져옴
    user_examples, user_input_type = examples_main.get_examples(user_input)

    # SQL 생성용 프롬프트 최종
    prompt = FewShotPromptTemplate(
        examples=user_examples,
        example_prompt=example_prompt,
        prefix=mysql_prompt_prefix,
        suffix=mysql_prompt_suffix,
        input_variables=["input", "top_k", "table_info"],
    )

    return prompt, user_input_type


# 테스트 용
if __name__ == '__main__':
    prom, user_input_type = sql_prompt("RF85C90D1AP와 RF85C90D2AP의 차이점이 뭐야?")

    print(prom.pretty_print())

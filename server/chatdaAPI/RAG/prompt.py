from langchain_core.prompts import FewShotPromptTemplate, PromptTemplate

from examples import make_examples

# 답변 생성용 프롬프트
answer_prompt = PromptTemplate.from_template(
    """Given the following user question, corresponding SQL query, and SQL result, answer the user question.
You must respond in the tone of a bright and polite butler, use `!` enough to sound bright.
You must always answer in sentences, never in the form of a list.
You must answer in Korean. You need to use a speaking style that ends with '요', not one that ends with '다' in Korean to sound bright.

Question: {question}
SQL Query: {query}
SQL Result: {result}
Answer: """
)

# SQL 생성용 프롬프트 초반
# from langchain.chains.sql_database.prompt import SQL_PROMPTS
mysql_prompt_prefix = """You are a MySQL expert.
Given an input question, You will always create 2 MySQL queries. 
Firstly, create a syntactically correct MySQL query to run only with using the following tables that i will give you below.
Pay attention to use only the column names you can see in the tables below.

Only use the following tables for the first MySQL query:
{table_info}

And secondly, create a syntactically correct MySQL query to run like the first one.
But in this case you will join more tables.
You will only need table's names to join and the column to join with the main table

Here is the additional table names to join:
[`냉장고_추가정보`,`리뷰_정보`,`제품_정보`,`할인_정보`]

And here is the standard column name to join:
`제품_코드`

Separate first query and second query using two line breakings like `\\n\\n`
You can order the results to return the most informative data in the database.
Always query for all columns from a table using * after SELECT.
Unless the user specifies in the question a specific number of examples to obtain,
query for at most {top_k} results using the LIMIT clause as per MySQL
Wrap each column name in backticks (`) to denote them as delimited identifiers.
Be careful to not query for columns that do not exist.
Also, pay attention to which column is in which table.

Use the following format:

User input: User input here
SQLquery: First SQL Query to run
Second SQL Query to run

Below are a number of examples of questions and their corresponding SQL queries."""

# SQL 예시 프롬프트
example_prompt = PromptTemplate.from_template(
    """User input: {input}
SQLquery: {query}"""
)

# SQL 생성용 프롬프트 후반
mysql_prompt_suffix = """User input: {input}"""


# SQL 생성용 프롬프트
def sql_prompt(user_input):
    # 유저 입력과 관련된 예시들과 유저 입력의 타입을 가져옴
    user_examples, input_type = make_examples.get_examples(user_input)

    # SQL 생성용 프롬프트 최종
    prompt = FewShotPromptTemplate(
        examples=user_examples,
        example_prompt=example_prompt,
        prefix=mysql_prompt_prefix,
        suffix=mysql_prompt_suffix,
        input_variables=["input", "table_info", "top_k"],
    )

    return prompt, input_type


# 테스트 용
if __name__ == '__main__':
    prom, user_input_type = sql_prompt("RF85C90D1AP와 RF85C90D2AP의 차이점이 뭐야?")

    print(prom.pretty_print())

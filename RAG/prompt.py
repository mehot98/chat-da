from langchain_core.prompts import PromptTemplate

# 답변 생성용 프롬프트
answer_prompt = PromptTemplate.from_template(
    """Given the following user question, corresponding SQL query, and SQL result, answer the user question.

Question: {question}
SQL Query: {query}
SQL Result: {result}
Answer: """
)


# SQL 생성용 프롬프트
def sql_prompt(user_input):
    return "prompt", False

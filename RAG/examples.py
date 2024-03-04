import os

import keys

from langchain_community.vectorstores import Chroma
from langchain.schema import Document

from langchain_openai import OpenAIEmbeddings

# vector DB 저장 경로
persist_directory = "./chroma_db"

# 디렉토리 존재 여부 확인
if not os.path.exists(persist_directory):
    # 저장된 DB가 존재하지 않는다면 데이터로부터 vector DB 생성

    # SQL 예시들
    examples = [
        {
            "input": "RF85C90D1AP와 RF85C90D2AP의 차이점이 뭐야?",
            "query": "SELECT * FROM '냉장고' WHERE `제품 코드`='RF85C90D1AP' OR `제품 코드`='RF85C90D2AP';",
            "list": "False"
        }
    ]

    # Dictionary 형태의 examples를 vector DB에 저장하기 위해 docs 형태로 변환
    few_shot_docs = [
        Document(page_content=example["input"], metadata={"query": example["query"], "list": example["list"]})
        for example in examples
    ]

    # 로컬에 저장
    db = Chroma.from_documents(few_shot_docs, OpenAIEmbeddings(), persist_directory=persist_directory)
else:
    # 저장된 DB가 존재한다면 가져오기
    db = Chroma(persist_directory=persist_directory, embedding_function=OpenAIEmbeddings())

# 새로 만들거나 불러온 vector DB로 retriever 생성
retriever = db.as_retriever(
    search_type="mmr",
    search_kwargs={'k': 3, 'fetch_k': 10}
)


def get_examples(user_input):
    # 유저 입력과 관련있는 예제 문서들 가져오기
    relevant_documents = retriever.get_relevant_documents(user_input)

    # 가장 연관있는 형태가 리스트 형태를 출력하라는 예시라면 리스트로 출력하도록 boolean변수를 설정
    if relevant_documents[0].metadata["list"] == "False":
        is_list = False
    else:
        is_list = True

    # 유저 입력과 관련있는 예제들 Dictionary 객체로 생성
    user_examples = [
        {
            "input": doc.page_content,
            "query": doc.metadata["query"]
        }
        for doc in relevant_documents
    ]

    return user_examples, is_list


# 테스트 용
if __name__ == '__main__':
    get_examples("RF85C90D1AP와 RF85C90D2AP의 차이점이 뭐야?")

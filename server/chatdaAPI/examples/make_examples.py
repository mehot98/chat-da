import os

import shutil

from dotenv import load_dotenv

import chatdaAPI.RAG.input_type as input_type

import chatdaAPI.examples.examples_compare as examples_compare
import chatdaAPI.examples.examples_info as examples_info
import chatdaAPI.examples.examples_recommend as examples_recommend
import chatdaAPI.examples.examples_ranking as examples_ranking
import chatdaAPI.examples.examples_search as examples_search
import chatdaAPI.examples.examples_general as examples_general
import chatdaAPI.examples.examples_additional as examples_additional
import chatdaAPI.examples.dictionary as dictionary

from langchain_community.vectorstores import Chroma
from langchain.schema import Document

from langchain_openai import OpenAIEmbeddings

load_dotenv()

# vector DB 저장 경로
persist_directory = "./chroma_db"

# 예시를 생성중에는 항상 vector DB를 새로 만들기 위한 변수
make_new_vectorDB = True

# 디렉토리 존재 여부 확인
if make_new_vectorDB or not os.path.exists(persist_directory):
    # 저장된 DB가 존재하지 않는다면 데이터로부터 vector DB 생성

    # 기존 데이터 삭제
    if make_new_vectorDB and os.path.exists(persist_directory):
        shutil.rmtree(persist_directory)

    # SQL 예시들
    examples_all = (examples_compare.examples + examples_info.examples
                    + examples_recommend.examples + examples_ranking.examples
                    + examples_search.examples + examples_general.examples
                    + examples_additional.examples + dictionary.examples)

    # Dictionary 형태의 examples를 vector DB에 저장하기 위해 docs 형태로 변환
    few_shot_docs = [
        Document(
            page_content=example["input"],
            metadata={"query": example["query"], "type": example["type"], "index": example["index"]}
        )
        for example in examples_all
    ]

    # 로컬에 저장
    db = Chroma.from_documents(few_shot_docs, OpenAIEmbeddings(), persist_directory=persist_directory)
else:
    # 저장된 DB가 존재한다면 가져오기
    db = Chroma(persist_directory=persist_directory, embedding_function=OpenAIEmbeddings())

# 새로 만들거나 불러온 vector DB로 retriever 생성
retriever = db.as_retriever(
    search_type="mmr",
    search_kwargs={'k': 1, 'fetch_k': 1}
)


def get_examples(user_input):
    # 유저 입력과 가장 관련있는 예제 하나를 가져오기
    # most_relevant_example = retriever.get_relevant_documents(user_input)[0]
    most_relevant_tuple = db.similarity_search_with_relevance_scores(user_input, 1)[0]
    most_relevant_example = most_relevant_tuple[0]

    # 같은 타입의 예제들을 가져오기
    user_input_type = most_relevant_example.metadata["type"]
    if user_input_type == input_type.COMPARE:
        examples_temp = examples_compare.examples
    elif user_input_type == input_type.INFO:
        examples_temp = examples_info.examples
    elif user_input_type == input_type.RECOMMEND:
        examples_temp = examples_recommend.examples
    elif user_input_type == input_type.RANKING:
        examples_temp = examples_ranking.examples
    elif user_input_type == input_type.SEARCH:
        examples_temp = examples_search.examples
    elif user_input_type == input_type.ADDITIONAL:
        examples_temp = examples_additional.examples
    elif user_input_type == input_type.DICTIONARY and most_relevant_tuple[1] > 0.99:
        return {
            "input": most_relevant_example.page_content,
            "query": most_relevant_example.metadata["query"]
        }, user_input_type
    else:
        return [], input_type.GENERAL

    # 유저 입력과 관련있는 예제들 Dictionary 객체로 생성
    user_examples = [{
        "input": most_relevant_example.page_content,
        "query": most_relevant_example.metadata["query"]
    }]
    count = 1

    for example in examples_temp:
        if example["index"] == most_relevant_example.metadata["index"]:
            continue

        user_examples.append({
            "input": example["input"],
            "query": example["query"]
        })

        count += 1

        # 최대 3개 예제 까지만
        if count >= 3:
            break

    return user_examples, user_input_type

# # 테스트 용
# if __name__ == '__main__':
#     get_examples("RF85C90D1AP와 RF85C90D2AP의 차이점이 뭐야?")

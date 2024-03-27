from fastapi import APIRouter, Query, Request
from fastapi.responses import FileResponse
from langchain_core.output_parsers import StrOutputParser
from langchain_openai import ChatOpenAI
import json
from starlette.responses import StreamingResponse

from chatdaAPI.RAG import prompt
from chatdaAPI.app.models.dto.chat.ChatRequestDto import ChatRequestDto as request_dto
import chatdaAPI.app.api.google_api as google

# prefix == compare
router = APIRouter()


@router.get("/test/google")
def get_tts(content: str = Query(..., alias="content")):
    return FileResponse(google.tts(content))


@router.get("/stream")
def get_stream(chat: str, req: Request):
    return StreamingResponse(get_openai_generator(chat, req), media_type="text/event-stream")


@router.post("/streamPost")
def get_stream(chat_request_dto: request_dto, req: Request):
    return StreamingResponse(get_openai_generator(chat_request_dto.content, req), media_type="text/event-stream")


async def get_openai_generator(query: str, req: Request):
    llm = ChatOpenAI(temperature=0.5, model_name="gpt-3.5-turbo-16k",
                     streaming=True,
                     )

    # 얻은 결과로 답변 생성하는 체인 구성
    answer_chain = prompt.answer_prompt | llm | StrOutputParser()

    # 유저 입력으로부터 답변 생성
    response = answer_chain.stream({"question": "냉장고 추천해줘", "query": "SELECT * FROM 냉장고", "result": "존재하지 않는 정보입니다."})

    # Question & Answer chain 구성
    # qChain = llm | StrOutputParser()

    # response = qChain.stream(query)

    # 만약 request 측 세션이 끊어지면 해당 Stream을 종료시키기
    is_disconnected = await req.is_disconnected()
    if is_disconnected: return

    # 메세지의 응답 type과 modelNo를 보내주기
    data = {
        "type": "애국가",
        "modelNo": [
            "SESEF224SESE",
            "SESEF224SESE"
        ]
    }
    yield f"data: {json.dumps(data)}\n\n"

    # GPT 응답에 대한 token을 EventStream으로 보내주기
    for event in response:
        data = {
            "data": event
        }
        yield f"data: {json.dumps(data)}\n\n"

import logging
import ecs_logging
import time
from random import randint


@router.get("/test/log")
def test_log():
    # !/usr/bin/python

    # 로거 생성
    logger = logging.getLogger("app")
    logger.setLevel(logging.DEBUG)

    # 콘솔 핸들러 설정
    console_handler = logging.StreamHandler()
    console_handler.setFormatter(ecs_logging.StdlibFormatter())
    logger.addHandler(console_handler)

    print("Generating log entries...")

    messages = [
        "Elvis has left the building.",  #
        "Elvis has left the oven on.",
        "Elvis has two left feet.",
        "Elvis was left out in the cold.",
        "Elvis was left holding the baby.",
        "Elvis left the cake out in the rain.",
        "Elvis came out of left field.",
        "Elvis exited stage left.",
        "Elvis took a left turn.",
        "Elvis left no stone unturned.",
        "Elvis picked up where he left off.",
        "Elvis's train has left the station."
    ]

    for _ in range(1, 20):
        random1 = randint(0, 15)
        random2 = randint(1, 10)
        if random1 > 11:
            random1 = 0
        if (random1 <= 4):
            logger.info(messages[random1], extra={"http.request.body.content": messages[random1]})
        elif (random1 >= 5 and random1 <= 8):
            logger.warning(messages[random1], extra={"http.request.body.content": messages[random1]})
        elif (random1 >= 9 and random1 <= 10):
            logger.error(messages[random1], extra={"http.request.body.content": messages[random1]})
        else:
            logger.critical(messages[random1], extra={"http.request.body.content": messages[random1]})
    # time.sleep(random2)

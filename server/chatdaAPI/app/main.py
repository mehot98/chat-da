import os

from chatdaAPI.config import config
print(os.getenv('OPENAI_API_KEY'),)


from chatdaAPI.app.routers.chat import router as chat_router
from chatdaAPI.app.routers.compare import router as compare_router
from chatdaAPI.app.routers.detail import router as detail_router
from chatdaAPI.app.routers.openapi import router as openapi_router
from chatdaAPI.app.routers.summary import router as summary_router
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware





app = FastAPI()


origins = [
    "*"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# 채팅 관련 라우터
app.include_router(chat_router, prefix="/chat", tags=["chat"])

# 상세 정보 라우터
app.include_router(detail_router, prefix="/model", tags=["model"])

# 상세 비교 라우터
app.include_router(compare_router, prefix="/compare", tags=["compare"])

# 요약 정보 라우터
app.include_router(summary_router, prefix="/summary", tags=["summary"])

# 오픈 API 라우터
app.include_router(openapi_router, prefix="/api", tags=["api"])

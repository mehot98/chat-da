from fastapi import FastAPI
from RAG.keys import setup

setup()

from routers.chat import router as chat_router
from routers.detail import router as detail_router
from routers.compare import router as compare_router
from routers.summary import router as summary_router
from routers.natural import router as natural_router

app = FastAPI()

# 채팅 관련 라우터
app.include_router(chat_router, prefix="/chat", tags=["chat"])

# 상세 정보 라우터
app.include_router(detail_router, prefix="/model", tags=["model"])

# 상세 비교 라우터
app.include_router(compare_router, prefix="/compare", tags=["compare"])

# 요약 정보 라우터
app.include_router(summary_router, prefix="/summary", tags=["summary"])

# 요약 정보 라우터
app.include_router(natural_router, prefix="/naturalSearch", tags=["naturalSearch"])

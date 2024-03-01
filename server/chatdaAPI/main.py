from fastapi import FastAPI
from routers.chat import router as chat_router
from routers.detail import router as detail_router


app = FastAPI()

# 채팅 관련 라우터
app.include_router(chat_router, prefix="/chat", tags=["chat"])

# 상세 정보 라우터
app.include_router(detail_router, prefix="/model", tags=["model"])

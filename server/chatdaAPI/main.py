from fastapi import FastAPI
from routers.chat import router as chats_router


app = FastAPI()

# 채팅 관련 라우터
app.include_router(chats_router, prefix="/chat", tags=["chat"])

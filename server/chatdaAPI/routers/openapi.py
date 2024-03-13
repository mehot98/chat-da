from fastapi import APIRouter
from fastapi.responses import FileResponse
import api.naver_api as naver
import api.google_api as google

# prefix == compare
router = APIRouter()


@router.get("/test/naver")
async def get():
    return {"message": naver.stt()}


@router.get("/test/google")
async def get():
    return FileResponse(google.tts("안녕하세요!"))

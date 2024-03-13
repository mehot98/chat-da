from fastapi import APIRouter
import api.naver_api as naver
import api.google_api as google


# prefix == compare
router = APIRouter()


@router.get("/test/naver")
async def get():
    naver.stt()


@router.get("/test/google")
async def get():
    google.tts("안녕하세요!")

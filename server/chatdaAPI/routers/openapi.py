from fastapi import APIRouter
from fastapi.responses import FileResponse
import api.naver_api as naver
import api.google_api as google
from RAG.make_output import get_output

# prefix == compare
router = APIRouter()


@router.get("/test/naver")
async def get_stt():
    return {"message": naver.stt()}


@router.get("/test/google")
async def get_tts():
    return FileResponse(google.tts("안녕하세요!"))


@router.get("/test/conversation")
async def get_conversation():
    try:
        # 음성 파일로부터 텍스트를 추출합니다
        user_text = naver.stt("./public/test_converstation.mp3")

        # 사용자의 텍스트를 OpenAI에게 전달해서 응답을 받습니다.
        data = get_output(user_input=user_text, search=False)
        print(data["content"])

        # OpenAI의 대답에 대한 텍스트를 음성 파일로 변환합니다
        voice_file = google.tts(data["content"])
        print(voice_file)
        return FileResponse(voice_file)
    except Exception as e:
        return {"message": str(e)}




from fastapi import APIRouter, Query
from fastapi.responses import FileResponse

import chatdaAPI.app.api.google_api as google

# prefix == compare
router = APIRouter()


@router.get("/test/google")
def get_tts(content: str = Query(..., alias="content")):
    return FileResponse(google.tts(content))

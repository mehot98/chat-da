from fastapi import APIRouter, Query, status
import models.dto.natural.NaturalResponseDto as response_dto
import models.example_natural as dump

# prefix == summary
router = APIRouter()


@router.get("/{content}", status_code=status.HTTP_200_OK, response_model=response_dto.NaturalResponseDto)
async def get_search(
        content: str
):
    """
    자연어 검색을 통한 제품 리스트 검색\n
    입력: content\n
    응답: naturalResponseDto\n
    """

    data = dump.natural_data
    response = response_dto.init_natural_response(data)

    return response

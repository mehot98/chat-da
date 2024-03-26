from typing import List, Optional

from pydantic import Field

from chatdaAPI.app.models.utils.CamelModel import CamelModel


class ChatInfoDto(CamelModel):
    """
    챗봇과의 대화 중에서 제품 정보에 대한 응답 스키마
    """
    type: str
    model_no: str


class ChatCompareDto(CamelModel):
    """
    제품 비교 관련 챗봇 채팅 내용
    """
    type: str
    model_no_list: List[str]


class ChatSpec(CamelModel):
    """
    각 제품마다 가지고 있는 간단한 정보 (추천에 사용)
    """
    제품_코드: str
    제품명: str
    가격: str = Field(default=None)
    혜택가: str = Field(default=None)
    image_url: str


class ChatSearchSpec(CamelModel):
    """
    자연어 검색에서 사용될 상세 정보, 각 제품마다의 상세 스펙
    """
    제품_코드: str
    제품명: str
    평점: Optional[str] = None
    리뷰_개수: Optional[int] = None
    가격: str
    혜택가: Optional[str] = None
    소비효율등급: Optional[str] = None
    가로: Optional[str] = None
    세로: Optional[str] = None
    높이: Optional[str] = None
    깊이: Optional[str] = None
    전체_용량: Optional[str] = None
    냉장실_용량: Optional[str] = None
    냉동실_용량: Optional[str] = None
    맞춤보관실_용량: Optional[str] = None
    smart_things: Optional[str] = "미지원"
    image_url: Optional[str] = None


class ChatRecommendDto(CamelModel):
    """
    챗봇 제품 추천 요청시 제품 정보
    """
    type: str
    content: ChatSpec
    model_no: str


class ChatSearchResponseDto(CamelModel):
    """
    자연어 검색 결과
    """
    type: str
    model_list: List[ChatSearchSpec]


class ChatRankingDto(CamelModel):
    """
    제품 순위 정보
    """
    type: str
    model_no_list: List[str]


class ChatGeneralDto(CamelModel):
    """
    일상 속 일반적인 대화
    """
    type: str


class ChatDictionaryResponseDto(CamelModel):
    """
    용어 검색시 사용되는 response
    """
    type: str


class ChatExceptionDto(CamelModel):
    """
    질문에 대한 답을 찾지 못했을 경우 예외 처리 대답
    """
    content: str = "잘 모르겠어요. 다시 질문해주세요."


# 모델 리스트를 배열로 추출하는 함수입니다
def get_model_no_list(model_list):
    return [i["제품_코드"] for i in model_list]


# pydantic은 init 함수를 구현하면 안되므로 커스텀 함수를 구현합니다

def init_info_response(data):
    return ChatInfoDto(
        type=data["type"],
        model_no=data["model_list"][0]["제품_코드"]
    )


def init_compare_response(data):
    return ChatCompareDto(
        type=data["type"],
        model_no_list=get_model_no_list(data["model_list"])
    )


def init_recommend_response(data):
    if data["model_list"] is None:
        return ChatExceptionDto()

    else:
        model = data["model_list"][0]
        return ChatRecommendDto(
            type=data["type"],
            content=model,
            model_no=model["제품_코드"]
        )


def init_ranking_response(data):
    return ChatRankingDto(
        type=data["type"],
        model_no_list=get_model_no_list(data["model_list"])
    )


def init_general_respose(data):
    return ChatGeneralDto(
        type=data["type"]
    )


def init_search_response(data):
    return ChatSearchResponseDto(
        type="search",
        model_list=data["model_list"]
    )


def init_dictionary_response(data):
    return ChatDictionaryResponseDto(
        type="dictionary"
    )

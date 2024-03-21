from chatdaAPI.RAG.input_type import SEARCH
from chatdaAPI.examples.base_query import join

examples = [
    {
        "input": "냉장고 중에 평점이 높고 리뷰가 많은 제품들을 나열해줘",
        "query": ("SELECT * FROM '냉장고' JOIN `리뷰_정보` ON `냉장고`.`제품_코드` = `리뷰_정보`.`제품_코드` "
                  "ORDER BY `리뷰_정보`.`평점` DESC, `리뷰_정보`.`리뷰_개수` DESC LIMIT 3;\n\n"
                  f"{join} ORDER BY `리뷰_정보`.`평점` DESC, `리뷰_정보`.`리뷰_개수` DESC LIMIT 10;"),
        "type": SEARCH,
        "index": 0
    },
]

from chatdaAPI.RAG.input_type import SEARCH
from chatdaAPI.examples.base_query import join

examples = [
    {
        "input": "냉장고 중에 평점이 높고 리뷰가 많은 제품들을 나열해줘",
        "query": ("SELECT * FROM 'refridgerators'"
                  " JOIN `refridgerator_reviews` ON `refridgerators`.`제품_코드` = `refridgerator_reviews`.`제품_코드` "
                  "ORDER BY `refridgerator_reviews`.`평점` DESC, `refridgerator_reviews`.`리뷰_개수` DESC LIMIT 3;\n\n"
                  f"{join} ORDER BY `refridgerator_reviews`.`평점` DESC, `refridgerator_reviews`.`리뷰_개수` DESC LIMIT 10;"),
        "type": SEARCH,
        "index": 0
    },
]

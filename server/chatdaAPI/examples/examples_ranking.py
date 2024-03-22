from chatdaAPI.RAG.input_type import RANKING
from chatdaAPI.examples.base_query import join

examples = [
    {
        "input": "요새 잘 나가는 냉장고가 뭐야?",
        "query": ("SELECT * FROM `refridgerator`"
                  " JOIN `refridgerator_reviews` ON `refridgerator`.`제품_코드` = `리뷰_정보`.`제품_코드` "
                  "ORDER BY `refridgerator_reviews`.`평점` DESC, `refridgerator_reviews`.`리뷰_개수` DESC LIMIT 3;\n\n"
                  f"{join} ORDER BY `refridgerator_reviews`.`평점` DESC, `refridgerator_reviews`.`리뷰_개수` DESC LIMIT 10;"),
        "type": RANKING,
        "index": 0
    },
]

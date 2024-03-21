from chatdaAPI.RAG.input_type import RANKING
from chatdaAPI.examples.base_query import join

examples = [
    {
        "input": "요새 잘 나가는 냉장고가 뭐야?",
        "query": ("SELECT * FROM `냉장고` JOIN `리뷰_정보` ON `냉장고`.`제품_코드` = `리뷰_정보`.`제품_코드` "
                  "ORDER BY `리뷰_정보`.`평점` DESC, `리뷰_정보`.`리뷰_개수` DESC LIMIT 3;\n\n"
                  f"{join} ORDER BY `리뷰_정보`.`평점` DESC, `리뷰_정보`.`리뷰_개수` DESC LIMIT 10;"),
        "type": RANKING,
        "index": 0
    },
]

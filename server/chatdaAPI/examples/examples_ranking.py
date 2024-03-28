from chatdaAPI.RAG.input_type import RANKING
from chatdaAPI.examples.base_query import join

examples = [
    {
        "input": "요새 잘 나가는 냉장고가 뭐야?",
        "query": ("SELECT * FROM `refridgerators`"
                  " JOIN `refridgerator_reviews` ON `refridgerators`.`제품_코드` = `리뷰_정보`.`제품_코드` "
                  "WHERE `가격` is not null "
                  "ORDER BY `refridgerator_reviews`.`평점` DESC, `refridgerator_reviews`.`리뷰_개수` DESC LIMIT 3;\n\n"
                  f"{join} WHERE `가격` is not null ORDER BY `refridgerator_reviews`.`평점` DESC, `refridgerator_reviews`.`리뷰_개수` DESC LIMIT 10;"),
        "type": RANKING,
        "index": 0
    },
    {
        "input": "제품 순위 알려줘",
        "query": ("SELECT * FROM `refridgerators`"
                  " JOIN `refridgerator_reviews` ON `refridgerators`.`제품_코드` = `리뷰_정보`.`제품_코드` "
                  "WHERE `가격` is not null "
                  "ORDER BY `refridgerator_reviews`.`평점` DESC, `refridgerator_reviews`.`리뷰_개수` DESC LIMIT 3;\n\n"
                  f"{join} WHERE `가격` is not null ORDER BY `refridgerator_reviews`.`평점` DESC, `refridgerator_reviews`.`리뷰_개수` DESC LIMIT 10;"),
        "type": RANKING,
        "index": 1
    },
]

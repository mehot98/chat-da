from RAG.input_type import RECOMMEND

examples = [
    {
        "input": "150만원 이내의 큰 냉장고를 찾고 있는데 추천해 줄 수 있어?",
        "query": "SELECT * FROM '냉장고' WHERE `가격`<='1500000 원' ORDER BY `전체_용량` DESC;\n\n"
        "SELECT * FROM '냉장고'"
                 " JOIN `냉장고_추가정보` ON `냉장고`.`제품_코드` = `냉장고_추가정보`.`제품_코드`"
                 " JOIN `리뷰_정보` ON `냉장고`.`제품_코드` = `리뷰_정보`.`제품_코드`"
                 " JOIN `제품_정보` ON `냉장고`.`제품_코드` = `제품_정보`.`제품_코드`"
                 " JOIN `할인_정보` ON `냉장고`.`제품_코드` = `할인_정보`.`제품_코드`"
                 " WHERE '냉장고'`가격`<='1500000 원' ORDER BY '냉장고'`전체_용량` DESC;",
        "type": RECOMMEND,
        "index": 0
    },
]

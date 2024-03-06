from RAG.input_type import INFO

examples = [
    {
        "input": "RF85C90D1AP에 대해서 설명해줘",
        "query": "SELECT * FROM '냉장고' WHERE `제품_코드`='RF85C90D1AP';\n\n"
        "SELECT * FROM '냉장고'"
                 " JOIN `냉장고_추가정보` ON `냉장고`.`제품_코드` = `냉장고_추가정보`.`제품_코드`"
                 " JOIN `리뷰_정보` ON `냉장고`.`제품_코드` = `리뷰_정보`.`제품_코드`"
                 " JOIN `제품_정보` ON `냉장고`.`제품_코드` = `제품_정보`.`제품_코드`"
                 " JOIN `할인_정보` ON `냉장고`.`제품_코드` = `할인_정보`.`제품_코드`"
                 " WHERE '냉장고'.`제품_코드`='RF85C90D1AP';",
        "type": INFO,
        "index": 0
    }
]

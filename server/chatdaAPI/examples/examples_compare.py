from RAG.input_type import COMPARE

base_query = "SELECT * FROM '냉장고' WHERE `제품_코드`='RF85C90D1AP' OR `제품_코드`='RF85C90D2AP';\n\n"
"SELECT * FROM '냉장고'"
" JOIN `냉장고_추가정보` ON `냉장고`.`제품_코드` = `냉장고_추가정보`.`제품_코드`"
" JOIN `리뷰_정보` ON `냉장고`.`제품_코드` = `리뷰_정보`.`제품_코드`"
" JOIN `제품_정보` ON `냉장고`.`제품_코드` = `제품_정보`.`제품_코드`"
" JOIN `할인_정보` ON `냉장고`.`제품_코드` = `할인_정보`.`제품_코드`"
" WHERE '냉장고'.`제품_코드`='RF85C90D1AP' OR '냉장고'.`제품_코드`='RF85C90D2AP';"

examples = [
    {
        "input": "RF85C90D1AP와 RF85C90D2AP의 차이점이 뭐야?",
        "query": base_query,
        "type": COMPARE,
        "index": 0
    },
    {
        "input": "RF85C90D1AP와 RF85C90D2AP의 주요 기능 및 성능을 비교해주세요.",
        "query": base_query,
        "type": COMPARE,
        "index": 1
    },
    {
        "input": "RF85C90D1AP와 RF85C90D2AP는 이름은 같은데 가격이 달라. 왜 다른거야?",
        "query": base_query,
        "type": COMPARE,
        "index": 1
    },
]

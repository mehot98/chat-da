from input_type import COMPARE

examples = [
    {
        "input": "RF85C90D1AP와 RF85C90D2AP의 차이점이 뭐야?",
        "query": "SELECT * FROM '냉장고' WHERE `제품_코드`='RF85C90D1AP' OR `제품_코드`='RF85C90D2AP';",
        "type": COMPARE,
        "index": 0
    }
]

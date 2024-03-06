from input_type import RECOMMEND

examples = [
    {
        "input": "150만원 이내의 큰 냉장고를 찾고 있는데 추천해 줄 수 있어?",
        "query": "SELECT * FROM '냉장고' WHERE `가격`<='1500000 원' ORDER BY `전체_용량` DESC;",
        "type": RECOMMEND,
        "index": 0
    },
]

from chatdaAPI.RAG.input_type import RECOMMEND
from chatdaAPI.examples.base_query import join

examples = [
    {
        "input": "150만원 이내의 큰 냉장고를 찾고 있는데 추천해 줄 수 있어?",
        "query": ("SELECT * FROM 'refridgerator' WHERE `가격`<='1500000 원' ORDER BY `전체_용량` DESC;\n\n"
                  f"{join} WHERE `refridgerator`.`가격`<='1500000 원' ORDER BY `refridgerator`.`전체_용량` DESC;"),
        "type": RECOMMEND,
        "index": 0
    },
    {
        "input": "냉장실 용량대비 가장 가격이 저렴한 냉장고를 추천해줘",
        "query": ("SELECT * FROM 'refridgerator' ORDER BY `냉장실_용량` DESC, `가격` DESC;\n\n"
                  f"{join} ORDER BY `refridgerator`.`전체_용량` DESC, `refridgerator`.`가격` DESC;"),
        "type": RECOMMEND,
        "index": 1
    },
    {
        "input": "냉장고 중에 100만원대의 냉장고를 10개 추천해줘",
        "query": ("SELECT * FROM 'refridgerator' WHERE `가격`<='1500000 원' ORDER BY `전체_용량` DESC;\n\n"
                  f"{join} WHERE `refridgerator`.`가격`<='1000000 원' ORDER BY `refridgerator`.`전체_용량` DESC LIMIT 10;"),
        "type": RECOMMEND,
        "index": 2
    },
]

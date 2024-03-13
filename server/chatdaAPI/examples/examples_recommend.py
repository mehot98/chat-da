from RAG.input_type import RECOMMEND
from examples.base_query import join

examples = [
    {
        "input": "150만원 이내의 큰 냉장고를 찾고 있는데 추천해 줄 수 있어?",
        "query": "SELECT * FROM '냉장고' WHERE `가격`<='1500000 원' ORDER BY `전체_용량` DESC;\n\n"
        f"{join} WHERE `냉장고`.`가격`<='1500000 원' ORDER BY `냉장고`.`전체_용량` DESC;",
        "type": RECOMMEND,
        "index": 0
    },
    {
        "input": "냉장실 용량대비 가장 가격이 저렴한 냉장고를 추천해줘",
        "query": "SELECT * FROM '냉장고' ORDER BY `냉장실_용량` DESC, `가격` DESC;\n\n"
        f"{join} ORDER BY `냉장고`.`전체_용량` DESC, `냉장고`.`가격` DESC;",
        "type": RECOMMEND,
        "index": 1
    },
]

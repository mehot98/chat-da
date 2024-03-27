from chatdaAPI.RAG.input_type import RECOMMEND
from chatdaAPI.examples.base_query import join

examples = [
    {
        "input": "150만원 이내의 큰 냉장고를 찾고 있는데 추천해 줄 수 있어?",
        "query": ("SELECT * FROM 'refridgerators' WHERE `가격`<='1500000 원' ORDER BY `전체_용량` DESC;\n\n"
                  f"{join} WHERE `refridgerators`.`가격`<='1500000 원' ORDER BY `refridgerators`.`전체_용량` DESC;"),
        "type": RECOMMEND,
        "index": 0
    },
    {
        "input": "냉장실 용량대비 가장 가격이 저렴한 냉장고를 추천해줘",
        "query": ("SELECT * FROM 'refridgerators' ORDER BY `냉장실_용량` DESC, `가격` DESC;\n\n"
                  f"{join} ORDER BY `refridgerators`.`전체_용량` DESC, `refridgerators`.`가격` DESC;"),
        "type": RECOMMEND,
        "index": 1
    },
    {
        "input": "냉장고 중에 100만원대의 냉장고를 10개 추천해줘",
        "query": ("SELECT * FROM 'refridgerators' WHERE `가격`<='1500000 원' ORDER BY `전체_용량` DESC;\n\n"
                  f"{join} WHERE `refridgerators`.`가격`<='1000000 원' ORDER BY `refridgerators`.`전체_용량` DESC LIMIT 10;"),
        "type": RECOMMEND,
        "index": 2
    },
    {
        "input": "에너지 효율이 좋으면서 리뷰 평점도 높은 냉장고 추천해줘",
        "query": ("SELECT * FROM 'refridgerators'"
                  " JOIN `refridgerator_reviews` ON `refridgerators`.제품_코드 = `refridgerator_reviews`.제품_코드 "
                  "WHERE `refridgerators`.소비효율등급 <= '1등급'"
                  " ORDER BY `refridgerator_reviews`.평점 DESC, `refridgerators`.소비효율등급;\n\n"
                  f"{join} WHERE `refridgerators`.소비효율등급 <= '1등급'"
                  f" ORDER BY `refridgerator_reviews`.평점 DESC, `refridgerators`.소비효율등급;"),
        "type": RECOMMEND,
        "index": 3
    },
    {
        "input": "냉장실 용량이 크면서 소비 전력이 낮은 냉장고 추천해줘",
        "query": ("SELECT * FROM 'refridgerators' ORDER BY `냉장실_용량` DESC, `소비_전력` LIMIT 1;\n\n"
                  f"{join} ORDER BY `냉장실_용량` DESC, `소비_전력` LIMIT 1;"),
        "type": RECOMMEND,
        "index": 4
    },
    {
        "input": "200만원대 냉장고 추천해줘",
        "query": ("SELECT * FROM `refridgerators` "
                  "WHERE `가격`>='2000000 원' AND `가격`<'3000000 원' ORDER BY `전체_용량` DESC;\n\n"
                  f"{join} WHERE `가격`>='2000000 원' AND `가격`<'3000000 원' ORDER BY `전체_용량` DESC;"),
        "type": RECOMMEND,
        "index": 5
    },
]

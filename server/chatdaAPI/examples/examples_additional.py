from chatdaAPI.RAG.input_type import ADDITIONAL
from chatdaAPI.examples.base_query import join

examples = [
    {
        "input": "최근에 리뷰가 추가된 냉장고 제품이 뭐야?",
        "query":
            (f"SELECT * FROM `refridgerators`"
             f" JOIN `refridgerator_reviews` ON `refridgerators`.제품_코드 = `refridgerator_reviews`.제품_코드 "
             f"WHERE `가격` is not null ORDER BY `refridgerator_reviews`.created_at DESC LIMIT 1;\n\n"
             f"{join} WHERE `가격` is not null ORDER BY `refridgerator_reviews`.created_at DESC LIMIT 1;"),
        "type": ADDITIONAL,
        "index": 0
    },
    {
        "input": "냉동실 용량이 100L 이상인 제품들의 정보를 알려줘.",
        "query":
            (f"SELECT * FROM `refridgerators` WHERE `가격` is not null AND `냉동실_용량` >= '100L';\n\n"
             f"{join} WHERE `가격` is not null AND `냉동실_용량` >= '100L';"),
        "type": ADDITIONAL,
        "index": 1
    },
    {
        "input": "가격이 1,000,000원 이하인 냉장고의 제품명과 가격을 보여줘.",
        "query":
            (f"SELECT * FROM `refridgerators` WHERE `가격` is not null AND 가격 <= '1000000';\n\n"
             f"{join} WHERE `가격` is not null AND 가격 <= '1000000';"),
        "type": ADDITIONAL,
        "index": 2
    },
    {
        "input": "소비 전력이 100W 이하인 제품의 제품명과 소비 전력을 알려줘.",
        "query":
            (f"SELECT * FROM `refridgerators` WHERE `가격` is not null AND `소비_전력` <= '100W';\n\n"
             f"{join} WHERE `가격` is not null AND `소비_전력` <= '100W';"),
        "type": ADDITIONAL,
        "index": 3
    },
]

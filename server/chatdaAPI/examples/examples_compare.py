from chatdaAPI.RAG.input_type import COMPARE
from chatdaAPI.examples.base_query import join

base_query = (f"SELECT * FROM `refridgerators` WHERE `가격` is not null AND (`제품_코드`='RF85C90D1AP' OR `제품_코드`='RF85C90D2AP');\n\n"
              f"{join} WHERE `가격` is not null AND (`refridgerators`.`제품_코드`='RF85C90D1AP' OR `refridgerators`.`제품_코드`='RF85C90D2AP');")

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
        "index": 2
    },
    {
        "input": "RF85C90D1AP와 RF85C90D2AP의 가격 차이가 어떻게 돼?",
        "query": base_query,
        "type": COMPARE,
        "index": 3
    },
    {
        "input": "RF85C90D1AP와 RF85C90D2AP의 냉장실 용량을 비교해줘.",
        "query": base_query,
        "type": COMPARE,
        "index": 4
    },
    {
        "input": "RF85C90D1AP와 RF85C90D2AP의 무게는 뭐가 달라?",
        "query": base_query,
        "type": COMPARE,
        "index": 5
    },
    {
        "input": "RF85C90D1AP와 RF85C90D2AP의 소비효율등급을 비교해줘.",
        "query": base_query,
        "type": COMPARE,
        "index": 6
    },
    {
        "input": "RF85C90D1AP와 RF85C90D2AP의 전체 용량과 소비 전력 비교해줘.",
        "query": base_query,
        "type": COMPARE,
        "index": 7
    },
    {
        "input": "RF85C90D1AP와 RF85C90D2AP의 가로, 높이, 깊이를 비교해줘.",
        "query": base_query,
        "type": COMPARE,
        "index": 8
    },
    {
        "input": "RF85C90D1AP와 RF85C90D2AP의 리뷰 평점과 리뷰 개수를 비교해줘.",
        "query": (f"SELECT * FROM `refridgerators`"
                  f" JOIN `refridgerator_reviews` ON `refridgerators`.제품_코드 = `refridgerator_reviews`.제품_코드 "
                  f"WHERE `가격` is not null AND (`refridgerators`.`제품_코드`='RF85C90D1AP' OR `refridgerators`.`제품_코드`='RF85C90D2AP');\n\n"
                  f"{join} WHERE `가격` is not null AND (`refridgerators`.`제품_코드`='RF85C90D1AP' OR `refridgerators`.`제품_코드`='RF85C90D2AP');"),
        "type": COMPARE,
        "index": 9
    },
    {
        "input": "RF85C90D1AP와 RF85C90D2AP중에 뭐가 더 무거워?",
        "query": (f"SELECT * FROM `refridgerators`"
                  f" WHERE `가격` is not null AND (`refridgerators`.`제품_코드`='RF85C90D1AP' OR `refridgerators`.`제품_코드`='RF85C90D2AP');\n\n"
                  f"{join} WHERE `가격` is not null AND (`refridgerators`.`제품_코드`='RF85C90D1AP' OR `refridgerators`.`제품_코드`='RF85C90D2AP');"),
        "type": COMPARE,
        "index": 10
    },
]

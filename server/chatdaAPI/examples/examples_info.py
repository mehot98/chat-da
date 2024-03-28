from chatdaAPI.RAG.input_type import INFO
from chatdaAPI.examples.base_query import join

examples = [
    {
        "input": "RF85C90D1AP에 대해서 설명해줘",
        "query": ("SELECT * FROM `refridgerators`"
                  " JOIN `refridgerator_reviews` ON `refridgerators`.`제품_코드` = `refridgerator_reviews`.`제품_코드`"
                  " JOIN `refridgerator_details` ON `refridgerators`.`제품_코드` = `refridgerator_details`.`제품_코드`"
                  " WHERE `가격` is not null AND `refridgerators`.`제품_코드`='RF85C90D1AP';\n\n"
                  f"{join} WHERE `가격` is not null AND `refridgerators`.`제품_코드`='RF85C90D1AP';"),
        "type": INFO,
        "index": 0
    },
    {
        "input": "BESPOKE 냉장고 4도어 제품에 대해 설명해줘",
        "query": ("SELECT * FROM `refridgerators` WHERE `가격` is not null AND `제품명` LIKE '%BESPOKE 냉장고 4도어%';\n\n"
                  f"{join} WHERE `가격` is not null AND `refridgerators`.`제품명` LIKE '%BESPOKE 냉장고 4도어%';"),
        "type": INFO,
        "index": 1
    },
    {
        "input": "RF85C90D1AP 어때?",
        "query": ("SELECT * FROM `refridgerators`"
                  " JOIN `refridgerator_reviews` ON `refridgerators`.`제품_코드` = `refridgerator_reviews`.`제품_코드`"
                  " JOIN `refridgerator_details` ON `refridgerators`.`제품_코드` = `refridgerator_details`.`제품_코드`"
                  " WHERE `가격` is not null AND `refridgerators`.`제품_코드`='RF85C90D1AP';\n\n"
                  f"{join} WHERE `가격` is not null AND `refridgerators`.`제품_코드`='RF85C90D1AP';"),
        "type": INFO,
        "index": 2
    },
    {
        "input": "RF85C90D1AP 제품 정보",
        "query": ("SELECT * FROM `refridgerators`"
                  " JOIN `refridgerator_reviews` ON `refridgerators`.`제품_코드` = `refridgerator_reviews`.`제품_코드`"
                  " JOIN `refridgerator_details` ON `refridgerators`.`제품_코드` = `refridgerator_details`.`제품_코드`"
                  " WHERE `가격` is not null AND `refridgerators`.`제품_코드`='RF85C90D1AP';\n\n"
                  f"{join} WHERE `가격` is not null AND `refridgerators`.`제품_코드`='RF85C90D1AP';"),
        "type": INFO,
        "index": 3
    },
]

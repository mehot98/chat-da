from chatdaAPI.RAG.input_type import INFO
from chatdaAPI.examples.base_query import join

examples = [
    {
        "input": "RF85C90D1AP에 대해서 설명해줘",
        "query": ("SELECT * FROM 'refridgerator' WHERE `제품_코드`='RF85C90D1AP';\n\n"
                  f"{join} WHERE 'refridgerator'.`제품_코드`='RF85C90D1AP';"),
        "type": INFO,
        "index": 0
    },
    {
        "input": "BESPOKE 냉장고 4도어 제품에 대해 설명해줘",
        "query": ("SELECT * FROM 'refridgerator' WHERE `제품명` LIKE '%BESPOKE 냉장고 4도어%';\n\n"
                  f"{join} WHERE 'refridgerator'.`제품명` LIKE '%BESPOKE 냉장고 4도어%';"),
        "type": INFO,
        "index": 1
    },
]

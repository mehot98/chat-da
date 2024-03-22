from chatdaAPI.RAG.input_type import DICTIONARY

terms = [
    {
        "input": "",
        "query": "",
        "type": DICTIONARY,
        "index": 0
    },
]

for term in terms:
    term["input"] = term["input"] + " 뭐야?"

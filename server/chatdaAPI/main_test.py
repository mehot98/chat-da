from fastapi.testclient import TestClient
from main import app

client = TestClient(app)


def test_post_chat_info():
    dump = {
        "uuid": "13we65we-weqwe",
        "content": "info"
    }

    response = client.post("/chat",
                           headers={
                               "Content-Type": "application/json"
                           },
                           json=dump)
    assert response.json()["type"] == "info"


def test_post_chat_compare():
    dump = {
        "uuid": "13we65we-weqwe",
        "content": "compare"
    }

    response = client.post("/chat",
                           headers={
                               "Content-Type": "application/json"
                           },
                           json=dump)
    assert response.json()["type"] == "compare"


def test_post_chat_recommend():
    dump = {
        "uuid": "13we65we-weqwe",
        "content": "recommend"
    }

    response = client.post("/chat",
                           headers={
                               "Content-Type": "application/json"
                           },
                           json=dump)
    assert response.json()["type"] == "recommend"

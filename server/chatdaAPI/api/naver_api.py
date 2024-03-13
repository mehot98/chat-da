import sys
import requests


def stt():

    # lang: 변환을 위한 언어를 설정합니다
    lang = "Kor"  # 언어 코드 ( Kor )
    
    # API 호출을 위한 url을 설정
    url = "https://naveropenapi.apigw.ntruss.com/recog/v1/stt?lang=" + lang

    # 텍스트 변환을 원하는 음성 데이터 파일입니다.
    # 만약 byte data로 받을 경우 해당 값을 data로 넣어줍니다.
    data = open('./api/test.mp3', 'rb')

    # Header에 클라우드 아이디와 키를 입력합니다.
    headers = {
        "Content-Type": "application/octet-stream",
        "X-NCP-APIGW-API-KEY-ID": client_id,
        "X-NCP-APIGW-API-KEY": client_secret
    }

    # API를 호출합니다.
    response = requests.post(url, data=data, headers=headers)

    # 호출 응답 코드가 200일 경우 성공입니다.
    rescode = response.status_code
    if rescode == 200:
        print(response.text)
    else:
        print("Error : " + response.text)


if __name__ == '__main__':
    stt()

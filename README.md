![image.png](./image.png)

<div align='center'>
	<img src="https://img.shields.io/badge/FastAPI-339933?style=flat&logo=FastAPI&logoColor=white"/>
	<img src="https://img.shields.io/badge/React-35495E?style=flat&logo=React&logoColor=4FC08D"/>
	<img src="https://img.shields.io/badge/OpenAI-007396?style=flat&logo=OpenAI&logoColor=white"/>
	<img src="https://img.shields.io/badge/TypeScript-4479A1?style=flat&logo=TypeScript&logoColor=white"/>
	<img src="https://img.shields.io/badge/MySQL-4479A1?style=flat&logo=MySQL&logoColor=white"/>
    <img src="https://img.shields.io/badge/ChromaDB-F43059?style=flat&logo=ChromaDB&logoColor=white"/>
	<img src="https://img.shields.io/badge/googlechrome-F43059?style=flat&logo=googlechrome&logoColor=white"/>    
  	<img src="https://img.shields.io/badge/amazonaws-007396?style=flat&logo=amazonaws&logoColor=white"/>
	<img src="https://img.shields.io/badge/Jenkins-F43059?style=flat&logo=Jenkins&logoColor=white"/>
	<img src="https://img.shields.io/badge/Docker-F43059?style=flat&logo=Docker&logoColor=white"/>
	<img src="https://img.shields.io/badge/elasticsearch-4479A1?style=flat&logo=elasticsearch&logoColor=white"/>
</div>
<br/>


## :calendar: 기간
#### 2024.02.19~2024.04.03

## :sparkling_heart: 프로젝트 기획
- 삼성 닷컴을 사용해 냉장고를 검색할 경우 같은 이름이지만 다른 가격의 제품들이 너무 많았습니다.
- 또한 가격이 다른 제품은 제품 명은 같지만 스펙 정보가 살짝 다른 이유였고 고객들이 이 제품들을 모두 비교하기에는 불편함이 있었습니다.
- 또한 제품에 대한 정보를 얻기 위해서는 각각의 제품 상세정보 페이지에 접근해야만 해당 제품에 대한 스펙을 알아낼수 있다는 점도 불편했습니다.

## :two_hearts: 프로젝트 소개
- RAG 아키텍처를 적용한 삼성 닷컴 챗봇 ChatDA 개발
- 고객에게 자연스러운 대화를 통해 원하는 정보를 제공하는 챗봇을 개발했습니다. 고객은 이를 통해서 기존 챗봇에서는 얻지 못했던 냉장고 제품에 대한 정보를 대화를 통해 얻을 수 있으며, 또한 제품 비교가 훨씬 간편해집니다.
- 또한 삼성닷컴을 활용하며 궁금한 점이 있다면 호출어 인식 기능(Hi ChatDA)을 통해 ChatDA를 호출할수 있으며 음성 인식 기능으로 대화가 가능합니다.


## :runner: 개발 인원
| **서다찬 (팀장)** | **이승준** | **이승민** | **박이언** | **나해란** | **이진성** |
| :------: |  :------: |  :------: |  :------: |  :------: |  :------: |
| <img src="https://avatars.githubusercontent.com/u/111109411?v=4" height=150 width=150> <br/> **백엔드** | **백엔드** | **백엔드** | **백엔드** | **프론트엔드** | **프론트엔드** | 

## :yellow_heart: 개발 환경

- Front : React, TypeScript, 
- Back-end : FastAPI, Uvicorn, Mysql
- 버전관리 : Gitlab
- 협업 툴 : Notion, Jira
- 배포 : Jenkins, Docker
- 모니터링 : Elastic Search, Logstash, Beats, Kibana
<br>

## 빌드 방법

### 1. FastAPI
- 패키지 다운로드
```
$ pip install -r requirements.txt
```
- 실행
```
$ uvicorn chatdaAPI.main.app:app --host 0.0.0.0 --reload
```

### 2. React
- 패키지 다운로드
```
$ npm i
```
- 빌드
```
$ npm run dev
```

## :green_heart: 커밋 컨벤션
| prefix |  설명 |   
|---|----|
|feat | 새로운 기능 추가|   
|fix | 버그 수정|
|docs | 문서 수정|
|style | 코드 포맷팅, 세미콜론 누락, 코드 변경이 없는 경우|
|refactor | 코드 리펙토링|
|test | 테스트 코드, 리펙토링 테스트 코드 추가|
|chore | 빌드 업무 수정, 패키지 매니저 수정|
|etc | 기타 업무 |

## 💜ERD
![ChatDA.png](./ChatDA.png)   

## 🖤API
https://documenter.getpostman.com/view/32331322/2sA35K21LW


## :yellow_heart: 기능별 소개

### 1. 비교하기
#### 버튼을 통한 비교하기
![compare1](/uploads/8833de4f5f930d9cf2b8325f406cf21d/compare1.gif)


#### 채팅을 통한 비교하기
![compare2](/uploads/c358ed2d4107544bef0ad82e6d26bbe4/compare2.gif)

### 2. 제품 정보 검색
![info](/uploads/21b92f2b19e45e005f708bd022a485d6/info.gif)

### 3. 인기 순위 및 조건 검색
![etc](/uploads/73cc9d5cdca890c1d40b9872347b048a/etc.gif)


### 4. 리뷰 요약 & 제품 본문 요약
![summary](/uploads/22235b1ddc9e3714821139d4d5b2fa7d/summary.gif)


### 5. 호출어 인식 기능
![hichatda](/uploads/189788831ef00a794628427ed537e972/hichatda.gif)

### 6. 모니터링
![monitor](/uploads/0e85dcd7315d710489329a15255a5c4c/monitor.gif)



## 💙Bug Report
### 1. Cloud환경 Server Sent Event Buffering  
- FastAPI에서 채팅 내역을 주고 받으면 SSE(Server Sent Event)를 활용해 한글자씩 출력이 되도록 기능을 구현했습니다.
- 하지만 로컬 환경에서 해당 이벤트를 주고 받을 때는 문제가 없었지만 클라우드 환경에서 서비스가 배포 될 경우 전체 데이터가 한번에 버퍼링 되어 받아지는 문제가 있었습니다.
- 이러한 문제의 원인은 Event Stream을 활용하며 만약 Event를 보내는 간격이 너무 짧을 경우 AWS와 같은 클라우드에서 버퍼링을 통해 전체 데이터를 한번에 보내는 것이였습니다.
- 이러한 문제를 해결하기 위해서 각각의 event 뒤에 sleep(0.02)로 약간의 딜레이를 추가시킴으로써 문제를 해결시켰습니다.
   
   

### 2. useState 객체 배열 복사 문제
- 각각의 채팅 내역은 웹에서 SessionStorage에 저장이 되고 React에서는 state로 관리하며 이전 내역을 저장했습니다.
- 하지만 채팅 내역을 입력 받으면서 Event Stream을 통해 한글자씩 입력을 받게 되는데 대화 내역에 글자가 하나만 추가되는 문제가 발생했습니다.
```
 const fetchMessage = async (message: string, tts = false) => {
    setMessages((prev) => [
      ...prev,
      { content: message, isUser: true },
      { isUser: false, isLoading: true },
    ]);
```
- 해당 문제는 useState를 활용하면서 데이터를 저장하는 형식의 문제였습니다.
```
const [messages, setMessages] = useState([])
```
- 위와 같은 형식으로 메세지 내용을 저장했지만 json과 같은 형식의 데이터를 배열로 저장하기 위해서는 아래와 같은 형식으로 초기화가 필요했습니다.
```
const [messages, setMessages] = useState([{}])
```



### 3. FastAPI SnakeCase to CamelCase
- 파이썬 코드에서는 snake_case를 사용하지만 웹에서 사용되는 컨벤션을 따르기 위해서는 camelCase로 변환하는 과정이 필요했습니다.
- 이를 위해서 Pydantic에서 BaseModel을 사용할때 별도의 CamelModel이라는 클래스를 선언하고 해당 클래스가 BaseModel을 상속받은 뒤 config에서 외부로 노출되는 데이터에 대해서는 snake_case를 camelCase로 변환하도록 구현했습니다.
```
class CamelModel(BaseModel):
    model_config = ConfigDict(
        alias_generator=to_camel,
        populate_by_name=True,
        protected_namespaces=(),
        from_attributes=True,
    )
```

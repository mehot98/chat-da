import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import useSpeechToText from "./component/useSpeechToText";
import useWakeWord from "./component/useWakeWord";

function App() {
  // 상태는 현재 호출어 인식 듣고있는지에 대한 상태
  const [state, setState] = useState(true);

  // useSpeechToText는 사용자 음성에서 텍스트를 추출해주는 객체입니다.
  // transcript는 인식된 내용, listening은 듣고있는지에 대한 상태, toggleListening은 듣기 상태 변경, 마지막은 reset하는 함수
  const { transcript, listening, toggleListening, resetTranscript } =
    useSpeechToText();

  // useWakeWord는 호출어를 위한 객체를 생성해줍니다.
  // kewordDetection은 호출어가 인식 됐을때에 받아지는 값입니다. -> 어떤 호출어인지 라벨로 분류되서 나오는데 그냥 null이 아니면 인식됐다는 것으로 인식하면 됩니다.
  // isLoaded, isListening은 상태 관련 T/F값이고 만약 객체 생성이나 음성 인식 도중에 에러가 발생하면 error에 내용이 나타납니다.
  // initEngine을 통해 전체 엔진을 초기화 시켜줘야 호출어 인식이 가능합니다.
  // start와 stop은 호출어 인식을 실행/종료 시키는 함수
  // release는 init된 엔진을 반환시키는 함수
  const {
    keywordDetection,
    isLoaded,
    isListening,
    error,
    initEngine,
    start,
    stop,
    release,
  } = useWakeWord();

  // 처음 실행이 됐을때 picovoice (호출어 객체)를 생성합니다
  useEffect(() => {
    initEngine();
  }, []);

  // keyowrd가 인식되는지를 확인하며 STT 기능을 실행시켜 줍니다.
  // 음성 인식 도중에 호출어가 나올수 있으므로 listening도 확인
  useEffect(() => {
    if (keywordDetection && !listening) toggleListening();
  }, [keywordDetection]);

  // isListening은 현재 호출어 기능이 실행 중인지, 아닌지에 대한 값으로 챗봇에서 사용자가
  // 하이삼닷!을 사용할건지 토글하는 용도로 사용하면 될 것 같습니다.
  useEffect(() => {
    setState(isListening);
  }, [isListening]);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <textarea
          className="transcript"
          value={transcript}
          onChange={() => {}}
        />
        <button onClick={toggleListening}>
          {listening ? "음성인식 중지" : "음성인식 시작"}
        </button>
        <button onClick={start}>호출어 시작</button>
        <h1> {state ? "Active" : "Inactive"}</h1>
        <button onClick={stop}>호출어 중단</button>
      </header>
    </div>
  );
}

export default App;

import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

const useSpeechToText = () => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  // browserSupportsSpeechRecognition는 현재 브라우저가 STT를 사용 가능한 브라우저 인지 확인하는 T/F값입니다
  // 만약 false로 되어 있다면 별도의 처리 과정이 필요해 보입니다.
  // toggleListening에서 stop이 존재하지만 Web Speech는 기본적으로 사용자의 발화가 종료되면 음성 인식도 종료시킵니다.
  const toggleListening = () => {
    if (listening) {
      SpeechRecognition.stopListening();
    } else {
      SpeechRecognition.startListening({
        language: "ko-KR",
        continuous: false,
      });
    }
  };

  return { transcript, listening, toggleListening, resetTranscript };
};

export default useSpeechToText;

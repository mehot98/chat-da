import { useCallback } from "react";
import { usePorcupine } from "@picovoice/porcupine-react";
import { Porcupine } from "@picovoice/porcupine-web";

const useWakeWord = () => {
  const {
    keywordDetection,
    isLoaded,
    isListening,
    error,
    init,
    start,
    stop,
    release,
  } = usePorcupine();

  const initEngine = useCallback(async () => {
    try {
      await init(
        process.env.REACT_APP_PICO_ACCESS_KEY,
        // customKeyword파일을 입력해주는 파라미터로 public path에 ppn파일을 넣고 파일 명을 적어주면 됩니다.
        // 주의해야 할 점은 반드시 keyword에는 label을 붙여줘야 나중에 keyword Detection이 됐을때 인식이 됩니다.
        // 키워드 파일: https://github.com/Picovoice/porcupine/tree/master/resources/keyword_files/wasm
        // 커스텀 키워드 생성: https://console.picovoice.ai/
        {
          // 하이삼닷 : hi.ppn, 헬로우삼닷 : hello.ppn
          publicPath: "hi.ppn",
          label: "hi",
        },
        // 3번째 파라미터는 인식을 위해 사용할 모델을 입력받는 파라미터입니다.
        // 우리는 한국어를 사용할 것이기 때문에 한국어 모델을 사용해줍니다.
        // 언어별 모델 파일: https://github.com/Picovoice/porcupine/tree/master/lib/common
        {
          publicPath: "porcupine_params_ko.pv",
        }
      );
    } catch (err) {
      console.error("Failed to initialize Porcupine:", err);
    }
  }, [init]);

  return {
    keywordDetection,
    isLoaded,
    isListening,
    error,
    initEngine,
    start,
    stop,
    release,
  };
};

export default useWakeWord;

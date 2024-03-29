import MessageFeedback from "../MessageFeedback";
import * as Comp from "@root/src/components";
import * as S from "./style";
import * as T from "@src/types";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const Message = (props: T.MessageProps) => {
  const chatDAIconSrc = chrome.runtime.getURL("icons/ChatDA_icon_128.png");
  const minusIconSrc = chrome.runtime.getURL("icons/minus_icon.png");
  function handleCancelButton() {
    props.setMessages((prev) => {
      const filteredMessages = prev.filter((message: T.MsgProps) => message.id !== props.id);
      if (filteredMessages.length === 0) {
        sessionStorage.setItem("messages", JSON.stringify(filteredMessages));
      }
      return filteredMessages;
    });
    props.setComparePrds((prev2) => {
      const filteredPrd = prev2.filter((prd: T.ComparePrdProps) => prd.id !== props.id);
      if (filteredPrd.length === 0) {
        sessionStorage.setItem("comparePrds", JSON.stringify(filteredPrd));
      }
      return filteredPrd;
    });
  }
  //세션스토리지에서 모델명 가져오기

  const handleExpandOpenBtn = () => {
    const modelsNoListSet = new Set(props.modelNoList);
    const models = props.modelNoList ? [...modelsNoListSet] : [props.modelNo];
    props.changeSelectedModelNo(models);
    props.handleOpenExpandModal(props.type);
  };

  if (props.isUser) {
    if (props.isCompared) {
      const storage = JSON.parse(sessionStorage.getItem("comparePrds") || "[]");
      const lastCompare = storage[storage.length - 1].modelNo;

      const modelNoList = storage.map((stor) => stor.modelNo);

      const handleExpandOpenBtn = () => {
        props.changeSelectedModelNo(modelNoList);
        props.handleOpenExpandModal(props.type);
      };

      return (
        <>
          <S.UserMessageWrapper>
            <div className="compare">
              <span>{props.content}</span>
              <button onClick={handleCancelButton}>
                <img src={minusIconSrc} alt="cancel-compare" width={20} height={20} />
              </button>
            </div>
          </S.UserMessageWrapper>
          {props.modelNo === lastCompare && (
            <S.ExpandOpenBtn onClick={handleExpandOpenBtn} startIcon={<ArrowBackIcon />}>
              자세히 비교하기
            </S.ExpandOpenBtn>
          )}
        </>
      );
    } else {
      return (
        <S.UserMessageWrapper>
          <div>
            <p>{props.content}</p>
          </div>
        </S.UserMessageWrapper>
      );
    }
  } else {
    // if (props.text[0] === "1") {
    //   // const recommendProps = {
    //   //   modelNo: props.modelNo,
    //   //   제품명: props.제품명,
    //   //   혜택가: props.혜택가,
    //   //   imageUrl: props.imageUrl,
    //   //   message: props.text,
    //   // };
    //   const recommendProps: {
    //     modelNo: string;
    //     제품명: string;
    //     혜택가: string;
    //     imageUrl: string;
    //     message: string;
    //   } = {
    //     modelNo: "RF84C906B4W",
    //     제품명: "BESPOKE 냉장고 4도어 875 L",
    //     혜택가: "1,490,000원",
    //     imageUrl: chatDAIconSrc,
    //     message: props.text,
    //   };
    //   console.log(props.text);
    //   return (
    //     <S.AiMessageWrapper>
    //       <img src={chatDAIconSrc} alt="ChatDA-logo" width={43} height={42} />
    //       <Comp.ChatbotRecommend {...recommendProps} />
    //     </S.AiMessageWrapper>
    //   );
    if (props.type === "recommend") {
      // const recommendProps = {
      //   modelNo: props.modelNo,
      //   제품명: props.제품명,
      //   혜택가: props.혜택가,
      //   imageUrl: props.imageUrl,
      //   message: props.text,
      // };
      const recommendProps: T.ChatbotRecommendCardProps = props.spec;

      return (
        <S.AiMessageWrapper>
          <S.AiMessageRow>
            <img src={chatDAIconSrc} alt="ChatDA-logo" width={43} height={42} />
            <S.AiMessageDiv>
              <div>
                <p>{props.content}</p>
              </div>
            </S.AiMessageDiv>
          </S.AiMessageRow>

          <Comp.ChatbotRecommend {...recommendProps} />
          <MessageFeedback isRecommend={true} />
        </S.AiMessageWrapper>
      );
    } else if (props.type === "home") {
      return (
        <S.AiMessageWrapper>
          <S.AiMessageRow>
            <img src={chatDAIconSrc} alt="ChatDA-logo" width={43} height={42} />
            <S.AiMessageDiv>
              <div>
                <p>{props.content}</p>
              </div>
            </S.AiMessageDiv>
          </S.AiMessageRow>
          <Comp.ChatbotHomeMessage />
        </S.AiMessageWrapper>
      );
    } else {
      return (
        <S.AiMessageWrapper>
          <S.AiMessageRow>
            <img src={chatDAIconSrc} alt="ChatDA-logo" width={43} height={42} />
            <S.AiMessageDiv>
              <div>
                <p>{props.content}</p>
              </div>
            </S.AiMessageDiv>
          </S.AiMessageRow>

          <MessageFeedback isRecommend={false} />

          {props.btnString && (
            <S.ExpandOpenBtn onClick={handleExpandOpenBtn} startIcon={<ArrowBackIcon />}>
              {props.btnString}
            </S.ExpandOpenBtn>
          )}
        </S.AiMessageWrapper>
      );
    }
  }
};

export default Message;

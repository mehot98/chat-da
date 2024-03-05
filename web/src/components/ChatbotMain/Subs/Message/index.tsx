import * as Comp from "@root/src/components";
// import * as S from "./style";
import { MessageProps } from "@root/src/types";
import chatDAIconPath from "@root/public/ChatDA_icon_128.png";

export default function Message(props: MessageProps) {
  const chatDAIconSrc = chrome.runtime.getURL(chatDAIconPath);
  if (props.isUser) {
    return (
      <p>
        <b>User</b>: {props.text}
      </p>
    );
  } else {
    if (props.text[0] === "1") {
      // const recommendProps = {
      //   modelNo: props.modelNo,
      //   제품명: props.제품명,
      //   혜택가: props.혜택가,
      //   imageUrl: props.imageUrl,
      //   message: props.text,
      // };
      const recommendProps: {
        modelNo: string;
        제품명: string;
        혜택가: string;
        imageUrl: string;
        message: string;
      } = {
        modelNo: "RF84C906B4W",
        제품명: "BESPOKE 냉장고 4도어 875 L",
        혜택가: "1,490,000원",
        imageUrl: chatDAIconSrc,
        message: props.text,
      };
      console.log(props.text);
      return (
        <div>
          <img src={chatDAIconSrc} alt="ChatDA-logo" />
          <Comp.ChatbotRecommend {...recommendProps} />
        </div>
      );
    } else {
      return (
        <div>
          <img src={chatDAIconSrc} alt="ChatDA-logo" />
          <p>
            <b>ChatDA</b>: {props.text}
          </p>
        </div>
      );
    }
  }
}

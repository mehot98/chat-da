import axios from "axios";
import { Dispatch, SetStateAction, useState } from "react";
import * as Sub from "./Subs";
import * as S from "./style";
import * as T from "@root/src/types";

export default function ChatbotMain(props: {
  props: T.ComparePrdProps[];
  setComparePrds: Dispatch<SetStateAction<T.ComparePrdProps[]>>;
  messages: T.MessagesProps;
  setMessages: Dispatch<SetStateAction<T.MessagesProps>>;
}) {
  const [currentTypingId, setCurrentTypingId] = useState<number | null>(null);

  const openAiKey = "";

  const generateText = async (prompt: string) => {
    try {
      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-3.5-turbo",
          messages: [
            {
              role: "system",
              content: "You are a helpful assistant.",
            },
            {
              role: "user",
              content: prompt,
            },
          ],
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${openAiKey}`,
          },
        },
      );
      const { choices } = response.data;
      const text = choices[0].message.content.trim();
      return text;
    } catch (e: any) {
      if (e.response?.status === 500) {
        alert("OpenAI 서버에 오류가 발생했습니다.");
        props.setMessages([
          ...props.messages,
          { text: prompt, sender: "user" },
          { text: "오류가 발생했습니다.", sender: "bot" },
        ]);
      }
    }
  };
  // 비교버튼 누를 시 메시지 생성
  // useEffect(() => {
  //   if (props.props && props.props.length > 0) {
  //     props.setMessages((prev) => [
  //       ...prev,
  //       ...props.props.map((item) => ({
  //         text: `${item.제품명}\n${item.modelNo}`,
  //         isUser: true,
  //         isTyping: true,
  //         id: item.id,
  //         isCompared: true,
  //       })),
  //     ]);
  //   }
  // }, [props.props]);

  // useEffect(() => {
  //   if (messages.length > 0 && messages[messages.length - 1].id === 0) {
  //     console.log("답변 생성중");
  //   }
  // }, [messages]);

  const handleSendMessage = async (message: string) => {
    props.setMessages((prev) => [
      ...prev,
      { text: message, isUser: true, isCompared: false },
      // { text: "", isUser: false, isTyping: true, id: 0 },
    ]);

    const response = await generateText(message);
    props.setMessages((prev) => [
      // ...prev.slice(0, prev.length - 1), // 성능적으로 괜찮은지, 더 좋은 방법이 있는지 고민해 봐야할 필요 있음
      ...prev,
      {
        text: response,
        isUser: false,
        isTyping: true,
        id: Date.now(),
        isCompared: false,
      },
    ]);
  };

  // const handleEndTyping: (id: number) => void = (id: number) => {
  //   setMessages((prev: T.MessagesProps) =>
  //     prev.map((msg) => {
  //       return msg.id === id ? { ...msg, isTyping: false } : msg;
  //     }),
  //   );
  //   setCurrentTypingId(null);
  // };

  // useEffect(() => {
  //   if (currentTypingId === null) {
  //     const nextTypingMessage = props.messages.find((msg) => {
  //       !msg.isUser && msg.isTyping;
  //     });
  //     if (nextTypingMessage) {
  //       setCurrentTypingId(nextTypingMessage.id);
  //     }
  //   }
  // }, [props.messages, currentTypingId]);

  return (
    <S.ChatMainWrapper>
      <S.ChatMessageWrapper>
        <Sub.MessageList
          messages={props.messages}
          currentTypingId={currentTypingId}
          setMessages={props.setMessages}
          setComparePrds={props.setComparePrds}
        />
      </S.ChatMessageWrapper>
      <S.ChatInputWrapper>
        <Sub.MessageForm onSendMessage={handleSendMessage} />
      </S.ChatInputWrapper>
    </S.ChatMainWrapper>
  );
}

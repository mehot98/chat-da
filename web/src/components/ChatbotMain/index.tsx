import axios from "axios";
import { useEffect, useState } from "react";
import { request } from "@src/apis/requestBuilder";
import * as Sub from "./Subs";
import * as S from "./style";
import * as T from "@root/src/types";

export default function ChatbotMain() {
  const [messages, setMessages] = useState<T.MessagesProps>([]);
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
      console.log(response);
      const { choices } = response.data;
      const text = choices[0].message.content.trim();
      return text;
    } catch (e: any) {
      if (e.response?.status === 500) {
        alert("OpenAI 서버에 오류가 발생했습니다.");
        setMessages([
          ...messages,
          { text: prompt, sender: "user" },
          { text: "오류가 발생했습니다.", sender: "bot" },
        ]);
      }
    }
  };

  const handleSendMessage = async (message: string) => {
    // const response = await generateText(message);
    const sessionId = window.sessionStorage.getItem("_da_da_sessionId");
    const tabHash = window.sessionStorage.getItem("di_tab_hash");

    const response = await request.post("/chat", {
      uuid: `${sessionId}_${tabHash}`,
      content: message,
    });
    const { data } = response;

    if (data.type === "recommend") {
      setMessages((prev) => [
        ...prev,
        { text: message, isUser: true },
        {
          type: data.type,
          text: data.content.message,
          isUser: false,
          isTyping: true,
          id: Date.now(),
          modelNo: data.modelNo,
          spec: data.content.spec,
        },
      ]);
    } else if (data.type === "info") {
      setMessages((prev) => [
        ...prev,
        { text: message, isUser: true },
        {
          type: data.type,
          text: data.content,
          isUser: false,
          isTyping: true,
          id: Date.now(),
          modelNo: data.modelNo,
          btnString: "상세 스펙 보기",
        },
      ]);
    } else if (data.type === "compare") {
      setMessages((prev) => [
        ...prev,
        { text: message, isUser: true },
        {
          type: data.type,
          text: data.content,
          isUser: false,
          isTyping: true,
          id: Date.now(),
          modelNoList: data.modelNoList,
          btnString: "자세히 비교하기",
        },
      ]);
    }

    // setMessages((prev) => [
    //   ...prev,
    //   { text: message, isUser: true },
    //   {
    //     type: data.type,
    //     text: data.content,
    //     isUser: false,
    //     isTyping: true,
    //     id: Date.now(),
    //     modelNo: data?.modelNo,
    //     modelNoList: data?.modelNoList,
    //   },
    // ]);
  };

  // const handleEndTyping: (id: number) => void = (id: number) => {
  //   setMessages((prev: T.MessagesProps) =>
  //     prev.map((msg) => {
  //       return msg.id === id ? { ...msg, isTyping: false } : msg;
  //     }),
  //   );
  //   setCurrentTypingId(null);
  // };

  useEffect(() => {
    if (currentTypingId === null) {
      const nextTypingMessage = messages.find((msg) => {
        !msg.isUser && msg.isTyping;
      });
      if (nextTypingMessage) {
        setCurrentTypingId(nextTypingMessage.id);
      }
    }
  }, [messages, currentTypingId]);

  return (
    <S.ChatMainWrapper>
      <S.ChatMessageWrapper>
        <Sub.MessageList messages={messages} currentTypingId={currentTypingId} />
      </S.ChatMessageWrapper>
      <S.ChatInputWrapper>
        <Sub.MessageForm onSendMessage={handleSendMessage} />
      </S.ChatInputWrapper>
    </S.ChatMainWrapper>
  );
}

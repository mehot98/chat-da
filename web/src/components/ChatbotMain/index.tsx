import axios from "axios";
import { useEffect, useState } from "react";
import * as Sub from "./Subs";
import * as S from "./style";

export default function ChatbotMain() {
  const [messages, setMessages] = useState([]);
  const [currentTypingId, setCurrentTypingId] = useState(null);

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
    const response = await generateText(message);

    setMessages((prev) => [
      ...prev,
      { text: message, isUser: true },
      {
        text: response,
        isUser: false,
        isTyping: true,
        id: Date.now(),
      },
    ]);
  };

  const handleEndTyping = (id: number) => {
    setMessages((prev) =>
      prev.map((msg) => {
        msg.id === id ? { ...msg, isTyping: false } : msg;
      }),
    );
    setCurrentTypingId(null);
  };

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
    <S.ChatBotMainWrapper>
      <div className="chat-box">
        <h1>ChatDA</h1>
        <Sub.MessageList
          messages={messages}
          currentTypingId={currentTypingId}
          onEndTyping={handleEndTyping}
        />
        <Sub.MessageForm onSendMessage={handleSendMessage} />
      </div>
    </S.ChatBotMainWrapper>
  );
}

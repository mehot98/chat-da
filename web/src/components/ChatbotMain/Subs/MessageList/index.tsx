import Message from "../Message";
import * as T from "@root/src/types";
import * as S from "./style";
import { Dispatch, SetStateAction } from "react";

export default function MessageList({
  messages,
  currentTypingId,
  setMessages,
  setComparePrds,
}: {
  messages: T.MessagesProps;
  currentTypingId: number;
  setMessages: Dispatch<SetStateAction<T.MessagesProps>>;
  setComparePrds: Dispatch<SetStateAction<T.ComparePrdProps[]>>;
}) {
  return (
    <S.MessageListWrapper>
      {messages.map((message: T.MessageProps, index: number) => (
        <Message
          key={index}
          {...message}
          currentTypingId={currentTypingId}
          setMessages={setMessages}
          setComparePrds={setComparePrds}
        />
      ))}
    </S.MessageListWrapper>
  );
}

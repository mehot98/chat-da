import Message from "../Message";
import * as T from "@root/src/types";
import * as S from "./style";

export default function MessageList({ messages, currentTypingId, onEndTyping }) {
  return (
    <S.MessageListWrapper>
      {messages.map((message: T.MessageProps, index: number) => (
        <Message key={index} {...message} currentTypingId={currentTypingId} />
      ))}
    </S.MessageListWrapper>
  );
}

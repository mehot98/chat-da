import Message from "../Message";
import * as T from "@root/src/types";
import * as S from "./style";
import { Dispatch, SetStateAction } from "react";
import React from "react";

const MessageList = ({
  messages,
  currentTypingId,
  setMessages,
  setComparePrds,
  handleOpenExpandModal,
  changeSelectedModelNo,
}: {
  messages: T.MessagesProps;
  currentTypingId: number;
  setMessages: (data: any, message: string) => void;
  setComparePrds: Dispatch<SetStateAction<T.ComparePrdProps[]>>;
  handleOpenExpandModal: (st: T.ExpandModalStateType) => void;
  changeSelectedModelNo: (models: string[]) => void;
}) => {
  return (
    <S.MessageListWrapper>
      {messages.map((message: T.MessageProps, index: number) => (
        <Message
          key={index}
          {...message}
          currentTypingId={currentTypingId}
          setMessages={setMessages}
          setComparePrds={setComparePrds}
          handleOpenExpandModal={handleOpenExpandModal}
          changeSelectedModelNo={changeSelectedModelNo}
        />
      ))}
    </S.MessageListWrapper>
  );
};

export default MessageList;

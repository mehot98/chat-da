/* eslint-disable */
import axios from "axios";
import { Dispatch, SetStateAction, useEffect, useState, useRef, useCallback, memo } from "react";
import { request } from "@src/apis/requestBuilder";
import * as Sub from "./Subs";
import * as S from "./style";
import * as T from "@root/src/types";
import { fetchEventSource } from "@microsoft/fetch-event-source";

const ChatbotMain = (props: {
  props: T.ComparePrdProps[];
  setComparePrds: Dispatch<SetStateAction<T.ComparePrdProps[]>>;
  messages: T.MessagesProps;
  setMessages: Dispatch<SetStateAction<T.MessagesProps>>;
  handleOpenExpandModal: (st: T.ExpandModalStateType) => void;
  changeSelectedModelNo: (models: string[]) => void;
  fetchMessage: (message: string) => Promise<void>;
  handleMessage: (data: any, message: string) => void;
  isSpeechInput?: boolean;
  speechText?: string;
}) => {
  const [currentTypingId, setCurrentTypingId] = useState<number | null>(null);

  const [lastHeight, setLastHeight] = useState(null);
  const chatElement = useRef<HTMLDivElement>();

  const handleSendMessage = props.fetchMessage;

  useEffect(() => {
    const { scrollTop, scrollHeight, clientHeight } = chatElement.current;

    if (scrollTop + clientHeight >= scrollHeight - 100) {
      chatElement.current.scrollTop = scrollHeight;
      return;
    }

    if (!lastHeight) {
      chatElement.current.scrollTop = scrollHeight;
    } else {
      if (scrollTop === 0) {
        const diff = scrollHeight - lastHeight;
        chatElement.current.scrollTop = diff;
      }
    }
  }, [props.messages, lastHeight]);

  // 세션스토리지
  useEffect(() => {
    const storage = JSON.parse(sessionStorage.getItem("messages") || "[]");
    props.setMessages(storage);
  }, []);

  return (
    <S.ChatMainWrapper>
      <S.ChatMessageWrapper ref={chatElement}>
        <Sub.MessageList
          messages={props.messages}
          currentTypingId={currentTypingId}
          setMessages={props.setMessages}
          setComparePrds={props.setComparePrds}
          handleOpenExpandModal={props.handleOpenExpandModal}
          changeSelectedModelNo={props.changeSelectedModelNo}
        />
      </S.ChatMessageWrapper>
      <S.ChatInputWrapper>
        {props.isSpeechInput ? (
          <Sub.SpeechMessageForm message={props.speechText ?? ""} />
        ) : (
          <Sub.MessageForm onSendMessage={handleSendMessage} />
        )}
      </S.ChatInputWrapper>
    </S.ChatMainWrapper>
  );
};

export default ChatbotMain;

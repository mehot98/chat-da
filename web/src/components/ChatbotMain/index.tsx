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
}) => {
  const [currentTypingId, setCurrentTypingId] = useState<number | null>(null);

  const [lastHeight, setLastHeight] = useState(null);
  const chatElement = useRef<HTMLDivElement>();

  const { VITE_SERVER_END_POINT } = import.meta.env;

  const fetchData = async (message: string) => {
    props.setMessages((prev) => [...prev, { content: message, isUser: true }]);

    await fetchEventSource(`${VITE_SERVER_END_POINT}/chat`, {
      method: "POST",
      headers: {
        Accept: "text/event-stream",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        uuid: "sdasdasdasd",
        content: message,
      }),
      onopen: async (res: Response) => {
        if (res.ok && res.status === 200) {
          console.log("Connection made ", res);
        } else if (res.status >= 400 && res.status < 500 && res.status !== 429) {
          console.log("Client-side error ", res);
        }
      },

      // stream를 통해 데이터를 받을 때 사용되는 함수 입니다.
      // 기본 첫번째 토큰에는 type과 content, modelNo, modelNoList, modelList등으로 구분 됩니다.
      // 기존 content에서 단순 요약 정보와 같은 내용은 data로 응답이 나타납니다
      // { "type" : "info" , "modelNo" : "SESEQWE2424"}
      // { "data" : "이"}
      // { "data" : "제"}
      // { "data" : "품"}
      onmessage(event) {
        const data = JSON.parse(event.data);
        handleMessage(data, message);
      },
    });
  };

  const handleMessage = (data, message: string) => {
    if (data.type !== undefined) {
      if (data.type === "recommend") {
        props.setMessages((prev) => [
          ...prev,
          {
            type: data.type,
            content: "",
            isUser: false,
            isTyping: true,
            isCompared: false,
            id: data.craetedAt,
            modelNo: data.modelNo,
            spec: data.content.content,
          },
        ]);
      } else if (data.type === "info") {
        props.setMessages((prev) => [
          ...prev,
          {
            type: data.type,
            content: "",
            isUser: false,
            isTyping: true,
            isCompared: false,
            id: data.craetedAt,
            modelNo: data.modelNo,
            btnString: "상세 스펙 보기",
          },
        ]);
      } else if (data.type === "compare") {
        props.setMessages((prev) => [
          ...prev,
          {
            type: data.type,
            content: "",
            isUser: false,
            isTyping: true,
            isCompared: true,
            id: data.craetedAt,
            modelNoList: data.modelNoList,
            btnString: "자세히 비교하기",
          },
        ]);
      } else if (data.type === "general") {
        props.setMessages((prev) => [
          ...prev,
          {
            type: data.type,
            content: "",
            isUser: false,
            isTyping: true,
            isCompared: false,
            id: data.craetedAt,
          },
        ]);
      } else if (data.type === "ranking") {
        props.setMessages((prev) => [
          ...prev,
          {
            type: data.type,
            content: "",
            isUser: false,
            isTyping: true,
            isCompared: false,
            id: data.craetedAt,
            modelList: data.modelList,
            btnString: "자세히 비교하기",
          },
        ]);
      } else if (data.type === "search") {
        props.setMessages((prev) => [
          ...prev,
          {
            type: data.type,
            content: "",
            isUser: false,
            isTyping: true,
            isCompared: false,
            id: data.craetedAt,
            modelList: data.modelList,
            btnString: "자세히 비교하기",
          },
        ]);
      } else if (data.type === "dictionary") {
        props.setMessages((prev) => [
          ...prev,
          {
            type: data.type,
            content: "",
            isUser: false,
            isTyping: true,
            isCompared: false,
            id: data.craetedAt,
          },
        ]);
      } else {
        // 이 부분에는 data.type이 없는 문제이므로 오류 문구 추가하면 될 것 같습니다.
        console.log("예외처리해야함!!");
      }
    } else if (data.data !== undefined) {
      props.setMessages((prev) => {
        const lastMessageIndex = prev.length - 1;
        const updatedMessages = [
          ...prev.slice(0, lastMessageIndex),
          {
            ...prev[lastMessageIndex],
            content: prev[lastMessageIndex]["content"] + data.data,
          },
        ];
        return updatedMessages;
      });
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
    // props.setMessages((prev) => [
    //   ...prev,
    //   { text: message, isUser: true, isCompared: false },
    //   // { text: "", isUser: false, isTyping: true, id: 0 },
    // ]);

    // const response = await generateText(message);
    // props.setMessages((prev) => [
    //   // ...prev.slice(0, prev.length - 1), // 성능적으로 괜찮은지, 더 좋은 방법이 있는지 고민해 봐야할 필요 있음
    //   ...prev,
    //   {
    //     text: response,
    //     isUser: false,
    //     isTyping: true,
    //     id: Date.now(),
    //     isCompared: false,
    //   },
    // ]);
    // const response = await generateText(message);
    const sessionId = window.sessionStorage.getItem("_da_da_sessionId");
    const tabHash = window.sessionStorage.getItem("di_tab_hash");

    // let textMessage = useMemo(() => message, [message]);

    fetchData(message);

    // const response = await request.post("/chat", {
    //   uuid: `${sessionId}_${tabHash}`,
    //   content: message,
    // });
    // const { data } = response;

    // if (data.type === "recommend") {
    //   props.setMessages((prev) => [
    //     ...prev,
    //     { text: message, isUser: true },
    //     {
    //       type: data.type,
    //       text: data.content.message,
    //       isUser: false,
    //       isTyping: true,
    //       isCompared: false,
    //       id: Date.now(),
    //       modelNo: data.modelNo,
    //       spec: data.content.spec,
    //     },
    //   ]);
    // } else if (data.type === "info") {
    //   props.setMessages((prev) => [
    //     ...prev,
    //     { text: message, isUser: true },
    //     {
    //       type: data.type,
    //       text: data.content,
    //       isUser: false,
    //       isTyping: true,
    //       isCompared: false,
    //       id: Date.now(),
    //       modelNo: data.modelNo,
    //       btnString: "상세 스펙 보기",
    //     },
    //   ]);
    // } else if (data.type === "compare") {
    //   props.setMessages((prev) => [
    //     ...prev,
    //     { text: message, isUser: true },
    //     {
    //       type: data.type,
    //       text: data.content,
    //       isUser: false,
    //       isTyping: true,
    //       isCompared: true,
    //       id: Date.now(),
    //       modelNoList: data.modelNoList,
    //       btnString: "자세히 비교하기",
    //     },
    //   ]);
    // }

    sessionStorage.setItem("messages", JSON.stringify(props.messages));

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
          setMessages={handleMessage}
          setComparePrds={props.setComparePrds}
          handleOpenExpandModal={props.handleOpenExpandModal}
          changeSelectedModelNo={props.changeSelectedModelNo}
        />
      </S.ChatMessageWrapper>
      <S.ChatInputWrapper>
        <Sub.MessageForm onSendMessage={handleSendMessage} />
      </S.ChatInputWrapper>
    </S.ChatMainWrapper>
  );
};

export default ChatbotMain;

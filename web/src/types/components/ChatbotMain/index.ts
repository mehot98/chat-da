import { Dispatch, SetStateAction } from "react";
import * as T from "../../index";

export interface MsgProps {
  text?: string;
  sender?: "user" | "bot";
  isUser?: boolean;
  isTyping?: boolean;
  id?: number;
  isCompared?: boolean;
}

export interface MessagesProps extends Array<MsgProps> {}

export interface MessageProps {
  // type 추가 예정 ex -> 스펙에 대한 설명, 일상적인 대화 등
  // server의 type에 따라 추가 할 것
  type: "compare" | "info" | "recommend";
  text: string;
  isUser: boolean;
  isTyping: boolean;
  id: number;
  isCompared: boolean;
  currentTypingId: number;
  modelNo?: string;
  modelNoList?: Array<string>;
  spec?: T.ChatbotRecommendCardProps;
  btnString?: string;

  category?: string;
  제품명?: string;
  가로?: string;
  높이?: string;
  깊이?: string;
  제품타입?: string;
  전체용량?: string;
  냉장실용량?: string;
  냉동실용량?: string;
  맞춤보관실용량?: string;
  소비효율등급?: string;
  소비전력?: string;
  가격?: string;
  혜택가?: string;
  reviewSummary?: string;
  reviewCount?: string;
  rating?: string;
  imageUrl?: string;
  setMessages?: Dispatch<SetStateAction<MessagesProps>>;
  setComparePrds?: Dispatch<SetStateAction<T.ComparePrdProps[]>>;
}

export interface MessageListProps {
  messages: MessagesProps;
  currentTypingId: number;
}

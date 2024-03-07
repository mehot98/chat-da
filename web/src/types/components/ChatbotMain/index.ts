import { Dispatch, SetStateAction } from "react";

export interface MsgProps {
  [x: string]: any;
  text?: string;
  sender?: "user" | "bot";
  isUser?: boolean;
  isTyping?: boolean;
  id?: number;
  isCompared?: boolean;
}

export interface MessagesProps extends Array<MsgProps> {}

export interface MessageProps {
  text: string;
  isUser: boolean;
  isTyping: boolean;
  id: number;
  isCompared: boolean;
  currentTypingId: number;
  modelNo?: string;
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
  messages: MsgProps;
  setMessages?: Dispatch<SetStateAction<MessagesProps>>;
}

export interface MessageListProps {
  messages: MessagesProps;
  currentTypingId: number;
}

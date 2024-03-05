import { ChatbotRecommendCardProps } from "@root/src/types";
import ChatbotRecommendCard from "./Subs/ChatbotRecommendCard";
import * as S from "./style";

export default function ChatbotRecommend(props: ChatbotRecommendCardProps, message: string) {
  return (
    <S.RecommendWrapper>
      <S.RecommendMessageWrapper>
        <span>{message}</span>
      </S.RecommendMessageWrapper>
      <S.RecommendCardWrapper>
        <ChatbotRecommendCard {...props} />
      </S.RecommendCardWrapper>
      <S.RecommendCardButtonWrapper>
        <span>이 제품이...</span>
        <button>좋아요</button>
        <button>별로에요</button>
      </S.RecommendCardButtonWrapper>
    </S.RecommendWrapper>
  );
}

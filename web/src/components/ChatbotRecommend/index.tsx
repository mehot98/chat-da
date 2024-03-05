import { ChatbotRecommendCardProps } from "@root/src/types";
import * as Sub from "./Subs";
import * as S from "./style";

export default function ChatbotRecommend(props: ChatbotRecommendCardProps) {
  return (
    <S.RecommendWrapper>
      <S.RecommendMessageWrapper>
        <span>{props.message}</span>
      </S.RecommendMessageWrapper>
      <S.RecommendCardWrapper>
        <Sub.ChatbotRecommendCard {...props} />
      </S.RecommendCardWrapper>
      <S.RecommendCardButtonWrapper>
        <span>이 제품이...</span>
        <button>좋아요</button>
        <button>별로에요</button>
      </S.RecommendCardButtonWrapper>
    </S.RecommendWrapper>
  );
}

import { ChatbotRecommendCardProps } from "@src/types";
import * as Sub from "./Subs";
import * as S from "./style";

export default function ChatbotRecommend(props: ChatbotRecommendCardProps) {
  return (
    <S.RecommendWrapper>
      <S.RecommendCardWrapper>
        <Sub.ChatbotRecommendCard {...props} />
      </S.RecommendCardWrapper>
    </S.RecommendWrapper>
  );
}

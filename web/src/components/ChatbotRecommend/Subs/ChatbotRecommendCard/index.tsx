import { ChatbotRecommendCardProps } from "@root/src/types";
import * as S from "./style";

export default function ChatbotRecommendCard(props: ChatbotRecommendCardProps) {
  return (
    <S.RecommendCardWrapper>
      <img src={props.imageUrl} alt="recommend-product" />
      <S.RecommendCardTitle>{props.제품명}</S.RecommendCardTitle>
      <S.RecommendCardNo>{props.modelNo}</S.RecommendCardNo>
      <S.ReommendCardPriceWrapper>
        <span>혜택가</span>
        <S.ReommendCardPrice>{props.혜택가}</S.ReommendCardPrice>
      </S.ReommendCardPriceWrapper>
    </S.RecommendCardWrapper>
  );
}

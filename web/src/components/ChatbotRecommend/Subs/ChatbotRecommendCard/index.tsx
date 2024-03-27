import { ChatbotRecommendCardProps } from "@root/src/types";
import * as S from "./style";

export default function ChatbotRecommendCard(props: ChatbotRecommendCardProps) {
  return (
    <S.RecommendCardWrapper>
      <S.RecommendCardImg src={props.imageUrl} alt="recommend-product" />
      <S.RecommendCardTitle>{props.제품명}</S.RecommendCardTitle>
      <S.RecommendCardNo>{props.제품_코드}</S.RecommendCardNo>
      {props.혜택가 ? (
        <S.ReommendCardPriceWrapper>
          <span>혜택가</span>
          <S.ReommendCardPrice>{props.혜택가}</S.ReommendCardPrice>
        </S.ReommendCardPriceWrapper>
      ) : (
        props.가격 && (
          <S.ReommendCardPriceWrapper>
            <span>가격</span>
            <S.ReommendCardPrice>{props.가격}</S.ReommendCardPrice>
          </S.ReommendCardPriceWrapper>
        )
      )}
    </S.RecommendCardWrapper>
  );
}

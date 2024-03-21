import ChatbotRecommend from "../ChatbotRecommend";
import * as S from "./style";
import specIconPath from "@assets/img/SpecIcon";

export default function SpecDetailColumn(props) {
  return (
    <S.SpecDetailColumnWrapper>
      <ChatbotRecommend props={props} />
    </S.SpecDetailColumnWrapper>
  );
}

import specIconPath from "@assets/img/SpecIcon";
import * as S from "./style";

export default function SpecSummaryIcon() {
  return (
    <S.SpecSummaryIconWrapper>
      <S.SpecSummaryIconImg src={specIconPath.sizePath} alt="spec-icon" />
      <S.SpecSummaryIconTitle>제품 타입</S.SpecSummaryIconTitle>
      <S.SpecSummaryIconDescription>BESPOKE 냉장고 4도어</S.SpecSummaryIconDescription>
      <S.SpecSummaryIconTitle>설치 타입</S.SpecSummaryIconTitle>
      <S.SpecSummaryIconDescription>프리스탠딩</S.SpecSummaryIconDescription>
    </S.SpecSummaryIconWrapper>
  );
}

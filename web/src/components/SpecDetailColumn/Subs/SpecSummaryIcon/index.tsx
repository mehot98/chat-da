import * as S from "./style";

export default function SpecSummaryIcon({
  specImg,
  specKey,
  specValue,
}: {
  specImg: string;
  specKey: string;
  specValue: string;
}) {
  if (specImg && specKey && specValue) {
    return (
      <S.SpecSummaryIconWrapper>
        <S.SpecSummaryIconImg src={specImg} alt={specKey} />
        <S.SpecSummaryIconTitle>{specKey}</S.SpecSummaryIconTitle>
        <S.SpecSummaryIconDescription>{specValue}</S.SpecSummaryIconDescription>
      </S.SpecSummaryIconWrapper>
    );
  }
}

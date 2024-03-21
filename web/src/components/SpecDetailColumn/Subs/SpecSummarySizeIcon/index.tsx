import * as T from "@src/types/index";
import * as S from "./style";
import specIconPath from "@assets/img/SpecIcon";

export default function SpecSummarySizeIcon({ sizeSpec }: { sizeSpec: T.SummarySpecType }) {
  return (
    <S.SpecSummaryIconWrapper>
      <S.SpecSummaryIconImg src={specIconPath.sizePath} alt="spec-icon" />
      {sizeSpec && sizeSpec.제품_타입 && sizeSpec.제품_타입 !== "없음" && (
        <>
          <S.SpecSummaryIconTitle>제품 타입</S.SpecSummaryIconTitle>
          <S.SpecSummaryIconDescription>{sizeSpec.제품_타입}</S.SpecSummaryIconDescription>
        </>
      )}
      {sizeSpec && sizeSpec.설치_타입 && sizeSpec.설치_타입 !== "없음" && (
        <>
          <S.SpecSummaryIconTitle>설치 타입</S.SpecSummaryIconTitle>
          <S.SpecSummaryIconDescription>{sizeSpec.설치_타입}</S.SpecSummaryIconDescription>
        </>
      )}
    </S.SpecSummaryIconWrapper>
  );
}

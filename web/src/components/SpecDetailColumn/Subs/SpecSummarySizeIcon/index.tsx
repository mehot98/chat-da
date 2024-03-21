import * as T from "@src/types/index";
import * as S from "./style";
import specIconPath from "@assets/img/SpecIcon";

export default function SpecSummarySizeIcon({ sizeSpec }: { sizeSpec: T.SummarySpecType }) {
  return (
    <S.SpecSummaryIconWrapper>
      {sizeSpec && sizeSpec.가로 && sizeSpec.가로 !== "없음" && (
        <S.SpecSummaryIconImgWrapper>
          <S.widthSpan>{sizeSpec.가로}</S.widthSpan>
          <S.heightSpan>{sizeSpec.높이}</S.heightSpan>
          <S.depthSpan>{sizeSpec.깊이}</S.depthSpan>
          <S.SpecSummaryIconImg src={specIconPath.sizePath} alt="spec-icon" />
        </S.SpecSummaryIconImgWrapper>
      )}

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

import ChatbotRecommend from "../ChatbotRecommend";
import * as Sub from "@components/SpecDetailColumn/Subs";
import * as S from "./style";
import * as T from "@src/types/index";
import { useEffect } from "react";

export default function SpecCompareGrid({
  recommendProps,
  sizeSpec,
  summarySpec,
  rawSpec,
}: {
  recommendProps: T.ChatbotRecommendCardProps[];
  sizeSpec: T.SummarySpecType[];
  summarySpec: T.SummarySpecType[];
  // eslint-disable-next-line
  rawSpec: any;
}) {
  useEffect(() => {
    console.log("여기 grid임", summarySpec, rawSpec);
  }, []);

  if (recommendProps[0]["제품_코드"]) {
    return (
      <S.GridWrapper container spacing={2} rowSpacing={5}>
        {/* 제품 카드 */}
        <S.GridRow xs={12} sx={{ gap: "40px" }}>
          {recommendProps.map((recommend) => (
            <ChatbotRecommend {...recommend} key={recommend.제품_코드} />
          ))}
        </S.GridRow>

        {/* 요약 hr */}
        <S.GridRow xs={12}>
          {recommendProps.map((recommend) => (
            <S.SpecListHeader key={recommend.제품_코드}>
              <S.SpecListHeaderTitle>요약</S.SpecListHeaderTitle>
              <hr />
            </S.SpecListHeader>
          ))}
        </S.GridRow>

        {/* 크기 icon */}
        <S.GridRow xs={12}>
          {sizeSpec.map((size, i) => (
            <S.SpecWrapper key={i}>
              <Sub.SpecSummarySizeIcon sizeSpec={size} />
            </S.SpecWrapper>
          ))}
        </S.GridRow>

        {/* 소비효율등급 */}
        {summarySpec[0].소비효율등급 && <S.GridRow xs={12}></S.GridRow>}
      </S.GridWrapper>
    );
  }
  // return (
  //   <S.GridWrapper container spacing={2}>
  //     <S.GridRow xs={12} sx={{ gap: "40px" }}>
  //       {recommendProps[0]["제품_코드"] &&
  //         recommendProps.map((recommend) => (
  //           <ChatbotRecommend {...recommend} key={recommend.제품_코드} />
  //         ))}
  //     </S.GridRow>
  //     <S.GridRow xs={12}>
  //       {recommendProps[0]["제품_코드"] &&
  //         recommendProps.map((recommend) => (
  //           <S.SpecListHeader key={recommend.제품_코드}>
  //             <S.SpecListHeaderTitle>요약</S.SpecListHeaderTitle>
  //             <hr />
  //           </S.SpecListHeader>
  //         ))}
  //     </S.GridRow>
  //     <S.GridRow xs={12}>
  //       {recommendProps[0]["제품_코드"] &&
  //         recommendProps.map((recommend) => (
  //           <S.SpecListHeader key={recommend.제품_코드}>
  //             <S.SpecListHeaderTitle>요약</S.SpecListHeaderTitle>
  //             <hr />
  //           </S.SpecListHeader>
  //         ))}
  //     </S.GridRow>
  //   </S.GridWrapper>
  // );
}

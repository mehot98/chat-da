import ChatbotRecommend from "../ChatbotRecommend";
// import makeSpecObject from "@src/utils/makeSpecObject";
import * as ColumnSub from "@components/SpecDetailColumn/Subs";
import * as Sub from "./Subs";
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
  const summarySpecKeys = [
    "소비효율등급",
    "오토_오픈_도어",
    "투명_도어",
    "베버리지_센터",
    "푸드_쇼케이스",
    "얼음_종류",
    "제빙기",
    "탈취기",
    "쿨링커버",
    "SmartThings_모바일_앱_지원",
  ];

  useEffect(() => {
    console.log("여기 grid임", summarySpec, rawSpec);
    // summarySpec.forEach((summary, i) => {
    //   console.log("이거 makeSpecObject 실행할거임", summary);
    //   console.log("이게 결과임", makeSpecObject(summary, "소비효율등급"));
    // });
    // eslint-disable-next-line
  }, []);

  if (recommendProps[0]["제품_코드"]) {
    return (
      <S.GridWrapper container spacing={2} rowSpacing={6}>
        {/* 제품 카드 */}
        <S.GridRow xs={12} sx={{ gap: "40px" }}>
          {recommendProps.map((recommend) => (
            <ChatbotRecommend {...recommend} key={recommend.제품_코드} />
          ))}
        </S.GridRow>

        {/* 요약 hr */}
        <S.GridRow xs={12}>
          {recommendProps.map((recommend, i) => (
            <>
              <S.SpecListHeader key={recommend.제품_코드}>
                <S.SpecListHeaderTitle>요약</S.SpecListHeaderTitle>
                <hr />
              </S.SpecListHeader>
              {i !== recommendProps.length - 1 && <S.VerticalLine />}
            </>
          ))}
        </S.GridRow>

        {/* 크기 icon */}
        <S.GridRow xs={12}>
          {sizeSpec.map((size, i) => (
            <>
              <S.SpecWrapper key={i}>
                <ColumnSub.SpecSummarySizeIcon sizeSpec={size} />
              </S.SpecWrapper>
              {i !== recommendProps.length - 1 && <S.VerticalLine />}
            </>
          ))}
        </S.GridRow>

        {summarySpecKeys.map((key) => (
          <Sub.GridSpecSummaryIcon summarySpec={summarySpec} specKey={key} key={key} />
        ))}
      </S.GridWrapper>
    );
  }
}

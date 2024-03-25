import ChatbotRecommend from "../ChatbotRecommend";
import * as Sub from "./Subs";
import * as S from "./style";
import * as T from "@src/types/index";

export default function SpecDetailColumn({
  recommendProps,
  sizeSpec,
  summarySpec,
  rawSpec,
}: {
  recommendProps: T.ChatbotRecommendCardProps;
  sizeSpec: T.SummarySpecType;
  summarySpec: T.SummarySpecType;
  // eslint-disable-next-line
  rawSpec: any;
}) {
  if (!recommendProps || !sizeSpec || !summarySpec || !rawSpec) {
    return <></>;
  }

  return (
    <S.SpecDetailColumnWrapper>
      {recommendProps.제품_코드 && <ChatbotRecommend {...recommendProps} />}

      <S.SpecListHeader>
        <S.SpecListHeaderTitle>요약</S.SpecListHeaderTitle>
        <hr />
      </S.SpecListHeader>

      {sizeSpec && summarySpec && rawSpec && (
        <>
          <S.SpecWrapper>
            <Sub.SpecSummarySizeIcon sizeSpec={sizeSpec} />
            <Sub.SpecSummaryList summarySpec={summarySpec} />
          </S.SpecWrapper>

          <hr />
          <Sub.SpecList rawSpec={rawSpec} />
        </>
      )}
    </S.SpecDetailColumnWrapper>
  );
}

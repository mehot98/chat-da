import ChatbotRecommend from "../ChatbotRecommend";
import * as Sub from "./Subs";
import * as S from "./style";
import * as T from "@src/types/index";

export default function SpecDetailColumn({ selectedModelNo }: { selectedModelNo: string[] }) {
  // RF85C90F1AP 상품 기준 더미데이터
  const recommendProps: {
    제품_코드: string;
    제품명: string;
    가격: string;
    혜택가: string;
    imageUrl: string;
  } = {
    제품_코드: "RF84C906B4W",
    제품명: "BESPOKE 냉장고 4도어 875 L",
    가격: "2,340,000원",
    혜택가: "1,490,000원",
    imageUrl:
      "https://images.samsung.com/kdp/goods/2023/11/16/a7b8d6bb-7665-4a69-bd14-6ac97871746b.png",
  };

  // RF85C90F1AP 상품 기준 더미데이터
  const summarySpec: T.SummarySpecType = {
    가로: "912",
    높이: "1853",
    깊이: "960",
    제품_타입: "BESPOKE 냉장고 4도어",
    설치_타입: "프리스탠딩",
    소비효율등급: "1등급",
    투명_도어: "없음",
    베버리지_센터: "없음",
    푸드_쇼케이스: "있음(우)",
    얼음_종류: "큐브",
    제빙기: "빅 아이스메이커",
    탈취기: "이온살균청정기+, 청정탈취",
    쿨링커버: "글래스 쿨링커버(+ 엣지 쿨링)",
    SmartThings_모바일_앱_지원: "지원",
  };

  const sizeSpec: T.SummarySpecType = {
    가로: summarySpec.가로,
    높이: summarySpec.높이,
    깊이: summarySpec.깊이,
    제품_타입: summarySpec.제품_타입,
    설치_타입: summarySpec.설치_타입,
  };

  return (
    <S.SpecDetailColumnWrapper>
      <ChatbotRecommend {...recommendProps} />
      <S.SpecListHeader>
        <S.SpecListHeaderTitle>요약</S.SpecListHeaderTitle>
        <hr />
      </S.SpecListHeader>

      <S.SpecWrapper>
        <Sub.SpecSummarySizeIcon sizeSpec={sizeSpec} />
        <Sub.SpecSummaryList summarySpec={summarySpec} />
      </S.SpecWrapper>

      <Sub.SpecList />
    </S.SpecDetailColumnWrapper>
  );
}

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

  const rawSpec = {
    "크기(가로 × 높이 × 깊이)": "912x1779x907 mm",
    "전체 용량": "815 ℓ",
    "냉장실 용량": "509 ℓ",
    "냉동실 용량": "306 ℓ",
    "도어 핸들": "히든핸들",
    "디스플레이 타입": "ICE Blue LED",
    색상: "Elegant Inox (리얼메탈)",
    냉매: "R600a",
    도어알람: "있음",
    잠금키: "있음",
    컴프레서: "디지털 인버터 컴프레서",
    "LED 라이팅": "Top LED 라이팅",
    급속냉동: "있음",
    "도어가드 개수": "5 개",
    "박스 개수": "2 개",
    "선반 개수 (전체)": "4 개",
    "선반 재질": "강화유리",
    제빙기: "있음",
    "계란 보관함": "있음",
    탈취기: "솔라파워탈취기",
    소비전력: "50.4 (21.10.1일 부 소비전력량 개정 기준) kWh/월",
    전기용품안전인증: "전기용품 안전인증",
    "인증기관(전기용품안전)": "한국산업기술시험원",
    "인증번호(전기용품안전)": "SE07003-18005",
    전자파적합성등록: "전자파적합성등록",
    "인증기관(전자파적합성)": "국립전파연구원",
    "인증번호(전자파적합성)": "R-R-SEC-RS82M",
    제품명: "전기냉장-냉동기기",
    "제조자/수입자": "㈜DH글로벌 / 삼성전자㈜",
    제조국가: "대한민국",
    "KC 인증 필 유무": "R-R-SEC-RS82M, SE07003-18005",
    "동일모델의 출시년월": "2017년 7월",
    "A/S 책임자와 전화번호": "삼성전자서비스센터 / 1588-3366",
    품질보증기준:
      "결함·하자 등에 따른 소비자피해에 대해서는 소비자분쟁해결기준(소비자기본법 제16조)에 따라 보상가능",
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

      <hr />
      <Sub.SpecList rawSpec={rawSpec} />
    </S.SpecDetailColumnWrapper>
  );
}

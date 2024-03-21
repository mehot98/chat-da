import { useEffect, useState } from "react";
import * as S from "./style";
import * as T from "@src/types";

export default function ProductSummary() {
  //   useEffect(() => {
  //     const currentUrl = window.location.href;
  //     console.log("현재 url :", currentUrl);
  //   }, []);

  const [productSummaryInfo, setProductSummaryInfo] = useState<T.ProductSummaryInfo[] | []>([]);
  useEffect(() => {
    setProductSummaryInfo([
      {
        header: "AI 절약 모드",
        content: "냉장고의 이상 상태를 확인하고 조치가 가능해요 안녕하세요 손만둡니다",
      },
      { header: "SmartThings기능", content: "냉장고의 상태 모니터링 가능해요" },
      { header: "SmartThings 홈케어", content: "환경을 고려해 탄소 배출량을 감소합니다" },
    ]);
  }, []);

  return (
    <>
      <S.ReviewSummaryWrapper count={productSummaryInfo.length}>
        <S.ReviewSummaryDiv>
          <S.ReviewSummaryHeader>
            <span>이 제품의 특징이에요</span>
          </S.ReviewSummaryHeader>
          <S.ReviewSummaryContent>
            {productSummaryInfo.length > 0 &&
              productSummaryInfo.map((info: T.ProductSummaryInfo) => {
                return (
                  <S.InfoWrapper>
                    <S.InfoHeaderWrapper>
                      <span>{info.header}</span>
                    </S.InfoHeaderWrapper>
                    <S.InfoContentWrapper>
                      <span>{info.content}</span>
                    </S.InfoContentWrapper>
                  </S.InfoWrapper>
                );
              })}
          </S.ReviewSummaryContent>
        </S.ReviewSummaryDiv>
      </S.ReviewSummaryWrapper>
    </>
  );
}

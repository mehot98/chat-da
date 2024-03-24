import { useEffect, useState } from "react";
import * as S from "./style";
import * as T from "@src/types";
import React from "react";

export default function ProductSummary() {
  //   useEffect(() => {
  //     const currentUrl = window.location.href;
  //     console.log("현재 url :", currentUrl);
  //   }, []);

  const text = {
    content : "안녕하세요!BESPOKE 냉장고는 전기료를 절약하고 환경을 고려한 스마트한 제품입니다. SmartThings 기능으로 스마트하게 관리하고, AI 절약 모드로 최대 15%의 에너지를 절약할 수 있어요. 트리플 독립 냉각 기능으로 각 칸의 온도와 습도를 최적화하고, 맞춤보관실은 김치부터 양념까지 섬세하게 보관 가능합니다.  그리고 플랫 엣지 디자인과 취향에 맞는 다양한 컬러와 소재로 내부 공간도 넓고 깔끔하답니다. 또한, UV 청정탈취로 위생적으로 식품을 보관할 수 있어요.  만약 궁금한 점이 있으시면 언제든지 물어보세요!"
};
const searchWords = ["BESPOKE", "SmartThings", "트리플 독립 냉각 기능", "UV 청정탈취"];

// 검색어 찾기
const regex = new RegExp(searchWords.join('|'), 'g');
const styledText: (string | JSX.Element)[] = [];
let lastIdx = 0;
let match;

// 스타일 입히기
while((match = regex.exec(text.content)) !== null) {
  const startIdx = match.index;
  const endIdx = startIdx + match[0].length;

  styledText.push(text.content.substring(lastIdx, startIdx));

  styledText.push(
    <span key={startIdx} className="impact">{text.content.substring(startIdx, endIdx)}</span>
  );

  lastIdx = endIdx;
};

styledText.push(text.content.substring(lastIdx));

const summaryText = styledText.map((item:string | JSX.Element, idx:number) => {
  if (typeof item === "string") {
    const text = item.split('.').map((txt, idx) => (
      <React.Fragment key={idx}>
        <span>{txt.trim()}</span>
        <br />
        <br />
      </React.Fragment>
    ));
    text.pop();
    return text;
  } else {
    return item
  }
})

  return (
    <>
      <S.ReviewSummaryWrapper>
        <S.ReviewSummaryDiv>
          <S.ReviewSummaryHeader>
            <span>이 제품의 특징이에요</span>
          </S.ReviewSummaryHeader>
          <S.ReviewSummaryContent>
            {summaryText}
          </S.ReviewSummaryContent>
        </S.ReviewSummaryDiv>
      </S.ReviewSummaryWrapper>
    </>
  );
}

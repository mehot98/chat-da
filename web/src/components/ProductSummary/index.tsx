import React, { useEffect, useRef, useState } from "react";
import * as S from "./style";
import * as API from "@src/apis";
import { useQuery } from "@tanstack/react-query";

export default function ProductSummary({ content }: { content: string }) {
  // 임팩트 단어 모음
  const searchWords = [
    "BESPOKE",
    "SmartThings",
    "트리플 독립 냉각 기능",
    "UV 청정탈취",
    "프리스탠딩",
    "AI 절약 모드",
    "1등급",
    "2등급",
    "제빙기",
    "슬림",
    "아이스메이커",
    "청정탈취",
    "쿨링커버",
    "메탈",
    "히든",
    "심플",
    "디스플레이",
    "용량",
    "비스포크",
  ];

  // 요약 정보 요청
  const queryKey = ["product-summary"];
  const { data: response } = useQuery({
    queryKey: queryKey,
    queryFn: () => API.productSummary.getSummary({ modelNo: content }),
  });

  const summaryInfo = response?.data.content || "";

  // 검색어 찾기
  const regex = new RegExp(searchWords.join("|"), "g");
  const styledText: (string | JSX.Element)[] = [];
  let lastIdx = 0;
  let match;

  // 스타일 입히기
  while ((match = regex.exec(summaryInfo)) !== null) {
    const startIdx = match.index;
    const endIdx = startIdx + match[0].length;

    styledText.push(summaryInfo.substring(lastIdx, startIdx));

    styledText.push(
      <span key={startIdx} className="impact">
        {summaryInfo.substring(startIdx, endIdx)}
      </span>,
    );

    lastIdx = endIdx;
  }

  styledText.push(summaryInfo.substring(lastIdx));

  const summaryText = styledText.map((item: string | JSX.Element) => {
    if (typeof item === "string") {
      const text = item.split(".").map((txt, index) => (
        <React.Fragment key={index}>
          <span>{txt}</span>
          <br />
          <br />
        </React.Fragment>
      ));
      text.pop();
      return text;
    } else {
      return item;
    }
  });

  // 클릭시 사라짐
  const [isClose, setIsClose] = useState(false);

  // 시간 지날때 점점 흐려지고 사라짐
  const modal = document.getElementsByClassName("fade");

  let fadeOut: NodeJS.Timeout;
  let hidden: NodeJS.Timeout;

  const handleMouseEnter = () => {
    clearTimeout(fadeOut);
    clearTimeout(hidden);
    modal[0].classList.remove("fade-out");
    modal[0].classList.remove("hidden");
  };

  const handleMouseLeave = () => {
    const modal = document.getElementsByClassName("fade");
    if (modal[0]) {
      hidden = setTimeout(() => {
        modal[0].classList.add("hidden");
      }, 10000);

      fadeOut = setTimeout(() => {
        modal[0].classList.add("fade-out");
      }, 3000);
    }
  };

  // 말풍선 높이 계산
  const [summaryContentHeight, setSummaryContentHeight] = useState(0);
  const summaryContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (summaryContentRef.current) {
      const height = summaryContentRef.current.clientHeight;
      setSummaryContentHeight(height);
    }
  }, [summaryContentRef]);

  useEffect(() => {
    if (summaryInfo) {
      hidden = setTimeout(() => {
        modal[0].classList.add("hidden");
      }, 10000);

      fadeOut = setTimeout(() => {
        modal[0].classList.add("fade-out");
      }, 3000);
    }
  }, [summaryInfo]);

  return (
    <>
      {!isClose && (
        <S.ReviewSummaryWrapper
          summaryContentHeight={summaryContentHeight}
          onClick={() => setIsClose(true)}
          className="fade"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <S.ReviewSummaryDiv>
            <S.ReviewSummaryHeader>
              <span>이 제품의 특징이에요</span>
            </S.ReviewSummaryHeader>
            <S.ReviewSummaryContent ref={summaryContentRef}>
              {summaryText}
              <S.Triangle />
            </S.ReviewSummaryContent>
          </S.ReviewSummaryDiv>
        </S.ReviewSummaryWrapper>
      )}
    </>
  );
}

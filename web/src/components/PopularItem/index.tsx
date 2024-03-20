import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import * as S from "./style";
import * as T from "@src/types";
import * as Comp from "@src/components";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import downArrowPath from "@root/public/icons/popular_down_arrow.png";
import { useState } from "react";

export default function PopularItem(props: T.PopularItemProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleAccordion = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <S.PopularItemWrapper>
      <S.RankWrapper>
        <span>{props.rank}</span>
      </S.RankWrapper>
      <S.PopularItemDiv>
        <S.AccordionWrapper expanded={isExpanded}>
          <S.AccordionSummaryWrapper id="panel1-header" aria-controls="panel-content">
            <img src={props.imageUrl} alt="popular-product" width={74} height={142} />
            <S.ContentDiv isExpanded={isExpanded}>
              <S.ProductNameWrapper>
                <S.ProductName>{props.제품명}</S.ProductName>
                <S.ProductModelNo>{props.제품_코드}</S.ProductModelNo>
              </S.ProductNameWrapper>
              <S.ReviewPriceWrapper>
                <S.ReviewWrapper>
                  <Comp.StartRate props={props.rating} />
                  <S.RatingSpan>{props.rating}</S.RatingSpan>
                  <S.ReviewCount>({props.reviewCount}건)</S.ReviewCount>
                </S.ReviewWrapper>
                <S.PriceWrapper>
                  <S.PriceHead>혜택가</S.PriceHead>
                  <S.Price>{props.혜택가}원</S.Price>
                </S.PriceWrapper>
              </S.ReviewPriceWrapper>
              {isExpanded && (
                <S.AccordionDetailsWrapper>
                  <S.ReviewSummaryHead>ChatDA가 요약한 리뷰!!</S.ReviewSummaryHead>
                  <S.ReviewSummary>{props.reviewSummary}</S.ReviewSummary>
                </S.AccordionDetailsWrapper>
              )}
            </S.ContentDiv>
            <S.ExpandMoreIconWrapper onClick={toggleAccordion}>
              {isExpanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </S.ExpandMoreIconWrapper>
          </S.AccordionSummaryWrapper>
        </S.AccordionWrapper>
      </S.PopularItemDiv>
    </S.PopularItemWrapper>
  );
}

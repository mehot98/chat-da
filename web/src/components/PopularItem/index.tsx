import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import * as S from "./style";
import * as T from "@src/types";
import downArrowPath from "@root/public/icons/popular_down_arrow.png";

export default function PopularItem(props: T.PopularItemProps) {
  // const downArrowPathSrc = chrome.runtime.getURL(downArrowPath);
  return (
    <Accordion>
      <AccordionSummary id="panel1-header" aria-controls="panel-content">
        <S.ContentWrapper>
          <img src={props.imageUrl} alt="popular-product" width={74} height={142} />
          <S.ContentDiv>
            <S.ProductNameWrapper>
              <S.ProductName>{props.제품명}</S.ProductName>
              <S.ProductModelNo>{props.제품_코드}</S.ProductModelNo>
            </S.ProductNameWrapper>
            <S.ReviewPriceWrapper>
              <S.ReviewWrapper>
                {/* <img src="" alt="" /> */}
                <S.RatingSpan>{props.rating}</S.RatingSpan>
                <S.ReviewCount>{props.reviewCount}건</S.ReviewCount>
              </S.ReviewWrapper>
              <S.PriceWrapper>
                <span>혜택가</span>
                <S.Price>{props.혜택가}원</S.Price>
              </S.PriceWrapper>
            </S.ReviewPriceWrapper>
          </S.ContentDiv>
          {/* <img src={downArrowPathSrc} alt="down-arrow" /> */}
        </S.ContentWrapper>
      </AccordionSummary>
      <AccordionDetails>
        <span>hi</span>
      </AccordionDetails>
    </Accordion>
    // <Accordion>
    //   <AccordionSummary
    //     // expandIcon={<ArrowDownwardIcon />}
    //     aria-controls="panel1-content"
    //     id="panel1-header"
    //   >
    //     <span>Accordion 1</span>
    //   </AccordionSummary>
    //   <AccordionDetails>
    //     <span>
    //       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
    //       sit amet blandit leo lobortis eget.
    //     </span>
    //   </AccordionDetails>
    // </Accordion>
  );
}

import styled from "@emotion/styled";
import theme from "@assets/style/theme.module.scss";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";

interface ContentDivProps {
  isExpanded: boolean;
}

export const PopularItemWrapper = styled.div`
  display: flex;
  position: relative;
`;

export const RankWrapper = styled.div`
  position: absolute;
  top: -8px;
  left: -8px;
  width: 65px;
  height: 63px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  border: 5px solid ${theme.bordercolor};
  background-color: white;
  z-index: 2000;
  cursor: default;
  user-select: none;

  span {
    font-size: 36px;
    font-weight: bold;
    color: ${theme.bordercolor};
  }
`;

export const PopularItemDiv = styled.div`
  margin: 15px 0 15px 17px;
`;

export const AccordionWrapper = styled(Accordion)`
  && {
    box-shadow: none;
  }
`;

export const AccordionSummaryWrapper = styled(AccordionSummary)`
  && {
    width: 585px;
    display: flex;
    /* align-items: center; */
    justify-content: center;
    padding: 6px 15px 6px 0;
    border-radius: 30px;
    box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.25);

    .MuiAccordionSummary-contentGutters {
      margin: 0;
    }

    .MuiAccordionSummary-content {
      display: flex;
      width: 476px;
      align-items: center;
      gap: 46px;
    }
  }
`;

export const ImgContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

// export const ContentDivWrapper = styled.div`
//   width: fit-content;
//   height: 100%;
//   display: flex;
// `;

export const ProductImg = styled.img`
  width: 74px;
  height: 142px;
  object-fit: cover;
`;

export const ContentDiv = styled.div<ContentDivProps>`
  width: 355px;
  height: fit-content;
  display: flex;
  margin-top: ${({ isExpanded }) => (isExpanded ? "36px" : "0")};
  flex-direction: column;
  gap: 16px;
`;

export const ProductNameWrapper = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const ProductName = styled.span`
  font-size: 20px;
  font-weight: bold;
`;

export const ProductModelNo = styled.span`
  font-size: 12px;
  font-weight: medium;
  color: #767676;
`;

export const ReviewPriceWrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
`;

export const ReviewWrapper = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const RatingSpan = styled.span`
  font-size: 14px;
  font-weight: medium;
`;

export const ReviewCount = styled.span`
  font-size: 12px;
  font-weight: light;
  color: #767676;
`;

export const PriceWrapper = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const PriceHead = styled.span`
  font-size: 14px;
  font-weight: medium;
  color: #767676;
`;

export const Price = styled.span`
  font-size: 20px;
  font-weight: bold;
  color: ${theme.bordercolor};
`;

export const ExpandMoreIconWrapper = styled.div`
  width: fit-content;
  height: 142px;
  display: flex;
  align-items: center;

  & > svg {
    width: 34px;
    height: 34px;
    fill: #a7a7a7;
    transition: transform 0.3s ease; /* 추가: 변환에 대한 전환 효과 */
  }

  &:hover {
    & > svg {
      transform: scale(1.4); /* 추가: 호버 시 SVG를 확대 */
      /* stroke: #ffffff;
      stroke-width: 0.5px;
      stroke-linecap: round; */
      fill: white;
      filter: drop-shadow(0 0 2px #2189ff);
    }
  }
`;

export const AccordionDetailsWrapper = styled(AccordionDetails)`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 0 45px 30px 0;
`;

export const ReviewSummaryHead = styled.span`
  font-size: 13px;
  font-weight: bold;
`;

export const ReviewSummary = styled.span`
  font-size: 12px;
  font-weight: medium;
`;

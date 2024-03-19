import styled from "@emotion/styled";
import theme from "@assets/style/theme.module.scss";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";

interface ContentDivProps {
  isExpanded: boolean;
}

export const PopularItemWrapper = styled.div`
  margin: 5px 0 5px 17px;
`;

export const AccordionWrapper = styled(Accordion)`
  && {
    box-shadow: none;
  }
`;

export const AccordionSummaryWrapper = styled(AccordionSummary)`
  && {
    width: 630px;
    display: flex;
    /* align-items: center; */
    justify-content: center;
    padding: 6px 30px;
    border-radius: 30px;
    box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.25);

    .MuiAccordionSummary-content {
      display: flex;
      width: 476px;
      align-items: center;
      gap: 46px;
    }
  }
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

export const AccordionDetailsWrapper = styled(AccordionDetails)`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ReviewSummaryHead = styled.span`
  font-size: 13px;
  font-weight: bold;
`;

export const ReviewSummary = styled.span`
  font-size: 12px;
  font-weight: medium;
`;

import styled from "@emotion/styled";
import theme from "@assets/style/theme.module.scss";

export const ContentWrapper = styled.div`
  width: 630px;
  display: flex;
  align-items: center;
  gap: 46px;
  padding: 6px 41px 6px 53px;
  border-radius: 30px;
  box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.25);
`;

export const ContentDiv = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
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
  gap: 15px;
  span {
    font-size: 14px;
    font-weight: medium;
    color: #767676;
  }
`;

export const Price = styled.span`
  font-size: 20px;
  font-weight: bold;
  color: ${theme.bordercolor};
`;

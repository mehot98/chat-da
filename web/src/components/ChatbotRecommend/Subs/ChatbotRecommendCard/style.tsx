import styled from "@emotion/styled";
import theme from "@assets/style/theme.module.scss";

export const RecommendCardWrapper = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const RecommendCardTitle = styled.span`
  font-size: 16px;
`;
export const RecommendCardNo = styled.span`
  font-size: 12px;
  color: #9f9f9f;
`;

export const ReommendCardPriceWrapper = styled.div`
  width: 100%;
  font-size: 16px;
  display: flex;
  justify-content: space-between;
`;
export const ReommendCardPrice = styled.span`
  color: ${theme.bordercolor};
  font-weight: bold;
`;

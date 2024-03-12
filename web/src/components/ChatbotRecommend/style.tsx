import styled from "@emotion/styled";
import theme from "@assets/style/theme.module.scss";

export const RecommendWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`;

export const RecommendMessageWrapper = styled.div`
  width: 100%;
  height: fit-content;
  div {
    width: fit-content;
    padding: 14px 28px;
    border-radius: 0 17px 17px 17px;
    background-color: ${theme.chatDAchatcolor};
  }
`;

export const RecommendCardWrapper = styled.div`
  width: 246px;
  height: fit-content;
  padding: 10px;
  display: flex;
  justify-content: center;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
`;

export const RecommendCardButtonWrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: center;
`;

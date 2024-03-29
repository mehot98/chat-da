import styled from "@emotion/styled";
import theme from "@assets/style/theme.module.scss";

export const HomeMessageWrapper = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 28px;
`;

export const HomeCardWrapper = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const HomeCard = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 5px;
  padding: 15px 13px;
  border-radius: 17px;
  box-shadow: 2px 4px 5px rgba(0, 0, 0, 0.25);
  span {
    color: white;
    font-size: 9px;
    width: 74px;
    height: 42px;
  }

  &.fridge {
    background-color: ${theme.bordercolor};
  }
  &.scale {
    background-color: ${theme.userchatcolor};
  }
  &.thumbup {
    background-color: ${theme.headercolor};
  }
`;

export const HomeAdviceWrapper = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const HomeAdviceDiv = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  align-items: center;
  gap: 7px;
`;

export const IconWrapper = styled.div`
  width: 35px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  background-color: #e0e0e0;
`;

export const EmojiSpan = styled.span`
  font-size: 20px;
`;

export const TextWrapper = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 3px;
`;

export const UpperSpan = styled.span`
  font-size: 12px;
  font-weight: bold;
`;

export const LowerSpan = styled.span`
  font-size: 9px;
`;

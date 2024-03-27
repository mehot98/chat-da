import styled from "@emotion/styled";
import theme from "@assets/style/theme.module.scss";

export const HomeMessageWrapper = styled.div``;

export const HomeCardWrapper = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: end;
  border-radius: 17px;

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

export const HomeCard = styled.div``;

export const HomeAdviceWrapper = styled.div``;

export const HomeAdviceDiv = styled.div``;

export const IconWrapper = styled.div``;

export const EmojiSpan = styled.span``;

export const TextWrapper = styled.div``;

export const UpperSpan = styled.span``;

export const LowerSpan = styled.span``;

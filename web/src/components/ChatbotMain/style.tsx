import styled from "@emotion/styled";
import theme from "@assets/style/theme.module.scss";

export const ChatMainWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const ChatMessageWrapper = styled.div`
  width: 100%;
  height: 450px;
  overflow-y: scroll;
`;

export const ChatInputWrapper = styled.div`
  position: relative;
  bottom: 0;
  left: 0;
  width: 100%;
  flex-grow: 1;
  display: flex;
  align-items: center;
  border-radius: 0 0 9px 9px;
  background-color: ${theme.inputfootercolor};
  height: 57px;
  z-index: 99;
`;

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
  padding: 0 15px;
  overflow-y: scroll;
`;

export const ChatInputWrapper = styled.div`
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  border-radius: 0 0 9px 9px;
  background-color: ${theme.inputfootercolor};
  height: 57px;
  z-index: 99;
`;

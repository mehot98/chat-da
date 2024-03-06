import styled from "@emotion/styled";
import theme from "@assets/style/theme.module.scss";

export const UserMessageWrapper = styled.div`
  width: fit-content;
  height: fit-content;
  padding: 14px 28px;
  border-radius: 17px 0 17px 17px;
  color: white;
  background-color: ${theme.userchatcolor};
  margin-left: auto;
`;

export const AiMessageWrapper = styled.div`
  display: flex;
  gap: 8px;
`;

export const AiMessageDiv = styled.div`
  width: 100%;
  height: fit-content;
  div {
    width: fit-content;
    padding: 14px 28px;
    border-radius: 0 17px 17px 17px;
    background-color: ${theme.chatDAchatcolor};
  }
`;

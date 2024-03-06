import styled from "@emotion/styled";

export const UserMessageWrapper = styled.div`
  width: fit-content;
  height: fit-content;
  padding: 14px 28px;
  border-radius: 17px 0 17px 17px;
  color: white;
  background-color: #6c9bd5;
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
    background-color: #c4c4c4;
  }
`;

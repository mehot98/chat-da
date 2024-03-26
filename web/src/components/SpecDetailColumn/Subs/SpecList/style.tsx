import styled from "@emotion/styled";

export const SpecListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`;

export const SpecLineWrapper = styled(SpecListWrapper)`
  gap: 10px;
`;

export const SpecTitle = styled.span`
  font-size: 16px;
  font-weight: bold;
`;

export const SpecDetail = styled.span`
  font-size: 13px;
  width: 200px;
  text-align: center;
`;

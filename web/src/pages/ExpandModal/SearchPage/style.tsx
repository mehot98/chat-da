import styled from "@emotion/styled";
import IconButton from "@mui/material/IconButton";

export const ModalHeaderWrapper = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 11px;
`;

export const ModalHeaderSpan = styled.span`
  font-size: 36px;
  font-weight: bold;
`;

export const ModalHeaderSubSpan = styled.span`
  font-size: 16px;
  font-weight: 400;
`;

export const SearchInputWrapper = styled.div`
  position: relative;
  width: 80%;
`;

export const ModalHeaderSearchInput = styled.input`
  width: 100%;
  height: 50px;
  background-color: #f5f5f5;
  border-radius: 30px;
  padding: 0 30px;
`;

export const SearchIconButton = styled(IconButton)`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translate(0, -50%);
`;

export const ModalSearchItemWrapper = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin: 30px 0;
`;

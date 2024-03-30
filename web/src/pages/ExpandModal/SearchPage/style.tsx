import styled from "@emotion/styled";
import IconButton from "@mui/material/IconButton";
import CircularProgress from "@mui/material/CircularProgress";

interface InputPlaceholderProps {
  isEmpty: boolean;
  isFocused: boolean;
}

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

export const InputPlaceholder = styled.span<InputPlaceholderProps>`
  position: absolute;
  color: #c7c7c7;
  padding: 15px 30px;
  pointer-events: none;
  display: ${(props) => (props.isEmpty && !props.isFocused ? "block" : "none")};
  & span {
    font-size: 15px;
  }
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
  width: 585px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  margin: 30px 0;
`;

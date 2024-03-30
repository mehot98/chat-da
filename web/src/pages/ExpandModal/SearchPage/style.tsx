import styled from "@emotion/styled";
import IconButton from "@mui/material/IconButton";

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

export const ImgWrapper = styled.div`
  position: relative;
`;

export const ImgSpan = styled.span`
  width: max-content;
  font-size: 20px;
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translate(-50%, 0);
`;

export const LoadingCard = styled.div`
  width: 100%;
  height: 150px;
  border-radius: 30px;

  animation: shimmer 2s infinite linear;
  background: linear-gradient(to right, #eff1f3 4%, #e2e2e2 25%, #eff1f3 36%);
  background-size: 1000px 100%;

  @keyframes shimmer {
    0% {
      background-position: -1000px 0;
    }
    100% {
      background-position: 1000px 0;
    }
  }
`;

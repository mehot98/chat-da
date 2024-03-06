import styled from "@emotion/styled";

interface InputPlaceholderProps {
  isEmpty: boolean;
  isFocused: boolean;
}

export const InputForm = styled.form`
display: flex;
gap: 8px;
justify-content: center;
align-items: center;
`;

export const InputWrapper = styled.div`
  position: relative;
`;

export const InputPlaceholder = styled.span<InputPlaceholderProps>`
  position: absolute;
  color: #C7C7C7;
  font-size: 12px;
  padding: 8px;
  pointer-events: none;
  display: ${(props) => (props.isEmpty && !props.isFocused ? 'block' : 'none')};
`;

export const InputTextarea = styled.textarea`
width: 280px;
height: 39px;
font-size: 13px;
padding: 8px;
border: 1px solid #E0E0E0;
background-color: white;
border-radius: 5px;
resize: none;
`;

export const SubmitButton = styled.button`
  width: 39px;
  height: 39px;
  border-radius: 50%;
  background-color: #3a6da9;
`;

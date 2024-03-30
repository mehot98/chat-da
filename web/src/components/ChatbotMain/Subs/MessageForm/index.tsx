import { useState, FocusEvent } from "react";
import * as S from "./style";

const nextIconPath = "icons/next_icon.png";

export default function MessageForm({
  onSendMessage,
}: {
  onSendMessage: (message: string) => Promise<void>;
}) {
  const nextIcon = chrome.runtime.getURL(nextIconPath);

  const [message, setMessage] = useState("");
  const [focused, setFocused] = useState(false);

  const handleSubmit = (
    event: React.FormEvent<HTMLFormElement> | React.KeyboardEvent<HTMLTextAreaElement>,
  ) => {
    event.preventDefault();

    if (message) {
      onSendMessage(message);
      setMessage("");
    }
  };

  const handleEnterSubmit = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter") {
      handleSubmit(event);
    }
  };

  const handleFocus = (e: FocusEvent<HTMLTextAreaElement, Element>) => {
    e.stopPropagation();
    setFocused(true);
  };

  return (
    <S.InputForm onSubmit={handleSubmit} className="message-form">
      <S.InputWrapper>
        <S.InputPlaceholder isEmpty={!message} isFocused={focused}>
          <span>궁금한 점이 있으신가요?</span>
        </S.InputPlaceholder>
        <S.InputTextarea
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          onKeyDown={handleEnterSubmit}
          className="message-input"
          onFocus={handleFocus}
          onBlur={() => setFocused(false)}
        />
      </S.InputWrapper>
      <S.SubmitButton type="submit" className="send-button">
        <img src={nextIcon} alt="next-icon" width={23} height={23} />
      </S.SubmitButton>
    </S.InputForm>
  );
}

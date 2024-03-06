import { useState } from "react";
// import nextIconPath from "@root/public/next_icon.png";

const nextIconPath = "icons/next_icon.png";

export default function MessageForm({ onSendMessage }) {
  const nextIcon = chrome.runtime.getURL(nextIconPath);

  const [message, setMessage] = useState("");

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

  return (
    <form onSubmit={handleSubmit} className="message-form">
      <textarea
        value={message}
        onChange={(event) => setMessage(event.target.value)}
        onKeyDown={handleEnterSubmit}
        className="message-input"
      />
      <button type="submit" className="send-button">
        <img src={nextIcon} alt="next-icon" width={23} height={23} />
      </button>
    </form>
  );
}

import { useState } from "react";
// import nextIconPath from "@root/public/next_icon.png";

const nextIconPath = "next_icon.png";

export default function MessageForm({ onSendMessage }) {
  const nextIcon = chrome.runtime.getURL(nextIconPath);

  const [message, setMessage] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSendMessage(message);
    setMessage("");
  };

  return (
    <form onSubmit={handleSubmit} className="message-form">
      <textarea
        value={message}
        onChange={(event) => setMessage(event.target.value)}
        className="message-input"
      />
      <button type="submit" className="send-button">
        <img src={nextIcon} alt="next-icon" width={23} height={23} />
      </button>
    </form>
  );
}

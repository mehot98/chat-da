export default function Message ({
    text,
    isUser,
    isTyping,
    id,
    currentTypingId
}) {
	return(
		<div className={isUser ? "user-message" : "ai-message"}>
			{isTyping && currentTypingId === id ? (
				<p><b>ChatDA</b> : {text}</p>
			) : (
				<p><b>{isUser ? "User" : "ChatDA"}</b>: {text}</p>
			)
		}
		</div>
	)
}
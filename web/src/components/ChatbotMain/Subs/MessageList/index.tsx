import Message from "../Message";
import * as T from "@root/src/types"

export default function MessageList({ messages, currentTypingId, onEndTyping }) {
  return (
		<div className="messages-list">
			{messages.map((message:T.MessageProps, index:number) => 
				<Message 
					key={index}
					{...message}
					currentTypingId={currentTypingId}
				/>
			)}
		</div>
	)
}
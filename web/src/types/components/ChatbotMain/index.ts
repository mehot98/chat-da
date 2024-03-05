export interface MessageProps {
  text: string;
	isUser: boolean;
	isTyping: boolean;
	id: number;
	currentTypingId: number;
}
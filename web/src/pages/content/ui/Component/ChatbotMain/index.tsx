import { useState, ChangeEvent } from "react";
// import dotenv from 'dotenv';
import axios from "axios";
import { useRef } from "react";


interface ChatMessage {
    text: string;
    sender: "user" | "bot";
  }

// dotenv.config();


export default function ChatbotMain() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
	const ref = useRef<HTMLInputElement>(null);
	const [inputText, setInputText] = useState<string>("");
	const [gptText, setGptText] = useState<string>("");
	// const openAiKey = process.env.openAiKey;

	// openAiKey발급
	// const {Configuration, OpenAIApi} = require('openai')

	// const configuration = new Configuration({
	// 	apiKey: process.env.OPENAI_API_KEY,
	// });
	// const openai = new OpenAIApi(configuration);
	const openAiKey='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';



	const handleInputTextOnChange = (e: ChangeEvent<HTMLInputElement>) => {
		setInputText(e.target.value);
	}

	const handleGptText = (prompt:string) => {
		setGptText(prompt)
	}

	const generateText = async (prompt: string) => {
		try {
			const response = await axios.post(
				"https://api.openai.com/v1/chat/completions",
				{
					model: "gpt-3.5-turbo",
					messages: [
						{
							role: "system",
							content: "You are a helpful assistant."
						},
						{
							role: "user",
							content: prompt
						}
					]
				},
				{
					headers: {
						"Content-Type": "application/json",
						"Authorization": `Bearer ${openAiKey}`
					}
				}
			);
			console.log(response);
			const { choices } = response.data;
			const text = choices[0].message.content.trim();
			return text;
		} catch (e: any) {
			  if (e.response?.status === 500) {
			    alert("OpenAI 서버에 오류가 발생했습니다.");
			    setMessages([
			      ...messages,
			      { text: inputText, sender: "user" },
			      { text: "오류가 발생했습니다.", sender: "bot" },
			    ]);
			  }
		};
  };

	async function handleSendMessage() {
    if (inputText.trim() === "") {
      return;
    }
    const response = await generateText(inputText);
    // 예외처리
    if (!response || response === undefined) {
      setMessages([
        ...messages,
        { text: inputText, sender: "user" },
        { text: "에러가 발생했습니다.", sender: "bot" },
      ]);
    } else {
      setMessages([
        ...messages,
        { text: inputText, sender: "user" },
        { text: response, sender: "bot" },
      ]);
    }
		setGptText(response);
    setInputText("");
  }

	const handleKeyPress = (e: React.KeyboardEvent) => {
		if (e.key === "Enter") {
			handleSendMessage();
			setInputText("");
		}
	}

	return (
		<div>
			<div>
				<p>GPT's Answer</p>
				<span>{gptText}</span>
			</div>
			<div>
				<input ref={ref} id="chat" type="text" value={inputText} onChange={handleInputTextOnChange} onKeyDown={handleKeyPress} />
				<button onClick={() => {handleSendMessage(); setInputText("");}}>send</button>
			</div>
		</div>
	)
}
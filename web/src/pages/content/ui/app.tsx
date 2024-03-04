import { useState, useEffect } from "react";
import { styled } from "styled-components";
import { ChatbotMain } from "@root/src/component";
import "@assets/style/theme.scss";
import chatDAIconPath from "../../../../public/ChatDA_icon_128.png";

export default function App() {
  const [isOpenMainModal, setIsOpenMainModal] = useState<boolean>(false);

  useEffect(() => {
    console.log("content view loaded");
  }, []);

  // Find existing chatbot icon, and insert chatda icon
  const existingChatbotIcon: Element = document.getElementsByClassName("menu01")[0];

  if (!document.getElementById("chatDAIcon")) {
    const chatDAIcon: HTMLImageElement = document.createElement("img");
    chatDAIcon.id = "chatDAIcon";

    chatDAIcon.src = chrome.runtime.getURL(chatDAIconPath);
    chatDAIcon.width = 64;
    chatDAIcon.style.position = "relative";
    chatDAIcon.style.zIndex = "100";
    chatDAIcon.style.cursor = "pointer";

    chatDAIcon.onclick = (e: MouseEvent) => {
      console.log(e);
      setIsOpenMainModal(true);
      console.log("chat da 클릭됨!!", isOpenMainModal);
    };

    existingChatbotIcon.prepend(chatDAIcon);
  }

  // When click chatDAIcon, the dialog open
  return (
    <>
      <div className="">content view</div>
      <ChatbotMain />
      <ChatMainModal open={isOpenMainModal}>
        <button onClick={() => setIsOpenMainModal(false)}>x</button>
      </ChatMainModal>
    </>
  );
}

const ChatMainModal = styled.dialog`
  width: 373px;
  height: 748px;
  position: fixed;
  right: 100px;
  background-color: white;
  border: 1px solid var(--border-color);
`;

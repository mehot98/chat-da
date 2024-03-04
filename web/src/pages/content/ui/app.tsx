import { useState, useEffect } from "react";
import { styled } from "styled-components";
import { GptPrac } from "@root/src/component";
import "@assets/style/theme.scss";
import chatDAIconPath from "../../../../public/ChatDA_icon_128.png";
import ChatbotMain from "@root/src/component/ChatbotMain";

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
      {isOpenMainModal && (
        <ModalOverlay>
          <ModalContentWrapper>
            <ModalContent>
              <CloseButton onClick={() => setIsOpenMainModal(false)}>x</CloseButton>
              <ChatbotMain />
            </ModalContent>
          </ModalContentWrapper>
        </ModalOverlay>
      )}
    </>
  );
}
        // {/* <div className="">content view</div>
        // <GptPrac /> */}
        //   <ChatMainModal open={isOpenMainModal}>

        //     <button onClick={() => setIsOpenMainModal(false)}>x</button>
        //     <div>
        //       <ChatbotMain />
        //     </div>
        //   </ChatMainModal>

const ModalOverlay = styled.div`
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
background-color: rgba(0, 0, 0, 0.5);
display: flex;
justify-content: center;
align-items: center;
`;

const ModalContentWrapper = styled.div`
position: relative;
background-color: white;
padding: 20px;
`;

const ModalContent = styled.div`
  position: absolute;
`

const CloseButton = styled.button`
top: 10px;
right: 10px;
`;

// const ChatbotMainModalWrapper = styled.div`
//   position: relative;
// `;

// const ChatMainModal = styled.dialog`
//   width: 373px;
//   height: 748px;
//   position: absolute;
//   right: 100px;
//   background-color: white;
//   border: 1px solid var(--border-color);
// `;

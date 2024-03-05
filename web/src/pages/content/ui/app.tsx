import { useState, useEffect } from "react";
import * as S from "./style";
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
        <S.ModalOverlay>
          <S.ModalContentWrapper>
            <S.ModalContent>
              <S.CloseButton className="close-button" onClick={() => setIsOpenMainModal(false)}>
                x
              </S.CloseButton>
              <ChatbotMain />
            </S.ModalContent>
          </S.ModalContentWrapper>
        </S.ModalOverlay>
      )}
    </>
  );
}

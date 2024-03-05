import { useState, useEffect } from "react";
import * as S from "./style";
import chatDAIconPath from "@root/public/ChatDA_icon_128.png";
import { ChatbotMain } from "@root/src/components";
import styled from "@emotion/styled";
import theme from "@assets/style/theme.module.scss";

import { Dialog } from "@mui/material";

export default function App() {
  const [isOpenMainModal, setIsOpenMainModal] = useState<boolean>(false);

  useEffect(() => {
    console.log("content view loaded");
  }, []);

  useEffect(() => {
    document.body.style.overflowY = "scroll";
  }, [isOpenMainModal]);

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

    // When click chatDAIcon, the dialog open
    chatDAIcon.onclick = (e: MouseEvent) => {
      console.log(e);
      setIsOpenMainModal(true);
      console.log("chat da 클릭됨!!", isOpenMainModal);
    };

    existingChatbotIcon.prepend(chatDAIcon);
  }

  const handleCloseMainModal: () => void = () => {
    setIsOpenMainModal(false);
  };

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
      <ChatMainModal open={isOpenMainModal} onClose={handleCloseMainModal} disableScrollLock={true}>
        <button onClick={handleCloseMainModal}>x</button>
      </ChatMainModal>
    </>
  );
}

const ChatMainModal = styled(Dialog)`
  position: fixed;
  right: 100px;

  & .MuiBackdrop-root {
    background-color: transparent;
  }

  & .MuiDialog-paper {
    width: 373px;
    height: 748px;
    position: fixed;
    right: 80px;
    border: 1px solid ${theme.bordercolor};
    border-radius: 10px;
  }
`;

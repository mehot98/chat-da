import { useState, useEffect } from "react";
import * as S from "./style";
import chatDAIconPath from "@root/public/ChatDA_icon_128.png";
import * as Comp from "@root/src/components";

import { StyledEngineProvider } from "@mui/material/styles";

export default function App() {
  const [isOpenMainModal, setIsOpenMainModal] = useState<boolean>(false);
  const [isOpenExpandModal, setIsOpenExpandModal] = useState<boolean>(false);

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

  const handleCloseExpandModal: () => void = () => {
    setIsOpenExpandModal(false);
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
              <Comp.ChatbotMain />
            </S.ModalContent>
          </S.ModalContentWrapper>
        </S.ModalOverlay>
      )}
      {/* mui component를 사용하는 경우 아래와 같이 StyledEngineProvider를 반드시 사용해야 합니다!*/}
      <StyledEngineProvider injectFirst>
        <S.ChatExpandModal
          open={isOpenExpandModal}
          onClose={handleCloseExpandModal}
          disableScrollLock={true}
        >
          확장모달입니당
          <button onClick={handleCloseExpandModal}>확장 모달 닫기</button>
        </S.ChatExpandModal>

        <S.ChatMainModal
          open={isOpenMainModal}
          onClose={handleCloseMainModal}
          disableScrollLock={true}
        >
          <button onClick={handleCloseMainModal}>x</button>
          <button onClick={() => setIsOpenExpandModal(true)}>확장 모달 열기</button>
        </S.ChatMainModal>
      </StyledEngineProvider>
    </>
  );
}

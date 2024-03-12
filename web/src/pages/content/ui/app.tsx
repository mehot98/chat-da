import { useState, useEffect } from "react";
import * as S from "./style";
import chatDAIconPath from "@root/public/icons/ChatDA_icon_128.png";
import * as Comp from "@root/src/components";

const rankingIconPath = "icons/ranking_icon.png";
const searchIconPath = "icons/search_icon.png";

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
    chatDAIcon.onclick = () => {
      setIsOpenMainModal(true);
    };

    existingChatbotIcon.prepend(chatDAIcon);
  }

  const handleCloseMainModal: () => void = () => {
    setIsOpenMainModal(false);
  };

  const handleCloseExpandModal: () => void = () => {
    setIsOpenExpandModal(false);
  };

  const handleClickBackdrop: () => void = () => {
    handleCloseMainModal();
    handleCloseExpandModal();
  };
  // 모달 header 아이콘
  const rankingIconSrc = chrome.runtime.getURL(rankingIconPath);
  const searchIconSrc = chrome.runtime.getURL(searchIconPath);

  return (
    <>
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
          {/* <button onClick={handleCloseMainModal}>x</button>
          <button onClick={() => setIsOpenExpandModal(true)}>확장 모달 열기</button> */}
          {/* <button onClick={handleCloseMainModal}>x</button> */}
          <S.ChatMainWrapper>
            <S.ChatMainHeader>
              <S.HeaderWords>
                <p>
                  상품 <b>비교</b>, 상세 정보 <b>설명</b>, <b>추천</b>까지!
                </p>
                <p>삼성의 가전제품들을</p>
                <p>이해하기 쉽게 알려드립니다 😊</p>
              </S.HeaderWords>
              <S.IconWrapper onClick={() => setIsOpenExpandModal(true)}>
                <img src={rankingIconSrc} alt="ranking-icon" width={35} height={35} />
                <span>인기순위</span>
              </S.IconWrapper>
              <S.IconWrapper onClick={() => setIsOpenExpandModal(true)}>
                <img src={searchIconSrc} alt="search-icon" width={35} height={35} />
                <span>검색하기</span>
              </S.IconWrapper>
            </S.ChatMainHeader>

            <S.ChatMainContent>
              <Comp.ChatbotMain />
            </S.ChatMainContent>
          </S.ChatMainWrapper>
        </S.ChatMainModal>
      </StyledEngineProvider>

      <S.ChatModalBackdrop
        className="backdrop"
        onClick={handleClickBackdrop}
        open={isOpenMainModal}
        expandOpen={isOpenExpandModal}
      />
    </>
  );
}

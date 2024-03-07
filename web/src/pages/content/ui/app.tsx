import { useState, useEffect } from "react";
import * as Comp from "@root/src/components";
import * as S from "./style";
import * as T from "@root/src/types";
import chatDAIconPath from "@root/public/icons/ChatDA_icon_128.png";
import theme from "@assets/style/theme.module.scss";

const rankingIconPath = "icons/ranking_icon.png";
const searchIconPath = "icons/search_icon.png";

import { StyledEngineProvider } from "@mui/material/styles";
import ReactDOMServer from "react-dom/server";

export default function App() {
  const [isOpenMainModal, setIsOpenMainModal] = useState<boolean>(false);
  const [isOpenExpandModal, setIsOpenExpandModal] = useState<boolean>(false);

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

  const handleClickBackdrop: () => void = () => {
    handleCloseMainModal();
    handleCloseExpandModal();
  };
  // 모달 header 아이콘
  const rankingIconSrc = chrome.runtime.getURL(rankingIconPath);
  const searchIconSrc = chrome.runtime.getURL(searchIconPath);

  // 현재 url 가져오기
  const currentUrl = window.location.href;
  console.log("Current URL:", currentUrl);

  // 냉장고 페이지에서 모든 리스트 선택
  const [fridgeList, setFridgeList] = useState<NodeListOf<Element>>();

  useEffect(() => {
    if (currentUrl === "https://www.samsung.com/sec/refrigerators/all-refrigerators/") {
      const moreBtn: HTMLButtonElement | null = document.querySelector("#morePrd");
      moreBtn.style.backgroundColor = "black";
      let newLiElements: NodeListOf<Element> = document.querySelectorAll(".item-inner");
      setFridgeList(newLiElements);

      moreBtn.addEventListener("click", () => {
        setFridgeList(newLiElements);
        console.log(fridgeList);
      });
    }
  }, [currentUrl]);
  // 메시지 정보 담는 곳
  const [messages, setMessages] = useState<T.MessagesProps>([]);
  // 비교하기 아이콘 붙이기 + 클릭시 제품명, 코드 저장
  // 비교상품 정보 담는 곳
  const [comparePrds, setComparePrds] = useState<T.ComparePrdProps[]>([]);
  useEffect(() => {
    if (fridgeList && fridgeList.length > 0) {
      fridgeList.forEach((element: Element) => {
        const compareButton: HTMLButtonElement = document.createElement("button");
        compareButton.id = "ChatDAButton";

        const compareIcon: HTMLImageElement = document.createElement("img");
        compareIcon.id = "compareIcon";
        compareIcon.src = chrome.runtime.getURL(chatDAIconPath);
        compareIcon.width = 40;
        compareIcon.style.position = "absolute";
        compareIcon.style.right = "8%";
        compareIcon.style.top = "44%";
        compareIcon.style.zIndex = "100";
        compareIcon.style.cursor = "pointer";
        compareIcon.style.display = "none";

        const hoverMessage: HTMLDivElement = document.createElement("div");
        const hoverspan: HTMLSpanElement = document.createElement("span");
        hoverspan.textContent = "ChatDA에서 비교하기";
        hoverspan.style.color = "white";
        hoverspan.style.fontSize = "16px";

        hoverMessage.appendChild(hoverspan);
        hoverMessage.style.position = "absolute";
        hoverMessage.style.top = "50%";
        hoverMessage.style.right = "9%";
        hoverMessage.style.display = "flex";
        hoverMessage.style.padding = "8px 20px";
        hoverMessage.style.zIndex = "100";
        hoverMessage.style.backgroundColor = `${theme.bordercolor}`;
        hoverMessage.style.borderRadius = "17px 0 17px 17px";
        hoverMessage.style.display = "none";
        hoverMessage.style.textAlign = "center";

        compareButton.appendChild(compareIcon);
        element.appendChild(compareButton);
        element.appendChild(hoverMessage);

        element.addEventListener("mouseenter", () => {
          compareIcon.style.display = "block";
        });

        element.addEventListener("mouseleave", () => {
          compareIcon.style.display = "none";
        });

        compareButton.addEventListener("mouseenter", () => {
          compareIcon.width = 45;
          hoverMessage.style.display = "block";
        });

        compareButton.addEventListener("mouseleave", () => {
          compareIcon.width = 40;
          hoverMessage.style.display = "none";
        });

        compareButton.addEventListener("click", () => {
          // 부모요소 찾기
          const parentElement = compareButton.parentElement;
          const detailElement = parentElement.querySelector(".card-detail");
          const spanTags = detailElement.querySelectorAll("span");
          const time = Date.now();

          setComparePrds((prev) => {
            return [
              ...prev,
              {
                제품명: spanTags[0].textContent,
                modelNo: spanTags[1].textContent,
                id: time,
              },
            ];
          });

          setMessages((prev) => {
            return [
              ...prev,
              {
                text: `${spanTags[0].textContent}\n${spanTags[1].textContent}`,
                isUser: true,
                isTyping: true,
                id: time,
                isCompared: true,
              },
            ];
          });
        });
      });
    }
  }, [fridgeList]);

  useEffect(() => {
    console.log("prd를 좀 보자:", comparePrds);
  }, [comparePrds]);
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
              <Comp.ChatbotMain
                props={comparePrds}
                setComparePrds={setComparePrds}
                messages={messages}
                setMessages={setMessages}
              />
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

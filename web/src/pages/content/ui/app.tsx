import { useState, useEffect, ReactElement, useRef } from "react";
import * as Comp from "@root/src/components";
import * as S from "./style";
import * as T from "@root/src/types";
import * as P from "@pages/ExpandModal";
import { request } from "@src/apis/requestBuilder";
import chatDAIconPath from "@root/public/icons/ChatDA_icon_128.png";
import theme from "@assets/style/theme.module.scss";
import { StyledEngineProvider } from "@mui/material/styles";
import CloseIcon from "@mui/icons-material/Close";

const rankingIconPath = "icons/ranking_icon.png";
const searchIconPath = "icons/search_icon.png";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createRoot } from "react-dom/client";

export default function App() {
  const [isOpenMainModal, setIsOpenMainModal] = useState<boolean>(false);
  const [isOpenExpandModal, setIsOpenExpandModal] = useState<boolean>(false);
  const [expandModalState, setExpandModalState] = useState<T.ExpandModalStateType>(null);
  const [selectedModelNo, setSelectedModelNo] = useState<string[]>([]);

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

  const handleOpenExpandModal = (st: T.ExpandModalStateType) => {
    setIsOpenExpandModal(true);
    changeExpandModalState(st);
  };

  const handleCloseMainModal = () => {
    setIsOpenMainModal(false);
  };

  const handleCloseExpandModal = () => {
    setIsOpenExpandModal(false);
    setExpandModalState(null);
  };

  const handleClickBackdrop = () => {
    handleCloseMainModal();
    handleCloseExpandModal();
  };

  const changeExpandModalState = (st: T.ExpandModalStateType) => {
    setExpandModalState(st);
  };

  const changeSelectedModelNo = (models: string[]) => {
    setSelectedModelNo(models);
  };

  // 모달 header 아이콘
  const rankingIconSrc = chrome.runtime.getURL(rankingIconPath);
  const searchIconSrc = chrome.runtime.getURL(searchIconPath);

  // 현재 url 가져오기
  const currentUrl = window.location.href;

  // 냉장고 페이지에서 모든 리스트 선택, 디테일 페이지일시 요약정보 제공
  const fridgeList = useRef<NodeListOf<Element>>();
  const linkReviewNodeList = useRef<NodeListOf<HTMLLinkElement>>();
  const [isDetailPage, setIsDetailPage] = useState(false);
  const [modelNo, setModelNo] = useState("");

  useEffect(() => {
    if (currentUrl.includes("https://www.samsung.com/sec/refrigerators/all-refrigerators/")) {
      const moreBtn: HTMLButtonElement | null = document.querySelector("#morePrd");
      let newLiElements: NodeListOf<Element> = document.querySelectorAll(".item-inner");
      fridgeList.current = newLiElements;

      linkReviewNodeList.current = document.querySelectorAll(".link-review");

      moreBtn.addEventListener("click", () => {
        newLiElements = document.querySelectorAll(".item-inner");
        fridgeList.current = newLiElements;
      });
      setIsDetailPage(false);
    } else if (currentUrl.includes("https://www.samsung.com/sec/refrigerators/")) {
      setIsDetailPage(true);
      const url = currentUrl.split("/");
      setModelNo(url[url.length - 2]);
    } else {
      setIsDetailPage(false);
    }
  }, [currentUrl]);

  // 메시지 정보 담는 곳
  const [messages, setMessages] = useState<T.MessagesProps>([]);
  // 비교하기 아이콘 붙이기 + 클릭시 제품명, 코드 저장
  // 비교상품 정보 담는 곳
  const [comparePrds, setComparePrds] = useState<T.ComparePrdProps[]>([]);

  /*
  #===============================================================================#
  |                             비교하기 버튼 appendChild                            |
  #===============================================================================#
  */
  useEffect(() => {
    if (fridgeList.current && fridgeList.current.length > 0) {
      fridgeList.current.forEach((element: Element) => {
        const compareButton: HTMLButtonElement = document.createElement("button");
        compareButton.id = "ChatDAButton";

        const compareIcon: HTMLImageElement = document.createElement("img");
        compareIcon.id = "compareIcon";
        compareIcon.src = chrome.runtime.getURL(chatDAIconPath);
        compareIcon.width = 40;
        compareIcon.style.position = "absolute";
        compareIcon.style.right = "8%";
        compareIcon.style.top = "44%";
        compareIcon.style.zIndex = "1";
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
            const isDuplicate = prev.some((item) => item.modelNo === spanTags[1].textContent);
            if (isDuplicate) {
              return prev;
            } else {
              setMessages((prev2) => {
                return [
                  ...prev2,
                  {
                    text: `${spanTags[0].textContent}\n${spanTags[1].textContent}`,
                    isUser: true,
                    isTyping: true,
                    id: time,
                    isCompared: true,
                  },
                ];
              });
              return [
                ...prev,
                {
                  제품명: spanTags[0].textContent,
                  modelNo: spanTags[1].textContent,
                  id: time,
                },
              ];
            }
          });
        });
      });
    }
  }, [fridgeList]);

  /*
  #===============================================================================#
  |                               리뷰 요약 appendChild                             |
  #===============================================================================#
  */
  // 리뷰 요약 내용을 담을 state
  const [reviewSummary, setReviewSummary] = useState<string>("리뷰가 없거나 요약을 못했어요😭");
  const [currentModelNo, setCurrentModelNo] = useState<string>("");
  const modelNoList = useRef<string[]>([]);
  const reviewSummaryDict = useRef(new Map());

  useEffect(() => {
    const summary =
      reviewSummaryDict.current.get(currentModelNo) || "리뷰가 없거나 요약을 못했어요😭";
    setReviewSummary(summary);
  }, [currentModelNo]);

  useEffect(() => {
    if (modelNoList.current.length > 0) {
      modelNoList.current.forEach(async (modelNo) => {
        if (!reviewSummaryDict.current.has(modelNo)) {
          const { data } = await request.get(`/summary/review?modelNo=${modelNo}`);

          console.log("response!!!!!!!!!", data);
          reviewSummaryDict.current.set(modelNo, data.content);
        }
      });
    }
  }, [modelNoList.current.length]);

  useEffect(() => {
    if (linkReviewNodeList.current && linkReviewNodeList.current.length > 0) {
      linkReviewNodeList.current.forEach((linkReviewNode: HTMLLinkElement) => {
        const urlList = linkReviewNode.href.split("/");
        const modelNo = urlList[urlList.length - 2];
        modelNoList.current.push(modelNo);

        const reviewMessageDiv: HTMLDivElement = document.createElement("div");
        const reviewMessageTitle: HTMLSpanElement = document.createElement("span");
        const reviewMessageDetail: HTMLSpanElement = document.createElement("span");

        reviewMessageTitle.textContent = "💬ChatDA가 요약한 이 제품의 리뷰 내용!";
        reviewMessageTitle.style.color = "white";
        reviewMessageTitle.style.fontSize = "14px";
        reviewMessageTitle.style.fontWeight = "bold";

        if (!reviewMessageDiv.hasChildNodes()) {
          reviewMessageDiv.appendChild(reviewMessageTitle);
          reviewMessageDiv.appendChild(reviewMessageDetail);
        }

        reviewMessageDetail.textContent = "리뷰가 없거나 요약을 못했어요😭";
        reviewMessageDetail.style.color = "white";
        reviewMessageDetail.style.fontSize = "14px";

        reviewMessageDiv.style.width = "300px";
        reviewMessageDiv.style.position = "absolute";
        reviewMessageDiv.style.bottom = "110%";
        reviewMessageDiv.style.right = "10%";
        reviewMessageDiv.style.flexDirection = "column";
        reviewMessageDiv.style.padding = "8px 20px";
        reviewMessageDiv.style.gap = "10px";
        reviewMessageDiv.style.zIndex = "100";
        reviewMessageDiv.style.backgroundColor = `${theme.bordercolor}`;
        reviewMessageDiv.style.borderRadius = "17px 17px 0 17px";
        reviewMessageDiv.style.display = "none";
        reviewMessageDiv.style.textAlign = "left";

        console.log("linkreviewnode 자식 수 !!!", linkReviewNode.children.length);

        if (linkReviewNode.children.length <= 1) {
          linkReviewNode.appendChild(reviewMessageDiv);
        }

        linkReviewNode.addEventListener("mouseenter", () => {
          setCurrentModelNo(modelNo);
          reviewMessageDetail.textContent =
            reviewSummaryDict.current.get(modelNo) || "리뷰가 없거나 요약을 못했어요😭";
          reviewMessageDiv.style.display = "flex";
        });

        linkReviewNode.addEventListener("mouseleave", () => {
          reviewMessageDiv.style.display = "none";
        });
      });
    }
  }, [linkReviewNodeList, reviewSummary]);

  useEffect(() => {
    if (messages.length > 0) {
      sessionStorage.setItem("messages", JSON.stringify(messages));
    }
  }, [messages]);

  useEffect(() => {
    if (comparePrds.length > 0) {
      sessionStorage.setItem("comparePrds", JSON.stringify(comparePrds));
    }
  }, [comparePrds]);

  // useEffect(() => {
  //   const storage = JSON.parse(sessionStorage.getItem("messages") || "[]");
  //   const compare = JSON.parse(sessionStorage.getItem("comparePrds") || "[]");
  //   setMessages(storage);
  //   setMessages(compare);
  // }, []);\

  const queryClient = new QueryClient();

  function renderReactComponentElement(element: ReactElement) {
    // 외부 요소를 찾거나 생성
    const menuElement = document.getElementsByClassName("menu01")[0];
    let childElement = document.getElementById("summaryPlace");

    if (!childElement) {
      childElement = document.createElement("div");
      childElement.id = "summaryPlace";
      menuElement.appendChild(childElement);
    }

    // React Portal을 사용하여 외부 요소 안에 React 컴포넌트를 렌더링
    const root = createRoot(childElement);
    root.render(<QueryClientProvider client={queryClient}>{element}</QueryClientProvider>);
  }

  // 제품 요약 말풍선 생성
  const [isProductSummaryRendered, setIsProductSummaryRendered] = useState<boolean>(false);

  useEffect(() => {
    if (isDetailPage && !isProductSummaryRendered) {
      const productSummaryElement: ReactElement = <Comp.ProductSummary content={modelNo} />;
      renderReactComponentElement(productSummaryElement);
      setIsProductSummaryRendered(true);
    }
    // eslint-disable-next-line
  }, [isDetailPage, isProductSummaryRendered]);
  // useEffect(() => {
  //   console.log(expandModalState);
  // }, [expandModalState]);

  // useEffect(() => {
  //   console.log(selectedModelNo);
  // }, [selectedModelNo]);

  // home 메시지
  useEffect(() => {
    if (sessionStorage.getItem("messages") === null) {
      sessionStorage.setItem(
        "messages",
        JSON.stringify([
          {
            type: "home",
            content:
              "안녕하세요 고객님\n저는 ChatDA에요!\n고객님의 궁금증을 친절히 설명해드릴게요!",
            isUser: false,
            isTyping: false,
            isCompared: false,
            id: 0,
          },
        ]),
      );
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      {/* mui component를 사용하는 경우 아래와 같이 StyledEngineProvider를 반드시 사용해야 합니다!*/}
      <StyledEngineProvider injectFirst>
        <S.ChatExpandModal
          open={isOpenExpandModal}
          onClose={handleCloseExpandModal}
          disableScrollLock={true}
        >
          <S.CloseBtn onClick={handleCloseExpandModal}>
            <CloseIcon />
          </S.CloseBtn>
          {expandModalState === "popular" ? (
            <P.PopularItemPage />
          ) : expandModalState === "info" ? (
            <P.DetailSpecPage selectedModelNo={selectedModelNo} />
          ) : expandModalState === "compare" ? (
            <P.CompareSpecPage selectedModelNo={selectedModelNo} />
          ) : (
            expandModalState === "search" && <P.SearchPage />
          )}
        </S.ChatExpandModal>

        <S.ChatMainModal
          open={isOpenMainModal}
          onClose={handleCloseMainModal}
          disableScrollLock={true}
        >
          <S.ChatMainWrapper>
            <S.ChatMainHeader>
              <S.HeaderWords>
                <p>
                  상품 <b>비교</b>, 상세 정보 <b>설명</b>, <b>추천</b>까지!
                </p>
                <p>삼성의 가전제품들을</p>
                <p>이해하기 쉽게 알려드립니다 😊</p>
              </S.HeaderWords>
              <S.IconWrapper onClick={() => handleOpenExpandModal("popular")}>
                <img src={rankingIconSrc} alt="ranking-icon" width={35} height={35} />
                <span>인기순위</span>
              </S.IconWrapper>
              <S.IconWrapper onClick={() => handleOpenExpandModal("search")}>
                <img src={searchIconSrc} alt="search-icon" width={35} height={35} />
                <span>조건검색</span>
              </S.IconWrapper>
            </S.ChatMainHeader>

            <S.ChatMainContent>
              <Comp.ChatbotMain
                props={comparePrds}
                setComparePrds={setComparePrds}
                messages={messages}
                setMessages={setMessages}
                handleOpenExpandModal={handleOpenExpandModal}
                changeSelectedModelNo={changeSelectedModelNo}
              />
            </S.ChatMainContent>
          </S.ChatMainWrapper>
        </S.ChatMainModal>
        {/* 요약정보 말풍선 */}
      </StyledEngineProvider>
      <S.ChatModalBackdrop
        className="backdrop"
        onClick={handleClickBackdrop}
        open={isOpenMainModal}
        expandOpen={isOpenExpandModal}
      />
    </QueryClientProvider>
  );
}

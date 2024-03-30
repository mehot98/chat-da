import { useState, FocusEvent } from "react";
import * as Comp from "@src/components";
import * as S from "./style";
import * as T from "@src/types";
import { request } from "@src/apis/requestBuilder";
import SearchIcon from "@mui/icons-material/Search";
import searchInfoPath from "@assets/img/search_info.png";
import noSearchResultPath from "@assets/img/no_search_result.png";

export default function SearchPage() {
  const searchInfoSrc = chrome.runtime.getURL(searchInfoPath);
  const noSearchResultSrc = chrome.runtime.getURL(noSearchResultPath);

  const [isSearched, setIsSearched] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [inputContent, setInputContent] = useState<string>("");
  const [focused, setFocused] = useState<boolean>(false);
  const [siProps, setSiProps] = useState<T.SearchItemProps[]>([]);

  const getUuid = () => {
    const sessionId = window.sessionStorage.getItem("_da_da_sessionId");
    const tabHash = window.sessionStorage.getItem("di_tab_hash");
    return `${sessionId}_${tabHash}`;
  };

  const handleSubmit = async (event: React.MouseEvent | React.KeyboardEvent<HTMLInputElement>) => {
    event.preventDefault();

    if (inputContent) {
      setIsLoading(true);
      setIsSearched(true);
      const { data } = await request
        .post("/chat/search", {
          uuid: getUuid(),
          content: inputContent,
        })
        .catch((err) => {
          console.log(err);
          setIsLoading(false);
        });
      setSiProps(data.modelList);
      setIsLoading(false);
    }
  };

  const handleEnterSubmit = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSubmit(event);
    }
  };

  const handleFocus = (e: FocusEvent<HTMLInputElement, Element>) => {
    e.stopPropagation();
    setFocused(true);
  };

  return (
    <>
      <S.ModalHeaderWrapper>
        <S.ModalHeaderSpan>ChatDA 검색</S.ModalHeaderSpan>
        <S.ModalHeaderSubSpan>ChatDA에서 원하는 조건의 제품을 검색해보세요!</S.ModalHeaderSubSpan>

        {/* 검색창 */}
        <S.SearchInputWrapper>
          <S.InputPlaceholder isEmpty={!inputContent} isFocused={focused}>
            <span>용량이 600L이상 되는 냉장고를 가격이 낮은 순으로 알려줘</span>
          </S.InputPlaceholder>
          <S.ModalHeaderSearchInput
            value={inputContent}
            onChange={(event) => setInputContent(event.target.value)}
            onKeyDown={handleEnterSubmit}
            className="message-input"
            onFocus={handleFocus}
            onBlur={() => setFocused(false)}
          />
          <S.SearchIconButton onClick={handleSubmit}>
            <SearchIcon />
          </S.SearchIconButton>
        </S.SearchInputWrapper>

        <S.ModalSearchItemWrapper>
          {!isSearched ? (
            <S.ImgWrapper>
              <img src={searchInfoSrc} alt="search-info" width={300} />
            </S.ImgWrapper>
          ) : isLoading ? (
            <S.LoadingCard />
          ) : siProps.length > 0 ? (
            siProps.map((searchItemProps: T.SearchItemProps, i: number) => (
              <Comp.SearchItem {...searchItemProps} key={i} />
            ))
          ) : (
            <S.ImgWrapper>
              <img src={noSearchResultSrc} alt="no-search-result" width={300} />
              <S.ImgSpan>검색 결과가 없어요ㅠ</S.ImgSpan>
            </S.ImgWrapper>
          )}
        </S.ModalSearchItemWrapper>
      </S.ModalHeaderWrapper>
    </>
  );
}

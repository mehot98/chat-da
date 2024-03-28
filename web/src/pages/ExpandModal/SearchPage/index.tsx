import * as Comp from "@root/src/components";
import * as S from "./style";
import * as T from "@root/src/types";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchPage() {
  const PIProps: T.SearchItemProps[] = [
    {
      제품_코드: "RH62A504EB4",
      제품명: "양문형 냉장고 644 L",
      평점: "0.0 / 5.0",
      리뷰_개수: 0,
      가격: null,
      혜택가: null,
      소비효율등급: "2등급",
      가로: "912 mm",
      높이: "1780 mm",
      깊이: "740 mm",
      전체_용량: "644 L",
      냉장실_용량: "408 L",
      냉동실_용량: "236 L",
      맞춤보관실_용량: null,
      smartThings: "미지원",
      imageUrl:
        "//images.samsung.com/kdp/goods/2024/02/05/d37b0003-3f76-45f9-9d7d-56139cda7b57.png",
    },
    {
      제품_코드: "RF85C9481AP",
      제품명: "BESPOKE 냉장고 4도어 846 L (빅아이스/위스키볼, 이온살균)",
      평점: "4.5 / 5.0",
      리뷰_개수: 24,
      가격: null,
      혜택가: null,
      소비효율등급: "1등급",
      가로: "912 mm",
      높이: "1853 mm",
      깊이: "930 mm",
      전체_용량: "846 L",
      냉장실_용량: "503 L",
      냉동실_용량: "167 L",
      맞춤보관실_용량: "176 L",
      smartThings: "미지원",
      imageUrl:
        "//images.samsung.com/kdp/goods/2023/09/19/b54dd92d-4c0d-4519-96e2-9fbff733b14c.png",
    },
    {
      제품_코드: "RF85DB9792AP",
      제품명:
        "BESPOKE 정수기 냉장고 4도어 830 L (오토 듀얼 아이스/위스키볼&큐브, 정수디스펜서&오토필, 이온살균)",
      평점: "0.0 / 5.0",
      리뷰_개수: 0,
      가격: "4905000 원",
      혜택가: null,
      소비효율등급: "2등급",
      가로: "912 mm",
      높이: "1853 mm",
      깊이: "930 mm",
      전체_용량: "830 L",
      냉장실_용량: "492 L",
      냉동실_용량: "162 L",
      맞춤보관실_용량: "176 L",
      smartThings: "미지원",
      imageUrl:
        "//images.samsung.com/kdp/goods/2024/02/19/8f160228-2fec-42d6-8b6a-02e2e332fe38.png",
    },
  ];

  return (
    <>
      <S.ModalHeaderWrapper>
        <S.ModalHeaderSpan>ChatDA 검색</S.ModalHeaderSpan>
        <S.ModalHeaderSubSpan>ChatDA에서 원하는 조건의 제품을 검색해보세요!</S.ModalHeaderSubSpan>

        {/* 검색창 */}
        <S.SearchInputWrapper>
          <S.ModalHeaderSearchInput />
          <S.SearchIconButton>
            <SearchIcon />
          </S.SearchIconButton>
        </S.SearchInputWrapper>

        <S.ModalSearchItemWrapper>
          {PIProps.map((searchItemProps: T.SearchItemProps, i: number) => (
            <Comp.SearchItem {...searchItemProps} key={i} />
          ))}
        </S.ModalSearchItemWrapper>
      </S.ModalHeaderWrapper>
    </>
  );
}

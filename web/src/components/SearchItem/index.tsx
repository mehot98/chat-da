import * as S from "./style";
import * as T from "@src/types";
import * as Comp from "@src/components";
import makeNumberWithCommas from "@src/utils/makeNumberWithCommas";

export default function SearchItem(props: T.SearchItemProps) {
  console.log(props);
  return (
    <S.SearchItemWrapper>
      <S.LeftImg src={props.imageUrl} alt={props.제품명} />

      <S.RightDiv>
        <S.RightDivInnerCol>
          <S.ItemTitleSpan>{props.제품명}</S.ItemTitleSpan>
          <S.ItemCodeSpan>{props.제품_코드}</S.ItemCodeSpan>
        </S.RightDivInnerCol>

        <S.RightDivInnerRow>
          <S.ItemStarWrapper>
            <Comp.StartRate props={props.평점.slice(0, 3)} />
            <S.ItemStarSpan>{props.평점.slice(0, 3)}</S.ItemStarSpan>
            <S.ItemCodeSpan>{`(${props.리뷰_개수}건)`}</S.ItemCodeSpan>
          </S.ItemStarWrapper>

          {props.혜택가 ? (
            <S.ItemStarWrapper>
              <S.ItemCodeSpan>혜택가</S.ItemCodeSpan>
              <S.ItemCostSpan>{makeNumberWithCommas(props.혜택가)}</S.ItemCostSpan>
            </S.ItemStarWrapper>
          ) : (
            props.가격 && (
              <S.ItemStarWrapper>
                <S.ItemCodeSpan>가격</S.ItemCodeSpan>
                <S.ItemCostSpan>{makeNumberWithCommas(props.가격)}</S.ItemCostSpan>
              </S.ItemStarWrapper>
            )
          )}
        </S.RightDivInnerRow>
      </S.RightDiv>
    </S.SearchItemWrapper>
  );
}

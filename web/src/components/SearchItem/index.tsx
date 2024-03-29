import * as S from "./style";
import * as T from "@src/types";
import * as Comp from "@src/components";
import makeNumberWithCommas from "@src/utils/makeNumberWithCommas";

export default function SearchItem(props: T.SearchItemProps) {
  console.log(props);
  return (
    <S.SearchItemWrapper>
      <S.LeftDiv>
        <S.LeftImg src={props.imageUrl} alt={props.제품명} />
      </S.LeftDiv>

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

        <S.RightDivInnerCol>
          <span>에너지 효율 : {props.소비효율등급 ? props.소비효율등급 : "정보 없음"}</span>
          <div>
            <span>가로 : {props.가로 ? props.가로 : "정보 없음"} | </span>
            <span>높이 : {props.높이 ? props.높이 : "정보 없음"} | </span>
            <span>깊이 : {props.깊이 ? props.깊이 : "정보 없음"}</span>
          </div>
          <div>
            <span>용량 : {props.전체_용량 ? props.전체_용량 : "정보 없음"}</span>
            {props.냉장실_용량 && <span> | 냉장실 : {props.냉장실_용량}</span>}
            {props.냉동실_용량 && <span> | 냉동실 : {props.냉동실_용량}</span>}
            {props.맞춤보관실_용량 && <span> | 맞춤보관실 : {props.맞춤보관실_용량}</span>}
          </div>
          <span>SmartThings 모바일 앱 지원 : {props.smartThings}</span>
        </S.RightDivInnerCol>
      </S.RightDiv>
    </S.SearchItemWrapper>
  );
}

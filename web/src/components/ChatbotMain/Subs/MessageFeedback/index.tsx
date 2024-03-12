import * as S from "./style";

export default function MessageFeedback(props: { isRecommend: boolean }) {
  return (
    <S.BtnWrapper>
      {props.isRecommend ? (
        <>
          <span>이 제품이...</span>
          <S.LikeBtn>좋아요👍</S.LikeBtn>
        </>
      ) : (
        <>
          <span>이 답변이...</span>
          <S.LikeBtn>도움돼요👍</S.LikeBtn>
        </>
      )}
      <S.UnlikeBtn>아쉬워요😥</S.UnlikeBtn>
    </S.BtnWrapper>
  );
}

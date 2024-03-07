import * as S from "./style";

export default function MessageFeedback() {
  return (
    <S.BtnWrapper>
      <span>이 답변이...</span>
      <S.LikeBtn>도움돼요👍</S.LikeBtn>
      <S.UnlikeBtn>아쉬워요😥</S.UnlikeBtn>
    </S.BtnWrapper>
  );
}

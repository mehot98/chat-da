import * as S from "./style";

export default function SpecList({ rawSpec }) {
  return (
    <S.SpecListWrapper>
      {Object.keys(rawSpec).map((key) => (
        <>
          <S.SpecTitle>{key}</S.SpecTitle>
          <S.SpecDetail>{rawSpec[key]}</S.SpecDetail>
        </>
      ))}
    </S.SpecListWrapper>
  );
}

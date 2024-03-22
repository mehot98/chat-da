import * as S from "./style";

// eslint-disable-next-line
export default function SpecList({ rawSpec }: { rawSpec: any }) {
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

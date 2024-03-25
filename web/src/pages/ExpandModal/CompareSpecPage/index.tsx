import * as Comp from "@root/src/components";
import * as S from "./style";

export default function CompareSpecPage({ selectedModelNo }: { selectedModelNo: string[] }) {
  return (
    <>
      <S.ModalHeaderWrapper>
        <S.ModalHeaderSpan>자세히 비교하기</S.ModalHeaderSpan>
        <S.SpecDetailColumnWrapper>
          {selectedModelNo.map((no: string, i: number) => (
            <>
              <Comp.SpecDetailColumn key={no} selectedModelNo={no} />
              {i !== selectedModelNo.length - 1 && <S.VerticalLine />}
            </>
          ))}
        </S.SpecDetailColumnWrapper>
      </S.ModalHeaderWrapper>
    </>
  );
}

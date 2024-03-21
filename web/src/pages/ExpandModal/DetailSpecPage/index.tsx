import * as Comp from "@root/src/components";
import * as S from "./style";
import * as T from "@root/src/types";

export default function DetailSpecPage({ selectedModelNo }: { selectedModelNo: string[] }) {
  return (
    <>
      <S.ModalHeaderWrapper>
        <S.ModalHeaderSpan>상세 스펙 보기</S.ModalHeaderSpan>
        <Comp.SpecDetailColumn selectedModelNo={selectedModelNo} />
      </S.ModalHeaderWrapper>
    </>
  );
}

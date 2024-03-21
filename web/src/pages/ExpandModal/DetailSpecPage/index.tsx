import * as Comp from "@root/src/components";
import * as S from "./style";
import * as T from "@root/src/types";
import specIconPath from "@assets/img/SpecIcon";

export default function DetailSpecPage() {
  return (
    <>
      <S.ModalHeaderWrapper>
        <S.ModalHeaderSpan>상세 스펙 보기</S.ModalHeaderSpan>
        <img src={specIconPath.sizePath} alt="size" />
      </S.ModalHeaderWrapper>
    </>
  );
}

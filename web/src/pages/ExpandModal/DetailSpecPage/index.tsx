import { useEffect, useState } from "react";
import { request } from "@src/apis/requestBuilder";
import * as Comp from "@root/src/components";
import * as S from "./style";
import * as T from "@src/types/index";

export default function DetailSpecPage({ selectedModelNo }: { selectedModelNo: string[] }) {
  const [recommendProps, setRecommendProps] = useState<T.ChatbotRecommendCardProps>({
    제품_코드: "",
    제품명: "",
    imageUrl: "",
  });
  const [summarySpec, setSummarySpec] = useState<T.SummarySpecType>({});
  const [sizeSpec, setSizeSpec] = useState<T.SummarySpecType>({});
  const [rawSpec, setRawSpec] = useState({});

  const getData = async (modelNo: string) => {
    const res = await request.get(`/model?modelNo=${modelNo}`);
    const { data } = res;
    setDatas(data);
  };

  const setDatas = (data) => {
    setRecommendProps({
      제품_코드: data["제품_코드"],
      제품명: data["제품명"],
      가격: data["가격"],
      // 혜택가: data["혜택가"],
      혜택가: "1,490,000원",
      imageUrl: data["imageUrl"],
    });
    setSummarySpec({
      가로: data["가로"],
      높이: data["높이"],
      깊이: data["깊이"],
      제품_타입: data["제품_타입"],
      설치_타입: data["raw"]["설치 타입"],
      소비효율등급: data["소비효율등급"],
      오토_오픈_도어: data["raw"]["오토 오픈 도어"],
      투명_도어: data["raw"]["투명 도어"],
      베버리지_센터: data["raw"]["베버리지 센터"],
      푸드_쇼케이스: data["raw"]["푸드 쇼케이스"],
      얼음_종류: data["raw"]["얼음 종류"],
      제빙기: data["raw"]["제빙기"],
      탈취기: data["raw"]["탈취기"],
      쿨링커버: data["raw"]["쿨링커버"],
      SmartThings_모바일_앱_지원: data["raw"]["SmartThings 모바일 앱 지원"],
    });
    setSizeSpec({
      가로: data.가로,
      높이: data.높이,
      깊이: data.깊이,
      제품_타입: data.제품_타입,
      설치_타입: data.설치_타입,
    });
    setRawSpec(data.raw);
  };

  useEffect(() => {
    getData(selectedModelNo[0]);
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <S.ModalHeaderWrapper>
        <S.ModalHeaderSpan>상세 스펙 보기</S.ModalHeaderSpan>
        <Comp.SpecDetailColumn
          isCompare={false}
          recommendProps={recommendProps}
          sizeSpec={sizeSpec}
          summarySpec={summarySpec}
          rawSpec={rawSpec}
        />
      </S.ModalHeaderWrapper>
    </>
  );
}

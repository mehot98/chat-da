import * as Comp from "@root/src/components";
import * as S from "./style";
import * as T from "@root/src/types";
import * as API from "@src/apis";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

export default function PopularItemPage() {
  const queryKey = ["ranking-list"];
  const { data: response } = useQuery({
    queryKey: queryKey,
    queryFn: () => API.popularItem.getPopularList(),
  });

  useEffect(() => {
    console.log(response);
  }, [response]);

  const PIProps: T.PopularItemProps[] = response?.data.modelList;
  // const PIProps: T.PopularItemProps[] = [
  //   {
  //     제품명: "BESPOKE 냉장고 4도어 875 L",
  //     제품_코드: "RF85C900F01",
  //     혜택가: "2,000,000",
  //     imageUrl: "string",
  //     reviewCount: "342",
  //     reviewSummary: "정말 감동적인 상품이에요",
  //     rating: "4.5",
  //   },
  //   {
  //     제품명: "BESPOKE 냉장고 4도어 699 L",
  //     제품_코드: "RF85C900F01",
  //     혜택가: "1,999,998",
  //     imageUrl: "string",
  //     reviewCount: "342",
  //     reviewSummary: "전체적으로 평이 좋다",
  //     rating: "4.8",
  //   },
  //   {
  //     제품명: "BESPOKE 냉장고 2332도어",
  //     제품_코드: "RF85C900F01",
  //     혜택가: "2,000,000",
  //     imageUrl: "string",
  //     reviewCount: "342",
  //     reviewSummary: "정말 감동적인 상품이에요",
  //     rating: "5.0",
  //   },
  // ];

  return (
    <>
      <S.ModalHeaderWrapper>
        <S.ModalHeaderSpan>ChatDA 인기순위</S.ModalHeaderSpan>
        <S.ModalHeaderSubSpan>ChatDA에서 많이 검색한 상품을 알려드릴게요!</S.ModalHeaderSubSpan>
      </S.ModalHeaderWrapper>
      <S.ModalPopularItemWrapper>
        {PIProps &&
          PIProps.map((popularItemProps: T.PopularItemProps, index: number) => {
            return <Comp.PopularItem {...popularItemProps} rank={index} key={index} />;
          })}
      </S.ModalPopularItemWrapper>
    </>
  );
}

export interface SummarySpecType {
  가로?: string;
  높이?: string;
  깊이?: string;
  제품_타입?: string;
  설치_타입?: string;
  소비효율등급?: string;
  오토_오픈_도어?: string;
  투명_도어?: string;
  베버리지_센터?: string;
  푸드_쇼케이스?: string;
  얼음_종류?: string;
  제빙기?: string;
  탈취기?: string;
  쿨링커버?: string;
  SmartThings_모바일_앱_지원?: string;
}

export interface ResDataType {
  제품_코드?: string;
  제품명?: string;
  가로?: string | null;
  높이?: string | null;
  깊이?: string | null;
  제품_타입?: string | null;
  무게?: string | null;
  전체_용량?: string | null;
  냉장실_용량?: string | null;
  냉동실_용량?: string | null;
  맞춤보관실_용량?: string | null;
  소비효율등급?: string | null;
  소비_전력?: string | null;
  가격?: string | null;
  리뷰_요약?: string | null;
  리뷰_개수?: string | number | null;
  평점?: string | null;
  정보_요약?: string | null;
  imageUrl?: string | null;
  raw?: object | null;
}

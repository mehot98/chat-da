import * as S from "./style";

export default function ChatbotHomeMessage() {
  const fridgeIconSrc = chrome.runtime.getURL("icons/fridge.png");
  const scaleIconSrc = chrome.runtime.getURL("icons/scale.png");
  const thumbUpIconSrc = chrome.runtime.getURL("icons/thumb_up.png");
  return (
    <S.HomeMessageWrapper>
      <S.HomeCardWrapper className="fridge">
        <S.HomeCard>
          <span>BESPOKE 냉장고 4도어 870 L의 정보를 알려줘</span>
          <img src={fridgeIconSrc} alt="fridge" width={53} height={53} />
        </S.HomeCard>
        <S.HomeCard className="scale">
          <span>RF84C906B4와 RF85C90F1AP 의 차이점이 뭐야?</span>
          <img src={scaleIconSrc} alt="scale" width={53} height={53} />
        </S.HomeCard>
        <S.HomeCard className="thumbup">
          <span>150만원이내의 큰 냉장고를 찾고 있는데추천 해줄 수 있어?</span>
          <img src={thumbUpIconSrc} alt="thumb-up" width={53} height={53} />
        </S.HomeCard>
      </S.HomeCardWrapper>

      <S.HomeAdviceWrapper>
        <S.HomeAdviceDiv>
          <S.IconWrapper>
            <span>🤔</span>
          </S.IconWrapper>
          <S.TextWrapper>
            <S.UpperSpan>제품에 관련한 질문을 해보세요</S.UpperSpan>
            <S.LowerSpan>
              A제품에 대해 알려줘, A와 B 제품의 차이가 뭐야? 와 같은 질문을 해보세요
            </S.LowerSpan>
          </S.TextWrapper>
        </S.HomeAdviceDiv>
        <S.HomeAdviceDiv>
          <S.IconWrapper>
            <span>🔎</span>
          </S.IconWrapper>
          <S.TextWrapper>
            <S.UpperSpan>원하는 조건에 맞는 냉장고를 찾아봐요</S.UpperSpan>
            <S.LowerSpan>150만원 정도에서 냉장고를 찾고 있는데 추천해줄래?</S.LowerSpan>
          </S.TextWrapper>
        </S.HomeAdviceDiv>
      </S.HomeAdviceWrapper>
    </S.HomeMessageWrapper>
  );
}

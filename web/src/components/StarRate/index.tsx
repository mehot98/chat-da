import { useEffect, useState } from "react";
import * as S from "./style";

export default function StartRate({ props }: { props: string }) {
  const rate = parseFloat(props);
  const starIdxArr = ["first", "secoond", "third", "fourth", "last"];
  const [starRateArr, setStarRateArr] = useState<number[]>([0, 0, 0, 0, 0]);
  const calcStarRates = () => {
    let tempStarRatesArr = [0, 0, 0, 0, 0];
    let starVerScore = (rate * 90) / 5;
    let idx = 0;
    while (starVerScore > 18) {
      tempStarRatesArr[idx] = 18;
      idx += 1;
      starVerScore -= 18;
    }
    tempStarRatesArr[idx] = starVerScore;
    return tempStarRatesArr;
  };
  useEffect(() => {
    setStarRateArr(calcStarRates);
  }, []);

  useEffect(() => {
    console.log(starRateArr);
  }, [starRateArr]);

  return (
    <>
      <S.StarRateWrap>
        {starIdxArr.map((item, idx) => {
          return (
            <span className="star_icon" key={`${item}_${idx}`}>
              <svg
                width="18"
                height="16"
                viewBox="0 0 18 16"
                fill="white"
                stroke="#FFA800"
                xmlns="http://www.w3.org/2000/svg"
              >
                <clipPath id={`${item}StarClip_${props}`}>
                  <rect width={`${starRateArr[idx]}`} height="16" />
                </clipPath>
                <path
                  id={`${item}Star`}
                  d="M8.52447 1.46353C8.67415 1.00287 9.32585 1.00287 9.47553 1.46353L10.9084 5.87336C10.9753 6.07937 11.1673 6.21885 11.3839 6.21885H16.0207C16.505 6.21885 16.7064 6.83866 16.3146 7.12336L12.5633 9.84878C12.3881 9.9761 12.3148 10.2018 12.3817 10.4078L13.8145 14.8176C13.9642 15.2783 13.437 15.6613 13.0451 15.3766L9.29389 12.6512C9.11865 12.5239 8.88135 12.5239 8.70611 12.6512L4.95488 15.3766C4.56303 15.6613 4.03578 15.2783 4.18546 14.8176L5.6183 10.4078C5.68524 10.2018 5.61191 9.9761 5.43667 9.84878L1.68544 7.12336C1.29358 6.83866 1.49497 6.21885 1.97933 6.21885H6.6161C6.83272 6.21885 7.02469 6.07937 7.09163 5.87336L8.52447 1.46353Z"
                />
                <use
                  clipPath={`url(#${item}StarClip_${props})`}
                  href={`#${item}Star`}
                  fill="#FFA800"
                />
              </svg>
            </span>
          );
        })}
      </S.StarRateWrap>
    </>
  );
}

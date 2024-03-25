import styled from "@emotion/styled";
import theme from "@assets/style/theme.module.scss";

interface SummaryContentHeightProps {
  summaryContentHeight: number;
}

/* left: ${(props) => props.count * -200 - 95}px; */
export const ReviewSummaryWrapper = styled.div<SummaryContentHeightProps>`
  position: absolute;
  /* top: -38vh; */
  bottom: ${(props) => props.summaryContentHeight - 100}px;
  left: -390px;
  z-index: 999;

  opacity: 1;
  transition: opacity 9s ease-in-out;

  &.fade-out {
    opacity: 0;
  }

  &:hover {
    opacity: 1;
    transition: none;
  }

  &.hidden {
    display: none;
  }
`;
export const ReviewSummaryDiv = styled.div`
  position: relative;
  display: flex;
`;

export const ReviewSummaryHeader = styled.div`
  position: absolute;
  top: -30px;
  right: 66.5px;
  z-index: 999;
  width: fit-content;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  padding: 15px 30px;
  border: 5px solid ${theme.bordercolor};
  border-radius: 40px;

  span {
    color: ${theme.bordercolor};
    font-size: 20px;
    font-weight: bold;
  }
`;
export const ReviewSummaryContent = styled.div`
  position: relative;
  width: 360px;
  height: fit-content;
  text-align: start;
  padding: 52px 40px 25px 40px;
  border-radius: 17px;
  background-color: ${theme.bordercolor};
  /* transform: translate(-50%, -50%); */

  color: white;

  span {
    font-size: 14px;
    &.impact {
      font-size: 15px;
      color: #fffd8c;
      font-weight: bold;
    }
  }
`;

export const Triangle = styled.div`
  position: absolute;
  top: 70%;
  right: -15px;
  border-left: 15px solid transparent;
  border-right: 15px solid transparent;
  border-bottom: 26px solid ${theme.bordercolor};
  transform: rotate(-30deg);
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const InfoHeaderWrapper = styled.div`
  width: 200px;
  height: fit-content;
  display: flex;
  span {
    font-size: 21px;
    font-weight: bold;
    color: white;
    /* color: ${theme.bordercolor}; */
  }
`;
export const InfoContentWrapper = styled.div`
  width: 200px;
  height: fit-content;
  display: flex;
  text-align: start;
  span {
    color: #ececec;
    font-size: 12px;
    font-weight: 400;
  }
`;

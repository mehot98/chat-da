import styled from "@emotion/styled";
import theme from "@assets/style/theme.module.scss";

interface SummaryContentCount {
  count: number;
}

export const ReviewSummaryWrapper = styled.div<SummaryContentCount>`
  position: absolute;
  top: -400px;
  /* left: ${(props) => props.count * -200 - 95}px; */
  left: -800px;
  z-index: 999;
`;
export const ReviewSummaryDiv = styled.div`
  position: relative;
  display: flex;
`;

export const ReviewSummaryHeader = styled.div`
  position: absolute;
  top: -35px;
  right: 27px;
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
  width: fit-content;
  height: fit-content;
  text-align: start;
  padding: 20px 30px;
  border-radius: 17px 0 17px 17px;
  background-color: ${theme.bordercolor};
  /* border: 7px solid ${theme.bordercolor}; */
  /* background-color: white; */

  span.impact {
    color: red;
  }
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

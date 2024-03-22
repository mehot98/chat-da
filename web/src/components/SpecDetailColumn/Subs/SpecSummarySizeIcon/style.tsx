import styled from "@emotion/styled";

export const SpecSummaryIconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const SpecSummaryIconImg = styled.img`
  position: absolute;
  right: 14px;
  bottom: 5px;
  max-width: 145px;
  max-height: 140px;
`;

export const SpecSummaryIconTitle = styled.span`
  font-size: 16px;
  font-weight: bold;
`;

export const SpecSummaryIconDescription = styled.span`
  font-size: 13px;
`;

export const SpecSummaryIconImgWrapper = styled.div`
  position: relative;
  width: 133px;
  height: 152px;
`;

const sizeSpan = styled.span`
  position: absolute;
  font-size: 12px;
`;

export const widthSpan = styled(sizeSpan)`
  top: 0px;
  left: 56px;
`;

export const heightSpan = styled(sizeSpan)`
  color: #3a6da9;
  top: 77px;
  left: 1px;
`;

export const depthSpan = styled(sizeSpan)`
  color: #3a6da9;
  top: 5px;
  left: 107px;
`;

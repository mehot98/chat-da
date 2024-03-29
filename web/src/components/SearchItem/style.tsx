import styled from "@emotion/styled";
import theme from "@assets/style/theme.module.scss";

export const SearchItemWrapper = styled.div`
  display: flex;
  width: 585px;
  gap: 30px;
  justify-content: center;
  align-items: center;
  padding: 6px 15px 6px 25px;
  border-radius: 30px;
  box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.25);
`;

export const LeftImg = styled.img`
  width: 120px;
  height: 160px;
  object-fit: cover;
`;

export const LeftDiv = styled.div`
  margin: 20px 0;
`;

export const RightDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 355px;
  margin: 20px 25px 20px 0px;
`;

export const RightDivInnerCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const RightDivInnerRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ItemTitleSpan = styled.span`
  font-size: 18px;
  font-weight: bold;
`;

export const ItemCodeSpan = styled.span`
  font-size: 15px;
  color: #767676;
`;

export const ItemStarWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const ItemStarSpan = styled.span`
  font-size: 15px;
  font-weight: bold;
`;

export const ItemCostSpan = styled(ItemTitleSpan)`
  color: ${theme.bordercolor};
`;

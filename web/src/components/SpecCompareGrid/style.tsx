import styled from "@emotion/styled";
import Grid from "@mui/material/Unstable_Grid2";

export const GridWrapper = styled(Grid)`
  margin: 20px 0;
`;

export const GridRow = styled(Grid)`
  display: flex;
  gap: 20px;
`;

export const VerticalLine = styled.div`
  width: 1px;
  height: 100%;
  background-color: #e0e0e0;
`;

export const SpecListHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const SpecListHeaderTitle = styled.span`
  font-size: 20px;
  font-weight: bold;
`;

export const SpecWrapper = styled.div`
  width: 100%;
`;

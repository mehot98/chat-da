import styled from "@emotion/styled";
// eslint-disable-next-line
import Grid, { Grid2Props } from "@mui/material/Unstable_Grid2";
import { ElementType } from "react";

interface WrapperType {
  length: number;
}

const Grid2 = <C extends ElementType>(props: Grid2Props<C, { component?: C }> & WrapperType) => {
  return <Grid {...props}>{props.children}</Grid>;
};

export const GridWrapper = styled(Grid2)`
  margin: 20px 0;
  width: ${(props) => {
    return props.length * 276 + (props.length - 1) * 40;
  }}px;
`;

export const GridRow = styled(Grid)`
  display: flex;
  gap: 20px;
`;

export const VerticalLine = styled.div`
  width: 1px;
  height: 180%;
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

export const EmptyWrapper = styled(SpecWrapper)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

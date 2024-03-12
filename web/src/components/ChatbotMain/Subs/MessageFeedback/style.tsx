import styled from "@emotion/styled";
import theme from "@assets/style/theme.module.scss";
import { Button } from "@mui/material";

export const BtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

export const Btn = styled(Button)`
  border-radius: 100px;
  font-size: 10px;

  &:focus {
    outline: none;
  }
`;

export const LikeBtn = styled(Btn)`
  color: ${theme.likebtncolor};
  border: 1px solid ${theme.likebtncolor};
`;

export const UnlikeBtn = styled(Btn)`
  color: ${theme.unlikebtncolor};
  border: 1px solid ${theme.unlikebtncolor};
`;

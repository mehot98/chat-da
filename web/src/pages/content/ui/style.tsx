import styled from "@emotion/styled";
import theme from "@assets/style/theme.module.scss";
import { Dialog } from "@mui/material";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 100px;
  left: 300px;
  width: 374px;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  z-index: 999;
`;

export const ModalContentWrapper = styled.div`
  /* position: relative; */
  /* padding: 20px; */
`;

export const ModalContent = styled.div`
  /* position: absolute; */
  background-color: white;
`;

export const CloseButton = styled.button`
  /* top: 10px;
  right: 10px; */
`;

export const ChatMainModal = styled(Dialog)`
  position: fixed;

  & .MuiBackdrop-root {
    background-color: transparent;
  }

  & .MuiDialog-paper {
    width: 373px;
    height: 748px;
    position: fixed;
    right: 80px;
    border: 1px solid ${theme.bordercolor};
    border-radius: 15px;
  }
`;

export const ChatExpandModal = styled(ChatMainModal)`
  z-index: 1299;

  & .MuiDialog-paper {
    width: 1014px;
    height: 748px;
  }
`;

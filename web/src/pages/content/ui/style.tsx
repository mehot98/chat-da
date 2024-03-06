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
  width: 0;
  height: 100vh;

  & .MuiBackdrop-root {
    display: none;
  }

  & .MuiDialog-paper {
    max-width: none;
    max-height: none;
    width: 350px;
    height: 600px;
    position: fixed;
    right: 120px;
    border: 2px solid ${theme.bordercolor};
    border-radius: 15px;
    margin: 0;
    z-index: 1300;
  }
`;

export const ChatExpandModal = styled(ChatMainModal)`
  z-index: 1299;

  & .MuiDialog-paper {
    width: 1014px;
    z-index: 1299;
  }
`;

export const ChatModalBackdrop = styled.div<{ open: boolean }>`
  ${(props) => (props.open ? "position: fixed" : "display: none")};
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1200;
`;

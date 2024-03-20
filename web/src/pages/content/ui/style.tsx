import styled from "@emotion/styled";
import theme from "@assets/style/theme.module.scss";
import { Dialog, IconButton } from "@mui/material";

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
  padding-right: 330px;
  z-index: 1299;

  & .MuiDialog-paper {
    padding-top: 30px;
    width: 1014px;
    z-index: 1299;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-right: 346px;
    gap: 30px;
    user-select: none;
  }
`;

export const ChatModalBackdrop = styled.div<{ open: boolean; expandOpen: boolean }>`
  ${(props) => (props.open ? "position: fixed" : "display: none")};
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1200;
  background-color: ${(props) => (props.expandOpen ? "rgba(0, 0, 0, 0.5)" : "rgba(0, 0, 0, 0)")};
  transition: all 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
`;

export const ChatMainWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const ChatMainHeader = styled.div`
  width: 100%;
  height: 13.5%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  border-radius: 9px 9px 0 0;
  background-color: ${theme.headercolor};
  position: relative;
  z-index: 99;
`;

export const HeaderWords = styled.div`
  p {
    font-size: 14px;
    font-weight: light;
    color: white;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  color: white;
  span {
    font-size: 10px;
    font-weight: bold;
  }
`;

export const ChatMainContent = styled.div`
  width: 100%;
  height: 86.5%;
`;

export const CloseBtn = styled(IconButton)`
  position: absolute;
  right: 360px;
`;

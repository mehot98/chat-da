import styled from "@emotion/styled";
import theme from "@assets/style/theme.module.scss";
import { Dialog } from "@mui/material";

// export const ModalOverlay = styled.div`
//   position: fixed;
//   top: 100px;
//   left: 300px;
//   width: 374px;
//   height: 500px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   font-size: 14px;
//   z-index: 999;
// `;

// export const ModalContentWrapper = styled.div`
//   /* position: relative; */
//   /* padding: 20px; */
// `;

// export const ModalContent = styled.div`
//   /* position: absolute; */
//   background-color: white;
// `;

// export const CloseButton = styled.button`
//   /* top: 10px;
//   right: 10px; */
// `;

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
    border-radius: 10px;
  }
`;

export const ChatMainWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const ChatMainHeader = styled.div`
  width: 100%;
  height: 13.4%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  border-radius: 9px 9px 0 0;
  background-color: #98c1f1;
  position: relative;
  z-index: 99;
`;

export const HeaderWords = styled.div`
  font-size: 14px;
  font-weight: light;
  color: white;
`;

export const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 10px;
  font-weight: bold;
  color: white;
`;

export const ChatMainContent = styled.div`
  width: 100%;
`;

import styled from "styled-components";

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

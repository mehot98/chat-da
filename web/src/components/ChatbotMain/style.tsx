import styled from "@emotion/styled";
import theme from "@assets/style/theme.module.scss";

export const ChatMainWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const ChatMessageWrapper = styled.div`
  width: 98%;
  height: 450px;
  padding: 0 15px;
  margin: auto;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    background-color: transparent;
    width: 10px;
    margin: 1px;
  }

  ::-webkit-scrollbar-thumb {
    background: ${theme.bordercolor};

    background-clip: padding-box;
    border: 1px solid transparent;
    border-radius: 10px;
  }

  // ::-webkit-scrollbar-button:vertical:decrement {
  //   border-bottom: 5px solid ${theme.bordercolor};
  //   border-top: 5px solid transparent;
  //   border-left: 5px solid transparent;
  //   border-right: 5px solid transparent;
  // }

  // ::-webkit-scrollbar-button:vertical:increment {
  //   border-bottom: 5px solid transparent;
  //   border-top: 5px solid ${theme.bordercolor};
  //   border-left: 5px solid transparent;
  //   border-right: 5px solid transparent;
  // }
`;

export const ChatInputWrapper = styled.div`
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  border-radius: 0 0 9px 9px;
  background-color: ${theme.inputfootercolor};
  height: 57px;
  z-index: 99;
`;

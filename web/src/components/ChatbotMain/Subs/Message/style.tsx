import styled from "@emotion/styled";
import theme from "@assets/style/theme.module.scss";
import { Button } from "@mui/material";

export const UserMessageWrapper = styled.div`
  display: flex;
  justify-content: end;
  width: 100%;
  height: fit-content;
  color: white;
  div {
    width: fit-content;
    max-width: 83%;
    padding: 14px 28px;
    border-radius: 17px 0 17px 17px;
    background-color: ${theme.userchatcolor};
  }
  div & .compare {
    display: flex;
    align-items: center;
    gap: 15px;
    padding: 14px 24px;
  }
  img {
    max-width: none;
  }
  span {
    word-break: break-all;
  }
`;

export const CompareMessageWrapper = styled.div`
  display: block;
`;

export const AiMessageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const AiMessageRow = styled.div`
  display: flex;
  gap: 8px;
`;

export const AiMessageDiv = styled.div`
  width: 100%;
  height: fit-content;
  & > div {
    width: fit-content;
    line-height: 1.2;
    padding: 14px 28px;
    border-radius: 0 17px 17px 17px;
    background-color: ${theme.chatDAchatcolor};
    p {
      white-space: pre-line;
      word-break: break-all;
    }
  }
`;

export const ExpandOpenBtn = styled(Button)`
  width: 80%;
  background-color: ${theme.bordercolor};
  color: white;
  border-radius: 100px;
  margin: auto;

  &:hover {
    background-color: ${theme.userchatcolor};
  }

  &:focus {
    outline: none;
  }
`;

export const Loading = styled.div`
  position: relative;
  width: 12px;
  height: 12px;
  margin: 0px 20px;
  transform: translate(-200%, 0);
  top: 46%;
  left: 46%;
  border-radius: 12px;
  -webkit-animation: loader10m 3s ease-in-out infinite;
  animation: loader10m 3s ease-in-out infinite;

  &:before {
    content: "";
    position: absolute;
    top: 0px;
    left: -25px;
    height: 12px;
    width: 12px;
    border-radius: 12px;
    -webkit-animation: loader10g 3s ease-in-out infinite;
    animation: loader10g 3s ease-in-out infinite;
  }

  &:after {
    content: "";
    position: absolute;
    top: 0px;
    left: 25px;
    height: 12px;
    width: 12px;
    border-radius: 10px;
    -webkit-animation: loader10d 3s ease-in-out infinite;
    animation: loader10d 3s ease-in-out infinite;
  }

  @-webkit-keyframes loader10g {
    0% {
      background-color: ${theme.headercolor};
    }
    25% {
      background-color: ${theme.bordercolor};
    }
    50% {
      background-color: ${theme.headercolor};
    }
    75% {
      background-color: ${theme.headercolor};
    }
    100% {
      background-color: ${theme.headercolor};
    }
  }
  @keyframes loader10g {
    0% {
      background-color: ${theme.headercolor};
    }
    25% {
      background-color: ${theme.bordercolor};
    }
    50% {
      background-color: ${theme.headercolor};
    }
    75% {
      background-color: ${theme.headercolor};
    }
    100% {
      background-color: ${theme.headercolor};
    }
  }

  @-webkit-keyframes loader10m {
    0% {
      background-color: ${theme.headercolor};
    }
    25% {
      background-color: ${theme.headercolor};
    }
    50% {
      background-color: ${theme.bordercolor};
    }
    75% {
      background-color: ${theme.headercolor};
    }
    100% {
      background-color: ${theme.headercolor};
    }
  }
  @keyframes loader10m {
    0% {
      background-color: ${theme.headercolor};
    }
    25% {
      background-color: ${theme.headercolor};
    }
    50% {
      background-color: ${theme.bordercolor};
    }
    75% {
      background-color: ${theme.headercolor};
    }
    100% {
      background-color: ${theme.headercolor};
    }
  }

  @-webkit-keyframes loader10d {
    0% {
      background-color: ${theme.headercolor};
    }
    25% {
      background-color: ${theme.headercolor};
    }
    50% {
      background-color: ${theme.headercolor};
    }
    75% {
      background-color: ${theme.bordercolor};
    }
    100% {
      background-color: ${theme.headercolor};
    }
  }
  @keyframes loader10d {
    0% {
      background-color: ${theme.headercolor};
    }
    25% {
      background-color: ${theme.headercolor};
    }
    50% {
      background-color: ${theme.headercolor};
    }
    75% {
      background-color: ${theme.bordercolor};
    }
    100% {
      background-color: ${theme.headercolor};
    }
  }
`;

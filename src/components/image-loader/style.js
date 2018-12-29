import { css, keyframes } from "emotion";

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const box = css`
  position: relative;
`;

export const loader = css`
  position: absolute;
  top: calc(50% - 23px);
  left: calc(50% - 23px);
  display: inline-block;
  width: 46px;
  height: 46px;
  &:after {
    content: " ";
    display: block;
    width: 46px;
    height: 46px;

    border-radius: 50%;
    border: 5px solid #3498db;
    border-color: #3498db transparent #3498db transparent;
    animation: ${spin} 1.2s linear infinite;
  }
`;

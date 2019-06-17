import { css } from "emotion";

export const defaultContainer = css`
  display: flex;
  flex-wrap: wrap;
  align-content: stretch;
`;

export const defaultCardTwoColumns = css`
  flex: 0 1 calc(100% - 1em);
  height: calc(25% - 1em);
  margin: 0 0.5rem 1rem 0.5rem;
  &:hover {
    -webkit-box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.2);
    -moz-box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.2);
    box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.2); }
  @media (min-width: 576px) {
    flex: 0 1 calc(50% - 1em);
     height: calc(50% - 1em);
  }
`;

export const defaultCardFourColumns = css`
  flex: 0 1 calc(100% - 1em);
  // height: calc(100% - 1em);
  margin: 0 0.5em 1em 0.5em;
  &:hover {
    -webkit-box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.2);
    -moz-box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.2);
    box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.2); }

  @media (min-width: 576px) {
    flex: 0 1 calc(50% - 1em);
    // height: calc(50% - 1em);
  }
  @media (min-width: 768px) {
    flex: 0 1 calc(33% - 1em);
    // height: calc(33% - 1em);
  }
  @media (min-width: 992px) {
    flex: 0 1 calc(25% - 1em);
    // height: calc(25% - 1em);
  }
`;

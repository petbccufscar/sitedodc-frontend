import { css } from 'emotion';

export const row = css`
  display: flex;
  flex-flow: row wrap;
`;

export const column = css`
  width: 100%;
  margin-bottom: 15px;
  padding: 0 15px;
  justify-content: space-between;
  
  
  @media (min-width: 576px) {
    width: 50%;
    .card {
      width: 14rem;
    }
  }
  @media (min-width: 768px) {
    width: 33%;
  }
  @media (min-width: 992px) {
    width: 25%;
  }
`
export const cell = css`
  margin: 0 auto;
  width: 18rem;
  transition: box-shadow linear .3s; }
  &:hover {
    -webkit-box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.2);
    -moz-box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.2);
    box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.2); }
  @media (min-width: 576px) {
    width: 14rem;
  }
`
import { css } from "styled-components";

const device = {
  sm: (...args) => css`
    @media (min-width: 576px) {
      ${css(...args)};
    }
  `,
  maxsm: (...args) => css`
    @media (max-width: 576) {
      ${css(...args)};
    }
  `,
  md: (...args) => css`
    @media (min-width: 768px) {
      ${css(...args)};
    }
  `,
  maxmd: (...args) => css`
    @media (max-width: 768px) {
      ${css(...args)};
    }
  `,
  lg: (...args) => css`
    @media (min-width: 992px) {
      ${css(...args)};
    }
  `,
  xl: (...args) => css`
    @media (min-width: 1200px) {
      ${css(...args)};
    }
  `
};
export default device;

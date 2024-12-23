import { css } from "styled-components";

export const theme = {
  colors: {
    mainColor: "#0a66da",
    subColor: "#dbeef4",
    backgroudColor: "#f5f5f5",
    black: "#030303",
    gray: "#a9a9a9",
    white: "#fff",
    hoverMain: "#1377f5",
    borderColor: "#c2c2c2",
    transparent: "transparent",
  },
};

export const TabMenuStyle = css`
  border-bottom: 1px solid ${theme.colors.borderColor};
  li {
    display: inline-block;
    vertical-align: middle;
    font-size: 20px;
    color: ${theme.colors.gray};
    margin: 0 35px 10px 0;
    cursor: pointer;
    &.on {
      color: ${theme.colors.mainColor};
    }
  }
`;
export const LayoutStyle = css`
  max-width: 1920px;
  width: 100%;
  margin: 0 auto;
`;
export const Container = css`
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
`;
export const ContentContainer = css`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 100px 0 150px;
`;
export const HoverStyles = css`
  transition: 0.8s;
  background-color: ${theme.colors.hoverMain};
  box-shadow: 0px 0px 16px rgba(10, 102, 218, 0.5);
`;

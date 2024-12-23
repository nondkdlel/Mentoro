import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
 @font-face {
    font-family: 'Pretendard';
    font-weight: 300;
    src: url('./assets/fonts/Pretendard-Light.woff2') format('font-woff2'),
  }
  @font-face {
    font-family: 'Pretendard';
    font-weight: 400;
    src: url('./assets/fonts/Pretendard-Light.woff2') format('font-woff2'),
  }
  @font-face {
    font-family: 'Pretendard';
    font-weight: 500;
    src: url('./assets/fonts/Pretendard-Medium.woff2') format('font-woff2'),
  }
  @font-face {
    font-family: 'Pretendard';
    font-weight: 600;
    src: url('./assets/fonts/Pretendard-Bold.woff2') format('font-woff2'),
  }
  @font-face {
    font-family: 'Pretendard';
    font-weight: 800;
    src: url('./assets/fonts/Pretendard-ExtraBold.woff2') format('font-woff2'),
  }
  @font-face {
    font-family: 'Pretendard';
    font-weight: 900;
    src: url('./assets/fonts/Pretendard-Black.woff2') format('font-woff2'),
  }
  
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  body {
    font-family: "Pretendard";
    font-weight: 400;
    color: #000;
  }
  a {
    color: #000;
    text-decoration: none;
  }
  ul,li {
    list-style-type: none;
  }
  select, input, textarea {
    outline: none;
  }
  input[type="button"], input[type="file"], input[type="tel"] {
    cursor: pointer;
  }
  table {
    width: 100%;
    border-collapse: collapse;
  }
`;

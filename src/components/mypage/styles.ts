import styled, { css } from "styled-components";

import { theme, HoverStyles } from "@style/theme";

export const StatusList = styled.div`
  clear: both;
  padding: 50px 0;
`;
export const StatusBox = styled.div`
  display: grid;
  grid-template-areas: "grid-aside grid-top" "grid-aside grid-bottom";
  grid-template-columns: 3fr 5fr;
  gap: 20px;
  background-color: ${theme.colors.backgroudColor};
  padding: 30px;
  border-radius: 14px;
  .grid-aside {
    grid-area: grid-aside;
  }
  .grid-top {
    grid-area: grid-top;
  }
  .grid-bottom {
    grid-area: grid-bottom;
    justify-self: end;
    align-self: end;
  }
  .left-box {
    img {
      width: 100%;
      height: 100%;
      border-radius: 8px;
      object-fit: cover;
    }
  }
  .right-box {
    padding: 10px 0 0;
    .inner-box {
      display: grid;
      grid-template-columns: 1fr;
      grid-auto-flow: column;
    }
    .date {
      font-size: 15px;
      color: ${theme.colors.gray};
      font-weight: 500;
      padding-bottom: 10px;
    }
    .product-tit {
      font-size: 18px;
      font-weight: 600;
    }
    .status {
      font-size: 16px;
      font-weight: 600;
      &.ing {
        color: ${theme.colors.mainColor};
      }
    }
    .role {
      font-size: 15px;
      font-weight: 500;
      color: ${theme.colors.gray};
      padding-top: 10px;
    }
    .price {
      font-size: 18px;
      font-weight: 600;
      padding-top: 40px;
      text-align: right;
    }
  }
  .btn-area {
    text-align: right;
    input[type="button"] {
      width: 140px;
      font-size: 16px;
      padding: 10px 0;
      border-radius: 6px;
    }
    .default-btn {
      border: 1px solid ${theme.colors.mainColor};
      background-color: ${theme.colors.mainColor};
      color: ${theme.colors.white};
      margin-left: 10px;
    }
    .reverse-btn {
      border: 1px solid ${theme.colors.subColor};
      background-color: ${theme.colors.subColor};
      color: ${theme.colors.mainColor};
    }
  }
`;
export const LinkBtnStyle = css`
  .link-btn {
    width: 200px;
    float: right;
    position: relative;
    border: none;
    border-radius: 6px;
    background-color: ${theme.colors.mainColor};
    color: ${theme.colors.white};
    height: 50px;
    &:hover {
      ${HoverStyles}
    }
    p {
      font-size: 16px;
      line-height: 53px;
      padding-left: 10px;
      text-align: center;
    }
    &::before {
      content: "";
      display: inline-block;
      vertical-align: middle;
      width: 20px;
      height: 20px;
      position: absolute;
      top: 50%;
      left: 20px;
      transform: translateY(-50%);
      background-image: url("/images/icon/add-icon.svg");
    }
  }
`;
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
export const StatusAreaStyle = css`
  dl {
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-flow: column;
    border: 1px solid ${theme.colors.borderColor};
    border-radius: 6px;
    padding: 30px 20px;
    font-size: 18px;

    &:nth-child(1) {
      margin-bottom: 20px;
      dt::before {
        background-image: url("/images/icon/withdraw-success-icon.svg");
      }
    }
    &:nth-child(2) {
      dt::before {
        background-image: url("/images/icon/withdraw-finish-icon.svg");
      }
      dt,
      dd {
        color: ${theme.colors.gray};
      }
    }
    dt {
      font-size: 18px;
      &::before {
        content: "";
        display: inline-block;
        vertical-align: middle;
        width: 20px;
        height: 20px;
        margin-right: 10px;
      }
    }
    dd {
      font-size: 20px;
      font-weight: 600;
    }
  }
`;

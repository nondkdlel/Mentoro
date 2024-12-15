import { Link } from "react-router-dom";
import styled from "styled-components";

import { theme, LayoutStyle } from "@style/theme";

export default function TheHeader() {
  return (
    <Header>
      <Link to="/" className="logo">
        MENTORO
      </Link>
      <nav>
        <Link to="/jobs">AI N잡 설계</Link>
        <Link to="/specialist">전문가 센터</Link>
        <Link to="/vod">전자책/VOD</Link>
        <Link to="/alarm">알림</Link>
        <Link to="/message">메시지</Link>
        <Link to="/mypage">마이페이지</Link>
      </nav>
    </Header>
  );
}

const Header = styled.header`
  ${LayoutStyle}
  position: relative;
  height: 100px;
  box-shadow: 0px 2px 7px rgba(0, 0, 0, 0.06);
  .logo {
    position: absolute;
    top: 50%;
    left: 50px;
    transform: translateY(-50%);
    color: ${theme.colors.mainColor};
    font-size: 24px;
    font-weight: 900;
  }
  nav {
    position: absolute;
    top: 50%;
    right: 50px;
    transform: translateY(-50%);
  }
  nav a {
    font-size: 18px;
    padding-left: 30px;
    font-weight: 500;
    &:hover {
      color: ${theme.colors.mainColor};
    }
  }
`;

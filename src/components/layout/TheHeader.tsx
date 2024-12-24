import { NavLink, Link } from "react-router-dom";
import styled from "styled-components";

import { theme, LayoutStyle } from "@style/theme";
import { useSnapshot } from "valtio";
import { proxyAlarmModalStatus } from "@valtio/alarm/AlarmStatus";
import AlarmModal from "@comp/alarm/AlarmModal";
export default function TheHeader() {
  const navigations = [
    { to: "/jobs", label: "AI N잡 설계" },
    { to: "/specialist", label: "전문가 센터" },
    { to: "/vod", label: "전자책/VOD" },
    { to: "/alarm", label: "알림" },
    { to: "/message", label: "메시지" },
    { to: "/mypage/seller", label: "마이페이지" },
  ];
  const { status } = useSnapshot(proxyAlarmModalStatus);
  return (
    <Header>
      <Link
        to="/"
        className="logo"
        onClick={() => (proxyAlarmModalStatus.status = false)}
      >
        MENTORO
      </Link>
      <nav>
        {navigations.map((nav) =>
          nav.label === "알림" ? (
            <button
              key={nav.to}
              onClick={() =>
                (proxyAlarmModalStatus.status = !proxyAlarmModalStatus.status)
              }
            >
              {nav.label}
            </button>
          ) : (
            <NavLink
              key={nav.to}
              to={nav.to}
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={() => (proxyAlarmModalStatus.status = false)}
            >
              {nav.label}
            </NavLink>
          )
        )}
      </nav>
      {status && <AlarmModal />}
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
  nav a,
  nav button {
    font-size: 18px;
    padding-left: 30px;
    font-weight: 600;
    &:hover {
      color: ${theme.colors.mainColor};
    }
    &.active {
      color: ${theme.colors.mainColor};
    }
  }
  nav button {
    border: none;
    background-color: ${theme.colors.transparent};
  }
`;

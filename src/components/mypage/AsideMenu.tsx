import { useState } from "react";
import styled from "styled-components";

import { theme } from "@style/theme";

interface titleType {
  title: (title: string) => void;
}
function AsideMenu({ title }: titleType) {
  const [active, onActive] = useState(0);
  const sellerMenuList = [
    "판매 관리",
    "MY 서비스",
    "MY 포트폴리오",
    "수익 관리",
    "사업자 인증하기",
  ];
  // const customerMenuList = [
  //   "구매 관리", "쿠폰함", "캐시 충전/이용", "결제내역", "찜한 상품"
  // ]
  const onSelectMenu = (menu: string, idx: number) => {
    onActive(idx);
    title(menu);
  };
  return (
    <AsideMenuWrapper>
      <h1>마이페이지</h1>
      <ul>
        {sellerMenuList.map((menu, idx) => (
          <li
            key={idx}
            className={active === idx ? "active" : ""}
            onClick={() => onSelectMenu(menu, idx)}
          >
            {menu}
          </li>
        ))}
      </ul>
    </AsideMenuWrapper>
  );
}
const AsideMenuWrapper = styled.div`
  padding: 50px 0 0;

  h1 {
    font-size: 22px;
    font-weight: 600;
    padding-bottom: 10px;
    border-bottom: 1px solid ${theme.colors.gray};
  }
  ul {
    padding: 20px 0;
  }
  li {
    font-size: 17px;
    font-weight: 500;
    padding-bottom: 20px;
    cursor: pointer;
    &.active {
      color: ${theme.colors.mainColor};
    }
  }
`;
export default AsideMenu;

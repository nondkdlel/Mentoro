import { useState } from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";

import { theme } from "@style/theme";

interface titleType {
  title: (title: string) => void;
}
type positionType = {
  seller: string;
  customer: string;
};
type sellerMenuListType = {
  [type in keyof positionType]: { id: number; name: string }[];
};

function AsideMenu({ title }: titleType) {
  const { pathname } = useLocation();
  const [active, onActive] = useState(0);

  const menuList: sellerMenuListType = {
    seller: [
      {
        id: 0,
        name: "판매 관리",
      },
      {
        id: 1,
        name: "MY 서비스",
      },
      {
        id: 2,
        name: "MY 포트폴리오",
      },
      {
        id: 3,
        name: "수익 관리",
      },
      {
        id: 4,
        name: "사업자 인증하기",
      },
    ],
    customer: [],
  };

  const onSelectMenu = (name: string, idx: number) => {
    onActive(idx);
    title(name);
  };
  return (
    <AsideMenuWrapper>
      <h1>마이페이지</h1>
      <MenuLink>
        {menuList.seller.map((list, idx) => (
          <Link
            key={idx}
            to={pathname}
            className={active === idx ? "active" : ""}
            onClick={() => onSelectMenu(list.name, idx)}
          >
            {list.name}
          </Link>
        ))}
      </MenuLink>
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
`;
const MenuLink = styled.div`
  padding: 20px 0;
  a {
    display: block;
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

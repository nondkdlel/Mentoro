import { useSnapshot } from "valtio";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";

import {
  proxyActiveSellerTab,
  proxyMypageSellerTabList,
  proxyMypageCustomerTabList,
  proxyActiveCustomerTab,
} from "@valtio/mypage/MypageStatus";

import { theme } from "@style/theme";
import { useEffect } from "react";

function AsideMenu() {
  const { pathname } = useLocation();
  const url = pathname.split("/").splice(-1)[0];

  const sellerTabList = useSnapshot(proxyMypageSellerTabList);
  const customerTabList = useSnapshot(proxyMypageCustomerTabList);
  const { sellerActiveId } = useSnapshot(proxyActiveSellerTab);
  const { customerActiveId } = useSnapshot(proxyActiveCustomerTab);
  useEffect(() => {
    proxyActiveSellerTab.sellerActiveId = 0;
    proxyActiveCustomerTab.customerActiveId = 0;
  }, []);
  return (
    <AsideMenuWrapper>
      <h1>마이페이지</h1>
      <MenuLink>
        {url === "seller"
          ? sellerTabList.map((list) => (
              <Link
                key={list.id}
                to={pathname}
                className={sellerActiveId === list.id ? "active" : ""}
                onClick={() => (proxyActiveSellerTab.sellerActiveId = list.id)}
              >
                {list.tabName}
              </Link>
            ))
          : customerTabList.map((list) => (
              <Link
                key={list.id}
                to={pathname}
                className={customerActiveId === list.id ? "active" : ""}
                onClick={() =>
                  (proxyActiveCustomerTab.customerActiveId = list.id)
                }
              >
                {list.tabName}
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

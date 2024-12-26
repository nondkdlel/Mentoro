import { useSnapshot } from "valtio";
import styled from "styled-components";

import { ContentContainer } from "@style/theme";

import Profile from "@comp/mypage/Profile";
import AsideMenu from "@comp/mypage/AsideMenu";
import SalesManagement from "@comp/mypage/SalesManagement";
import CouponBox from "@comp/mypage/customer/CouponBox";
import CashCharge from "@comp/mypage/customer/CashCharge";
import PaymentDetails from "@comp/mypage/customer/PaymentDetails";
import FavoriteProducts from "@comp/mypage/customer/FavoriteProducts";

import { proxyActiveCustomerTab } from "@valtio/mypage/MypageStatus";

function CustomerMypage() {
  const { customerActiveId } = useSnapshot(proxyActiveCustomerTab);

  return (
    <MypageWrapper>
      <LeftArea>
        <Profile />
        <AsideMenu />
      </LeftArea>
      <RightArea>
        <h1>
          {customerActiveId === 0
            ? "구매 관리"
            : customerActiveId === 1
            ? "쿠폰함"
            : customerActiveId === 2
            ? "캐시 충전 / 이용"
            : customerActiveId === 3
            ? "결제 내역"
            : customerActiveId === 4
            ? "찜한 상품"
            : ""}
        </h1>
        {customerActiveId === 0 ? (
          <SalesManagement />
        ) : customerActiveId === 1 ? (
          <CouponBox />
        ) : customerActiveId === 2 ? (
          <CashCharge />
        ) : customerActiveId === 3 ? (
          <PaymentDetails />
        ) : customerActiveId === 4 ? (
          <FavoriteProducts />
        ) : (
          ""
        )}
      </RightArea>
    </MypageWrapper>
  );
}
const MypageWrapper = styled.div`
  ${ContentContainer}
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 100px;
`;
const LeftArea = styled.div`
  /* border: 1px solid red; */
`;
const RightArea = styled.div`
  /* border: 1px solid red; */
`;
export default CustomerMypage;

import { useSnapshot } from "valtio";
import styled from "styled-components";

import { ContentContainer } from "@style/theme";

import Profile from "@comp/mypage/Profile";
import AsideMenu from "@comp/mypage/AsideMenu";
import SalesManagement from "@comp/mypage/SalesManagement";
import MyService from "@comp/mypage/MyService";
import MyPortfolio from "@comp/mypage/MyPortfolio";
import PayManagement from "@comp/mypage/PayManangement";
import Business from "@comp/mypage/Business";

import { proxyActiveSellerTab } from "@valtio/mypage/MypageStatus";

function SellerMypage() {
  const { sellerActiveId } = useSnapshot(proxyActiveSellerTab);

  return (
    <MypageWrapper>
      <LeftArea>
        <Profile />
        <AsideMenu />
      </LeftArea>
      <RightArea>
        <h1>
          {sellerActiveId === 0
            ? "판매 관리"
            : sellerActiveId === 1
            ? "MY 서비스"
            : sellerActiveId === 2
            ? "MY 포트폴리오"
            : sellerActiveId === 3
            ? "수익 관리"
            : sellerActiveId === 4
            ? "사업자 인증하기"
            : ""}
        </h1>
        {sellerActiveId === 0 ? (
          <SalesManagement />
        ) : sellerActiveId === 1 ? (
          <MyService />
        ) : sellerActiveId === 2 ? (
          <MyPortfolio />
        ) : sellerActiveId === 3 ? (
          <PayManagement />
        ) : sellerActiveId === 4 ? (
          <Business />
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
export default SellerMypage;

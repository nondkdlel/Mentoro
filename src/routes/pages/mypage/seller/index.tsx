import { useState } from "react";
import styled from "styled-components";

import { ContentContainer } from "@style/theme";

import Profile from "@comp/mypage/Profile";
import AsideMenu from "@comp/mypage/AsideMenu";
import SalesManagement from "@comp/mypage/SalesManagement";
import MyService from "@comp/mypage/MyService";
import MyPortfolio from "@comp/mypage/MyPortfolio";
import PayManagement from "@comp/mypage/PayManangement";
import Business from "@comp/mypage/Business";

function Mypage() {
  const [tabName, setTabName] = useState<string>("판매 관리");
  const onTitle = (pageTit: string) => {
    setTabName(pageTit);
  };
  return (
    <MypageWrapper>
      <LeftArea>
        <Profile />
        <AsideMenu title={onTitle} />
      </LeftArea>
      <RightArea>
        <h1>{tabName}</h1>
        {tabName === "판매 관리" ? (
          <SalesManagement />
        ) : tabName === "MY 서비스" ? (
          <MyService />
        ) : tabName === "MY 포트폴리오" ? (
          <MyPortfolio />
        ) : tabName === "수익 관리" ? (
          <PayManagement />
        ) : tabName === "사업자 인증하기" ? (
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
export default Mypage;

import { useState } from "react";
import styled from "styled-components";

import { ContentContainer } from "@style/theme";

import Profile from "@comp/mypage/Profile";
import AsideMenu from "@comp/mypage/AsideMenu";

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
      </RightArea>
    </MypageWrapper>
  );
}
const MypageWrapper = styled.div`
  ${ContentContainer}
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 50px;
`;
const LeftArea = styled.div`
  /* border: 1px solid red; */
`;
const RightArea = styled.div`
  /* border: 1px solid red; */
`;
export default Mypage;

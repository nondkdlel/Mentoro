import styled from "styled-components";

import HoldingStatus from "@comp/mypage/common/HoldingStatus";
import TabMenu from "@comp/common/TabMenu";

function CashCharge() {
  return (
    <CashChargeWrapper>
      <HoldingStatus
        firstLeftText="보유중인 캐시"
        firstRightText="5,000원"
        leftBtnText="충전하기"
        rightBtnText="환불하기"
        isButton={true}
      />
      <h2>캐시 이용 내역</h2>
      <TabMenu
        tabList={["전체", "충전", "사용", "환불"]}
        $fontSize="20px"
        $padding="0 60px 10px 0"
      />
    </CashChargeWrapper>
  );
}
const CashChargeWrapper = styled.div`
  padding: 50px 0 0;
  h2 {
    font-size: 22px;
    margin: 0 0 30px;
    font-weight: 500;
  }
`;
export default CashCharge;

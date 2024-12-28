import { useSnapshot } from "valtio";
import styled from "styled-components";

import HoldingStatus from "@comp/mypage/common/HoldingStatus";
import TabMenu from "@comp/common/TabMenu";
import Modal from "@comp/common/Modal";

import { proxyModalStatus } from "@valtio/common/ModalStatus";

function CashCharge() {
  const { isCharge, isRefund } = useSnapshot(proxyModalStatus);

  return (
    <CashChargeWrapper>
      <HoldingStatus
        firstLeftText="보유중인 캐시"
        firstRightText="5,000원"
        leftBtnText="충전하기"
        rightBtnText="환불하기"
        isButton={true}
        leftOnClick={() => (proxyModalStatus.isCharge = true)}
        RightOnClick={() => (proxyModalStatus.isRefund = true)}
      />
      <h2>캐시 이용 내역</h2>
      <TabMenu
        tabList={["전체", "충전", "사용", "환불"]}
        $fontSize="20px"
        $padding="0 60px 10px 0"
      />
      {isCharge && (
        <Modal
          isCharge={isCharge}
          title="충전하기"
          chargePriceList={["+ 1만원", "+ 3만원", "+ 5만원", "+ 10만원"]}
        />
      )}
      {isRefund && (
        <Modal
          isRefund={isRefund}
          title="충전하기"
          chargePriceList={["+ 1만원", "+ 3만원", "+ 5만원", "+ 10만원"]}
        />
      )}
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

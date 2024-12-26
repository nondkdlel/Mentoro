import { useSnapshot } from "valtio";
import styled from "styled-components";

import HoldingStatus from "@comp/mypage/common/HoldingStatus";
import TabMenu from "@comp/common/TabMenu";

import { proxyActiveTab } from "@valtio/common/ActiveTab";

import { theme } from "@style/theme";

function PayManagement() {
  const { tabId } = useSnapshot(proxyActiveTab);

  return (
    <PayManagementWrapper>
      <HoldingStatus
        isDouble={true}
        firstLeftText="출금 가능 수익금"
        firstRightText="5,000원"
        secondLeftText="출금 완료 수익금"
        secondRightText="120,000원"
        isButton={true}
        leftBtnText="출금하기"
        rightBtnText="계좌 등록하기"
      />
      <TabMenu
        tabList={["판매 내역", "출금내역"]}
        $fontSize="20px"
        $padding="0 60px 10px 0"
      />
      <PaymentHistory>
        <colgroup>
          <col width="35%" />
          <col width="35%" />
          <col width="30%" />
        </colgroup>
        <tbody>
          {tabId === 0 ? (
            <tr>
              <td>포인트 충전</td>
              <td>+ 300,000</td>
              <td>2024/06/20</td>
            </tr>
          ) : (
            <tr>
              <td>[홍길동 티비] 계약</td>
              <td>- 300,000</td>
              <td>2024/06/20</td>
            </tr>
          )}
        </tbody>
      </PaymentHistory>
    </PayManagementWrapper>
  );
}
const PayManagementWrapper = styled.div`
  padding: 50px 0;
`;

const PaymentHistory = styled.table`
  td {
    padding: 12px 0;
    font-size: 16px;
    border-bottom: 1px solid ${theme.colors.borderColor};
    color: ${theme.colors.gray};
    &:last-child {
      text-align: right;
    }
  }
`;
export default PayManagement;

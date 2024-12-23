import { useState } from "react";
import styled from "styled-components";

import { StatusAreaStyle } from "./styles";
import { theme, TabMenuStyle } from "@style/theme";

function PayManagement() {
  const [active, setActive] = useState(0);
  const tabList = ["판매 내역", "출금 내역"];
  return (
    <PayManagementWrapper>
      <PayStatusArea>
        <dl>
          <dt>출금 가능 수익금</dt>
          <dd>5,000원</dd>
        </dl>
        <dl>
          <dt>출금 완료 수익금</dt>
          <dd>120,000원</dd>
        </dl>
        <div className="btn-area">
          <input type="button" value="출금하기" />
          <input type="button" value="계좌 등록하기" />
        </div>
      </PayStatusArea>
      <TabMenu>
        {tabList.map((tab, idx) => (
          <li
            className={active === idx ? "on" : ""}
            onClick={() => setActive(idx)}
            key={idx}
          >
            {tab}
          </li>
        ))}
      </TabMenu>
      <PaymentHistory>
        <colgroup>
          <col width="35%" />
          <col width="35%" />
          <col width="30%" />
        </colgroup>
        <tbody>
          {active === 0 ? (
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
const PayStatusArea = styled.div`
  ${StatusAreaStyle}
  .btn-area {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
    padding: 50px 0 100px;
    input[type="button"] {
      font-size: 17px;
      padding: 16px 0;
      border-radius: 6px;
      &:nth-child(1) {
        background-color: ${theme.colors.mainColor};
        color: ${theme.colors.white};
        border: 1px solid ${theme.colors.mainColor};
      }
      &:nth-child(2) {
        background-color: transparent;
        color: ${theme.colors.mainColor};
        border: 1px solid ${theme.colors.mainColor};
      }
    }
  }
`;
const TabMenu = styled.ul`
  ${TabMenuStyle}
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

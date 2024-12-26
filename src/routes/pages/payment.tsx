import styled from "styled-components";

import PaymentLeftContent from "@comp/common/payment/PaymentLeftContent";
import PaymentRightContent from "@comp/common/payment/PaymentRightContent";

import { ContentContainer } from "@style/theme";

function Payment() {
  return (
    <PaymentWrapper>
      <h1>결제하기</h1>
      <PaymentContentWrapper>
        <PaymentLeftContent />
        <PaymentRightContent />
      </PaymentContentWrapper>
    </PaymentWrapper>
  );
}
const PaymentWrapper = styled.div`
  ${ContentContainer}
  h1 {
    font-size: 28px;
    font-weight: 500;
    margin-bottom: 50px;
  }
`;
const PaymentContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 6fr 4fr;
  gap: 80px;
`;
export default Payment;

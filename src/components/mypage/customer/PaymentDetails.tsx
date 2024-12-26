import styled from "styled-components";

import ListInfoBox from "@comp/mypage/customer/ListInfoBox";

function PaymentDetails() {
  return (
    <PaymentDetailWrapper>
      <ListInfoBox
        title="서비스 구매: (#403020_PPT 제작 | 핵심을 제작해드립니다.)"
        date="2025.01.03"
        price="카드결제: 50,000원"
      />
      <ListInfoBox
        title="서비스 구매: (#403020_PPT 제작 | 핵심을 제작해드립니다.)"
        date="2025.01.03"
        price="카드결제: 50,000원"
      />
    </PaymentDetailWrapper>
  );
}
const PaymentDetailWrapper = styled.div`
  padding: 50px 0 0;
`;
export default PaymentDetails;

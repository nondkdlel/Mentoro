import styled from "styled-components";

import ListInfoBox from "./ListInfoBox";

function CouponBox() {
  return (
    <CouponBoxWrapper>
      <CodeInputArea>
        <input type="text" name="" id="" placeholder="쿠폰 코드 입력" />
        <input type="button" value="입력" />
      </CodeInputArea>
      <h2>쿠폰 내역</h2>
      <ListInfoBox
        title="오픈 축하 이벤트 1,000원 쿠폰"
        price="5,000원"
        date="유효기간: ~ 2025.01.30까지"
      />
      <ListInfoBox
        title="오픈 축하 이벤트 1,000원 쿠폰"
        price="5,000원"
        date="유효기간: ~ 2025.01.30까지"
      />
    </CouponBoxWrapper>
  );
}

const CouponBoxWrapper = styled.div`
  padding: 50px 0 0;
  h2 {
    font-size: 22px;
    margin: 100px 0 30px;
    font-weight: 500;
  }
`;
const CodeInputArea = styled.div`
  display: grid;
  grid-template-columns: 8fr 2fr;
  gap: 10px;
  input[type="text"] {
    border: 1px solid #c2c2c2;
    font-size: 16px;
    padding: 12px 10px;
    border-radius: 4px;
  }
  input[type="button"] {
    background-color: #0a66da;
    border: 1px solid #0a66da;
    color: #fff;
    font-size: 16px;
    border-radius: 4px;
  }
`;

export default CouponBox;

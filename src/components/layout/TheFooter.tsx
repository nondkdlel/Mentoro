import { Link } from "react-router-dom";
import styled from "styled-components";

import { theme, LayoutStyle } from "@style/theme";

function TheFooter() {
  return (
    <Footer>
      <TopContent>
        <Link to="/">개인정보처리방침</Link>
        <Link to="/">이용약관</Link>
        <Link to="/">사용자 유의사항</Link>
        <Link to="/">결제환불약관</Link>
      </TopContent>
      <BottomContent>
        <li>주식회사 쉐릿</li>
        <li>사업자등록증 : 355-81-01039</li>
        <li>대표자 : 김세영</li>
        <li>대표자 이메일 : keynes30@naver.com</li>
        <li>주소 : 전북 전주시 덕진구 안성북로 21-26, 304호</li>
        <li>유선 전화: 070-7798-2008</li>
      </BottomContent>
    </Footer>
  );
}
const Footer = styled.footer`
  ${LayoutStyle}
  padding: 100px 50px;
`;
const TopContent = styled.div`
  margin-bottom: 20px;
  a {
    font-size: 15px;
    font-weight: 500;
    display: inline-block;
    vertical-align: middle;
    margin-right: 50px;
  }
`;
const BottomContent = styled.ul`
  li {
    display: inline-block;
    vertical-align: middle;
    font-size: 14px;
    color: ${theme.colors.gray};
    &::after {
      content: "|";
      color: ${theme.colors.gray};
      font-size: 14px;
      display: inline-block;
      vertical-align: middle;
      margin: 0 10px;
    }
    &:last-child::after {
      display: none;
    }
  }
`;
export default TheFooter;

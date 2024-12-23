import styled from "styled-components";

import { TabMenuStyle } from "@comp/mypage/styles";

interface ActivePropsType {
  active: number;
}

function PageStep({ active }: ActivePropsType) {
  const pageStepList = ["1. 기본 정보", "2. 가격 설정", "3. 서비스 설명"];
  return (
    <PageStepWrapper>
      {pageStepList.map((page, idx) => (
        <li key={idx} className={active === idx ? "on" : ""}>
          {page}
        </li>
      ))}
    </PageStepWrapper>
  );
}
const PageStepWrapper = styled.ul`
  ${TabMenuStyle}
  li {
    margin: 0 150px 10px 0;
    font-weight: 500;
  }
`;
export default PageStep;

import styled from "styled-components";

import { theme, TabMenuStyle } from "@style/theme";
import { useState } from "react";

function DetailLeftContent() {
  const [active, setActive] = useState(0);
  const tabList = ["서비스 설명", "목차", "리뷰"];
  return (
    <DetailLeftContentWrapper>
      <p className="category">BLOG</p>
      <h1>APP앱개발 전문 업체 노빌더 기획/디자인/개발까지</h1>
      <img className="main-img" src="/images/dummy-thum.png" alt="" />
      <TabMenu>
        {tabList.map((name, idx) => (
          <li
            key={idx}
            className={active === idx ? "on" : ""}
            onClick={() => setActive(idx)}
          >
            {name}
          </li>
        ))}
      </TabMenu>
      {active === 0 ? (
        <TabContent>
          <div className="detail-txt">
            <p>
              서비스에 관해 고객이 쉽게 이해하도록 작성하시는 것을 추천드립니다.
              <br />
              다른 고수와 차별화 되는 고수님만의 장점이나 서비스 혜택 등이 잘
              드러나는 것이 좋습니다.
              <br />
              서비스 상세 설명은 글자수에 관계없이 작성할 수 있습니다.
              <br />
              고객이 읽기 쉽도록 너무 짧거나 길지 않은 300~700자 분량을
              권해드립니다.
            </p>
            <p>
              들어가야 할 필수 내용
              <br />
              1. 서비스 상세 설명 <br />
              2.수정 및 재진행 <br />
              3. 취소 및 환불 규정
            </p>
          </div>
          <img src="/images/dummy-detail-img.png" alt="" />
        </TabContent>
      ) : active === 1 ? (
        <TabContent>
          <p className="empty">목차를 작성해주세요.</p>
        </TabContent>
      ) : (
        <TabContent>
          <p>리뷰를 작성해주세요.</p>
        </TabContent>
      )}
    </DetailLeftContentWrapper>
  );
}
const DetailLeftContentWrapper = styled.div`
  .category {
    color: ${theme.colors.gray};
    font-size: 15px;
    font-weight: 600;
    line-height: 1.6;
  }
  h1 {
    font-size: 26px;
    margin-bottom: 20px;
    font-weight: 500;
  }
  .main-img {
    border-radius: 12px;
    overflow: hidden;
    height: 400px;
    object-fit: cover;
  }
`;
const TabMenu = styled.ul`
  ${TabMenuStyle}
  margin: 30px 0 20px;
`;
const TabContent = styled.div`
  .detail-txt {
    margin-bottom: 30px;
  }
  p {
    font-size: 16px;
    line-height: 1.5;
    &.empty {
      text-align: center;
      background-color: ${theme.colors.backgroudColor};
      color: ${theme.colors.gray};
      padding: 15px 0;
    }
  }
  img {
    display: block;
    border-radius: 12px;
    overflow: hidden;
    height: 500px;
    object-fit: cover;
  }
`;
export default DetailLeftContent;

import styled from "styled-components";

import { SectionTitleStyle } from "./styles";
import { theme, Container } from "@style/theme";

function PushSection() {
  return (
    <PushSectionWrapper>
      <h1>MENTORO만의 부업 추천 기능</h1>
      <div className="inner-content">
        <div className="split-content">
          <img src="/images/main/main-section-01-01.png" alt="" />
          <p>N잡러 전문가 컨택</p>
          <span>
            "부업에 대해 물어보고싶은데, <br /> 막상 물어볼 곳이 없어"
          </span>
        </div>
        <div className="split-content">
          <img src="/images/main/main-section-01-02.png" alt="" />
          <p>부업 추천 AI</p>
          <span>
            "부업에 대해 물어보고싶은데, <br /> 막상 물어볼 곳이 없어"
          </span>
        </div>
        <div className="split-content">
          <img src="/images/main/main-section-01-03.png" alt="" />
          <p>전자책 및 VOD 구매</p>
          <span>
            "부업에 대해 물어보고싶은데, <br /> 막상 물어볼 곳이 없어"
          </span>
        </div>
      </div>
    </PushSectionWrapper>
  );
}
const PushSectionWrapper = styled.div`
  ${Container}
  padding: 150px 0 200px;
  h1 {
    ${SectionTitleStyle}
  }
  .inner-content {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 100px;
  }
  .split-content {
    border-radius: 32px;
    box-shadow: 2px 0px 10px rgba(3, 3, 3, 0.1);
    text-align: center;
    padding: 30px 0;
    img {
      width: 150px;
    }
    p {
      font-size: 25px;
      color: ${theme.colors.mainColor};
      font-weight: 600;
      margin: 10px 0;
    }
    span {
      color: #a9a9a9;
    }
  }
`;
export default PushSection;

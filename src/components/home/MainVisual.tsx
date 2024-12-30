import { Link } from "react-router-dom";
import styled from "styled-components";

import { theme, Container } from "@style/theme";

import MainVisualObj from "@images/main/main-visual-obj.png";
import MainVisualBubble01 from "@images/main/main-visual-bubble-01.png";
import MainVisualBubble02 from "@images/main/main-visual-bubble-02.png";
import MainVisualBubble03 from "@images/main/main-visual-bubble-03.png";

function MainVisual() {
  return (
    <MainVisualWrapper>
      <VisualContent>
        <VisualLeft>
          <h1>
            요즘은 부업의 시대!
            <br />
            빠르고 확실하게 시작해보세요:)
          </h1>
          <p>
            부업 추천 AI부터 N잡러 부업 전문가 1:1 컨택까지! <br />
            멘토로에서 한번에 해결해보세요.
          </p>
          <Link to="/jobs">부업 추천받기</Link>
        </VisualLeft>
        <VisualRight>
          <div className="visual-obj">
            <img src={MainVisualObj} alt="main-visual-obj" />
          </div>
          <MsgBoxList>
            <div className="msg-box">
              <p>
                "부업에 대해 물어보고 싶은데,
                <br /> 막상 물어볼 곳이 없어"
              </p>
            </div>
            <div className="msg-box">
              <p>
                "다들 하는 부업, <br /> 나도 해보고싶은데 뭘 할 지 모르겠어"
              </p>
            </div>
            <div className="msg-box">
              <p>
                "나에게 맞는 부업이 뭐가 있을지
                <br /> 알아보고 바로 실행하고 싶어"
              </p>
            </div>
          </MsgBoxList>
        </VisualRight>
      </VisualContent>
    </MainVisualWrapper>
  );
}
const MainVisualWrapper = styled.div`
  background-color: #dbeef4;
  padding: 100px 0;
`;
const VisualContent = styled.div`
  ${Container}
  display: grid;
  grid-template-columns: 4fr 7fr;
  align-items: center;
`;

const VisualLeft = styled.div`
  h1 {
    font-size: 36px;
    color: ${theme.colors.black};
    margin-bottom: 46px;
  }
  p {
    font-size: 20px;
    color: #252525;
    margin-bottom: 20px;
  }
  a {
    display: block;
    color: #fff;
    background-color: ${theme.colors.mainColor};
    text-align: center;
    width: 320px;
    padding: 20px 0;
    font-size: 18px;
    font-weight: 500;
    border-radius: 8px;
    &:hover {
      transition: 1s;
      background-color: ${theme.colors.hoverMain};
    }
  }
`;
const VisualRight = styled.div`
  position: relative;
  height: 600px;
  .visual-obj {
    width: 350px;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    /* width: ; */
  }
`;
const MsgBoxList = styled.div`
  .msg-box {
    width: 300px;
    height: 140px;
    position: absolute;
    background-size: contain;
    background-repeat: no-repeat;
    p {
      padding: 30px 0 0;
      text-align: center;
      font-size: 18px;
      line-height: 1.5;
    }
    &:nth-child(1) {
      top: 150px;
      left: 0;
      background-image: url(${MainVisualBubble01});
    }
    &:nth-child(2) {
      top: 0;
      left: 70%;
      transform: translateX(-50%);
      background-image: url(${MainVisualBubble02});
    }
    &:nth-child(3) {
      top: 160px;
      right: 0;
      background-image: url(${MainVisualBubble03});
    }
  }
`;
export default MainVisual;

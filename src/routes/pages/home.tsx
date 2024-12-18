import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

import { theme, Container } from "@style/theme";
function Home() {
  return (
    <Main>
      <MainVisual>
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
            <Link to="/">부업 추천받기</Link>
          </VisualLeft>
          <VisualRight>
            <MsgBox>
              "부업에 대해 물어보고 싶은데, 막상 물어볼 곳이 없어"
            </MsgBox>
            <MsgBox>
              "다들 하는 부업, <br /> 나도 해보고싶은데 뭘 할 지 모르겠어"
            </MsgBox>
            <MsgBox>
              "나에게 맞는 부업이 뭐가 있을지 알아보고 바로 실행하고 싶어"
            </MsgBox>
          </VisualRight>
        </VisualContent>
      </MainVisual>
      <PushSection>
        <h1>MENTORO만의 부업 추천 기능</h1>
        <div className="inner-content">
          <div className="split-content">
            <p>N잡러 전문가 컨택</p>
            <span>
              "부업에 대해 물어보고싶은데, <br /> 막상 물어볼 곳이 없어"
            </span>
          </div>
          <div className="split-content">
            <p>부업 추천 AI</p>
            <span>
              "부업에 대해 물어보고싶은데, <br /> 막상 물어볼 곳이 없어"
            </span>
          </div>
          <div className="split-content">
            <p>전자책 및 VOD 구매</p>
            <span>
              "부업에 대해 물어보고싶은데, <br /> 막상 물어볼 곳이 없어"
            </span>
          </div>
        </div>
      </PushSection>
      <CategorySection>
        <div className="head-area">
          <div className="left-box">
            <h1>
              N잡러 전문가 컨택,
              <br />
              여러 분야의 전문가 항시 대기!
            </h1>
            <p>
              부업 추천 AI부터, N잡러 부업 전문가 1:1 컨택까지!
              <br />
              멘토로에서 한번에 해결해보세요.
            </p>
          </div>
          <div className="right-box">
            <p>+200 이상의 부업</p>
          </div>
        </div>
        <div className="cate-list">
          <div className="cate-box">
            <p>AI 서비스</p>
          </div>
          <div className="cate-box">
            <p>부동산</p>
          </div>
          <div className="cate-box">
            <p>영상/사진</p>
          </div>
          <div className="cate-box">
            <p>문서/번역</p>
          </div>
          <div className="cate-box">
            <p>블로그</p>
          </div>
          <div className="cate-box">
            <p>인플루언서</p>
          </div>
        </div>
      </CategorySection>
      <Banner>
        <div className="inner-content">
          <h1>부업 전문 AI로 부업 추천과 관련 PLAN까지!</h1>
          <div className="button-box">
            <Link to="/">AI 추천받기</Link>
          </div>
        </div>
      </Banner>
      <VodSection>
        <h1>전자책 / VOD로 쉽고 빠르게 N잡러 도전!</h1>
        <div className="inner-content">
          <div className="thum-list">
            <div className="thum-box">
              <p className="thum-tit">
                동대문 사입, 의류매장운영 10년차가 쉽게 알려줍니다.
              </p>
              <div className="review-area">
                <div className="left-box">
                  <p>
                    4.0 <span>(100)</span>
                  </p>
                </div>
                <p className="right-box">490,000원~</p>
              </div>
            </div>
            <div className="thum-box">
              <p className="thum-tit">
                동대문 사입, 의류매장운영 10년차가 쉽게 알려줍니다.
              </p>
              <div className="review-area">
                <div className="left-box">
                  <p>
                    4.0 <span>(100)</span>
                  </p>
                </div>
                <p className="right-box">490,000원~</p>
              </div>
            </div>
            <div className="thum-box">
              <p className="thum-tit">
                동대문 사입, 의류매장운영 10년차가 쉽게 알려줍니다.
              </p>
              <div className="review-area">
                <div className="left-box">
                  <p>
                    4.0 <span>(100)</span>
                  </p>
                </div>
                <p className="right-box">490,000원~</p>
              </div>
            </div>
            <div className="thum-box">
              <p className="thum-tit">
                동대문 사입, 의류매장운영 10년차가 쉽게 알려줍니다.
              </p>
              <div className="review-area">
                <div className="left-box">
                  <p>
                    4.0 <span>(100)</span>
                  </p>
                </div>
                <p className="right-box">490,000원~</p>
              </div>
            </div>
          </div>
          <Link to="/">MORE VIEW</Link>
        </div>
      </VodSection>
      <CardSection>
        <h1>MENTORO와 함께 수익 창출하기</h1>
        <div className="card-area">
          <div className="card-box">
            <p>전문가 등록하기</p>
            <span>MENTORO와 함께 여러분의 재능을 공유해보세요!</span>
            <Link to="/">더보러가기</Link>
          </div>
          <div className="card-box">
            <p>전문가 찾아보기</p>
            <span>
              MENTORO에 등록된 전문가와 함께 본인만의 부업을 찾아보세요!
            </span>
            <Link to="/">더보러가기</Link>
          </div>
        </div>
      </CardSection>
    </Main>
  );
}

const Main = styled.div``;
const MainVisual = styled.div`
  background-color: #dbeef4;
`;
const VisualContent = styled.div`
  ${Container}
  position: relative;
  height: 630px;
`;
const PositionStyle = css`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`;
const VisualLeft = styled.div`
  ${PositionStyle}
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
  ${PositionStyle}
  right: 0;
`;
const MsgBox = styled.div``;
const SectionTitleStyle = css`
  font-size: 36px;
  color: ${theme.colors.mainColor};
  text-align: center;
  margin-bottom: 100px;
`;
const PushSection = styled.div`
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
    p {
      font-size: 25px;
      color: ${theme.colors.mainColor};
      font-weight: 600;
      margin-bottom: 10px;
    }
    span {
      color: #a9a9a9;
    }
  }
`;
const CategorySection = styled.div`
  background-color: #f9f9f9;
  padding: 150px 0 200px;
  .head-area {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: space-between;
    padding-bottom: 60px;
    ${Container}
    .left-box {
      h1 {
        font-size: 34px;
        color: ${theme.colors.black};
        margin-bottom: 20px;
      }
      p {
        font-size: 20px;
        color: #252525;
      }
    }
    .right-box {
      text-align: right;
      p {
        font-size: 55px;
        font-weight: 900;
        color: ${theme.colors.mainColor};
      }
    }
  }
  .cate-list {
    display: grid;
    gap: 20px;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    ${Container}
  }
  .cate-box {
    background-color: #fff;
    border-radius: 12px;
    text-align: center;
    box-shadow: 2px 0px 10px rgba(3, 3, 3, 0.1);
    p {
      font-size: 20px;
      font-weight: 600;
    }
  }
`;
const Banner = styled.div`
  background-color: ${theme.colors.mainColor};
  padding: 90px 0;
  .inner-content {
    ${Container}
    display: grid;
    grid-template-columns: 1fr auto;
    justify-content: space-between;
    align-items: center;
    h1 {
      color: ${theme.colors.white};
      font-size: 36px;
      font-weight: 500;
    }
    a {
      display: block;
      text-align: center;
      width: 243px;
      background-color: ${theme.colors.white};
      color: ${theme.colors.mainColor};
      font-size: 18px;
      font-weight: 500;
      padding: 14px;
      border-radius: 8px;
    }
  }
`;
const VodSection = styled.div`
  padding: 100px 0 120px;
  .inner-content {
    ${Container}
  }
  h1 {
    ${SectionTitleStyle}
  }
  .thum-list {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 35px;
    margin-bottom: 50px;
  }
  a {
    display: block;
    margin: 0 auto;
    text-align: center;
    width: 243px;
    padding: 20px 0;
    background-color: ${theme.colors.mainColor};
    font-size: 18px;
    font-weight: 500;
    color: ${theme.colors.white};
    border-radius: 8px;
    &:hover {
      transition: 0.8s;
      background-color: ${theme.colors.hoverMain};
      box-shadow: 0px 0px 16px rgba(10, 102, 218, 0.5);
    }
  }
`;
const CardSection = styled.div`
  background-color: #f4f4f4;
  padding: 100px 0 250px;
  h1 {
    ${SectionTitleStyle}
    margin-bottom: 100px;
  }
  .card-area {
    ${Container}
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 50px;
    padding: 0 100px;
    .card-box {
      padding: 35px 30px;
      p {
        font-size: 22px;
        color: ${theme.colors.mainColor};
        font-weight: 600;
        margin-bottom: 10px;
      }
      span {
        display: block;
        color: ${theme.colors.gray};
        margin-bottom: 30px;
      }
      a {
        width: 120px;
        padding: 10px 0;
        display: block;
        text-align: center;
        background-color: ${theme.colors.mainColor};
        color: ${theme.colors.white};
        border-radius: 6px;
        float: right;
        &:hover {
          transition: 1s;
          background-color: ${theme.colors.hoverMain};
          box-shadow: 0px 0px 10px rgba(10, 102, 218, 0.6);
        }
      }
      &:first-child {
        background-color: ${theme.colors.subColor};
      }
      &:last-child {
        background-color: ${theme.colors.white};
      }
    }
  }
`;

export default Home;

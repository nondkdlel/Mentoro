import { Link } from "react-router-dom";
import styled from "styled-components";

import MainVisual from "@comp/home/MainVisual";
import PushSection from "@comp/home/PushSection";
import CategorySection from "@comp/home/CategorySection";
import VodSection from "@comp/home/VodSection";
import CardSection from "@comp/home/CardSection";
import { theme, Container } from "@style/theme";

function Home() {
  return (
    <Main>
      <MainVisual />
      <PushSection />
      <CategorySection />
      <Banner>
        <div className="inner-content">
          <h1>부업 전문 AI로 부업 추천과 관련 PLAN까지!</h1>
          <div className="button-box">
            <Link to="/jobs">AI 추천받기</Link>
          </div>
        </div>
      </Banner>
      <VodSection />
      <CardSection />
    </Main>
  );
}

const Main = styled.div``;

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

export default Home;

import styled from "styled-components";

import { theme, Container } from "@style/theme";

function CategorySection() {
  return (
    <CategorySectionWrapper>
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
          <img src="/images/main/main-section-02-01.png" alt="" />
          <p>AI 서비스</p>
        </div>
        <div className="cate-box">
          <img src="/images/main/main-section-02-02.png" alt="" />
          <p>부동산</p>
        </div>
        <div className="cate-box">
          <img src="/images/main/main-section-02-03.png" alt="" />
          <p>영상/사진</p>
        </div>
        <div className="cate-box">
          <img src="/images/main/main-section-02-04.png" alt="" />
          <p>문서/번역</p>
        </div>
        <div className="cate-box">
          <img src="/images/main/main-section-02-05.png" alt="" />
          <p>블로그</p>
        </div>
        <div className="cate-box">
          <img src="/images/main/main-section-02-06.png" alt="" />
          <p>인플루언서</p>
        </div>
      </div>
    </CategorySectionWrapper>
  );
}
const CategorySectionWrapper = styled.div`
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
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    gap: 50px;
    ${Container}
  }
  .cate-box {
    background-color: #fff;
    border-radius: 12px;
    text-align: center;
    box-shadow: 2px 0px 10px rgba(3, 3, 3, 0.1);
    padding: 30px;
    img {
      width: 40px;
      height: 40px;
      object-fit: contain;
    }
    p {
      padding: 20px 0 0;
      font-size: 20px;
      font-weight: 600;
    }
  }
`;
export default CategorySection;

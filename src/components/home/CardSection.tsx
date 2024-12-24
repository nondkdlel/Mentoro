import { Link } from "react-router-dom";
import styled from "styled-components";

import { SectionTitleStyle } from "./styles";
import { theme, Container } from "@style/theme";

function CardSection() {
  return (
    <CardSectionWrapper>
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
    </CardSectionWrapper>
  );
}
const CardSectionWrapper = styled.div`
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
export default CardSection;

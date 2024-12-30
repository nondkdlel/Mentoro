import { Link } from "react-router-dom";
import styled from "styled-components";

import { SectionTitleStyle } from "./styles";
import { theme, Container } from "@style/theme";

import DummyThumbnail from "@images/dummy-thum.png";
import StarIcon from "@images/icon/star-on-icon.svg?react";

function VodSection() {
  return (
    <VodSectionWrapper>
      <h1>전자책 / VOD로 쉽고 빠르게 N잡러 도전!</h1>
      <div className="inner-content">
        <div className="thum-list">
          <div className="thum-box">
            <img src={DummyThumbnail} alt="thumbnail" />
            <p className="thum-tit">
              동대문 사입, 의류매장운영 10년차가 쉽게 알려줍니다.
            </p>
            <div className="review-area">
              <div className="left-box">
                <StarIcon />
                <p>
                  4.0 <span>(100)</span>
                </p>
              </div>
              <p className="right-box">490,000원~</p>
            </div>
          </div>
          <div className="thum-box">
            <img src={DummyThumbnail} alt="thumbnail" />
            <p className="thum-tit">
              동대문 사입, 의류매장운영 10년차가 쉽게 알려줍니다.
            </p>
            <div className="review-area">
              <div className="left-box">
                <StarIcon />
                <p>
                  4.0 <span>(100)</span>
                </p>
              </div>
              <p className="right-box">490,000원~</p>
            </div>
          </div>
          <div className="thum-box">
            <img src={DummyThumbnail} alt="thumbnail" />
            <p className="thum-tit">
              동대문 사입, 의류매장운영 10년차가 쉽게 알려줍니다.
            </p>
            <div className="review-area">
              <div className="left-box">
                <StarIcon />
                <p>
                  4.0 <span>(100)</span>
                </p>
              </div>
              <p className="right-box">490,000원~</p>
            </div>
          </div>
          <div className="thum-box">
            <img src={DummyThumbnail} alt="thumbnail" />
            <p className="thum-tit">
              동대문 사입, 의류매장운영 10년차가 쉽게 알려줍니다.
            </p>
            <div className="review-area">
              <div className="left-box">
                <StarIcon />
                <p>
                  4.0 <span>(100)</span>
                </p>
              </div>
              <p className="right-box">490,000원~</p>
            </div>
          </div>
        </div>
        <Link to="/vod">MORE VIEW</Link>
      </div>
    </VodSectionWrapper>
  );
}
const VodSectionWrapper = styled.div`
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
  .thum-box {
    img {
      height: 200px;
      object-fit: cover;
      border-radius: 6px;
    }
    .thum-tit {
      font-size: 17px;
      font-weight: 500;
      line-height: 1.4;
      padding: 5px 0 15px;
    }
    .review-area {
      display: grid;
      grid-template-columns: 1fr;
      grid-auto-flow: column;
      align-items: center;
      .left-box {
        svg {
          display: inline-block;
          vertical-align: middle;
          margin-right: 5px;
          width: 20px !important;
          height: 20px !important;
        }
        p {
          display: inline-block;
          vertical-align: middle;

          span {
            color: ${theme.colors.gray};
          }
        }
      }
      .right-box {
        font-weight: 600;
      }
    }
  }
`;
export default VodSection;

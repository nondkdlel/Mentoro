import { Link } from "react-router-dom";
import styled from "styled-components";

import { StatusList, StatusBox, LinkBtnStyle } from "./styles";

import DummyThumnail from "@images/dummy-thum.png";
import AddIcon from "@images/icon/add-icon.svg?react";

function MyPortfolio() {
  return (
    <MyPortfolioWrapper>
      <Link
        className="link-btn"
        type="button"
        to="/mypage/seller/portfolio/create"
      >
        <AddIcon />
        <p>포트폴리오 등록하기</p>
      </Link>
      <StatusList>
        <StatusBox>
          <div className="left-box grid-aside">
            <img src={DummyThumnail} alt="thumbnail" />
          </div>
          <div className="right-box grid-top">
            <div className="inner-box">
              <div className="inner-left-box">
                <p className="date">2개월</p>
                <p className="product-tit">
                  APP앱개발 전문 업체 노빌더 기획/디자인/개발까지
                </p>
                <p className="role">백엔드 총괄 기획</p>
              </div>
            </div>
            <p className="price">5,000원</p>
          </div>
          <div className="btn-area grid-bottom">
            <input
              type="button"
              className="service-cancel reverse-btn"
              value="서비스 삭제"
            />
            <input
              type="button"
              className="edit-btn default-btn"
              value="수정하기"
            />
          </div>
        </StatusBox>
      </StatusList>
    </MyPortfolioWrapper>
  );
}
const MyPortfolioWrapper = styled.div`
  ${LinkBtnStyle}
`;
export default MyPortfolio;

import { Link } from "react-router-dom";
import styled from "styled-components";

import { StatusList, StatusBox, LinkBtnStyle } from "./styles";

import DummyThumnail from "@images/dummy-thum.png";
import AddIcon from "@images/icon/add-icon.svg?react";

function MyService() {
  return (
    <MyServiceWrapper>
      <Link
        className="link-btn"
        type="button"
        to="/mypage/service/enroll/step1"
      >
        <AddIcon />
        <p>서비스 추가하기</p>
      </Link>
      <StatusList>
        <StatusBox>
          <div className="left-box grid-aside">
            <img src={DummyThumnail} alt="thumbnail" />
          </div>
          <div className="right-box grid-top">
            <div className="inner-box">
              <div className="inner-left-box">
                <p className="date">2024.12.12</p>
                <p className="product-tit">
                  APP앱개발 전문 업체 노빌더 기획/디자인/개발까지
                </p>
              </div>
              <div className="inner-right-box">
                <p className="status ing">판매중</p>
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
              className="service-edit default-btn"
              value="서비스 편집"
            />
          </div>
        </StatusBox>
      </StatusList>
    </MyServiceWrapper>
  );
}
const MyServiceWrapper = styled.div`
  ${LinkBtnStyle}
`;

export default MyService;

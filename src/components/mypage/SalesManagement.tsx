import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { StatusList, StatusBox } from "./styles";
import { theme } from "@style/theme";

import TabMenu from "@comp/common/TabMenu";

function SalesManagement() {
  const navigate = useNavigate();
  return (
    <SalesManagementWrapper>
      <SearchBox>
        <select name="" id="">
          <option value="">전체</option>
          <option value="">진행중</option>
          <option value="">거래 완료</option>
          <option value="">주문 취소</option>
        </select>
        <input type="text" />
        <input type="button" value="검색" />
      </SearchBox>
      <TabMenu
        tabList={["전체", "진행중", "거래 완료", "주문 취소"]}
        $fontSize="20px"
        $padding="0 60px 10px 0"
      />
      <StatusList>
        <StatusBox>
          <div className="left-box grid-aside">
            <img src="/images/dummy-thum.png" alt="" />
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
                <p className="status ing">진행중</p>
              </div>
            </div>
            <p className="price">5,000원</p>
          </div>
          <div className="btn-area grid-bottom">
            <input
              type="button"
              className="review-btn default-btn "
              value="리뷰 확인"
              onClick={() => navigate("/mypage/seller/review/create")}
            />
          </div>
        </StatusBox>
      </StatusList>
    </SalesManagementWrapper>
  );
}

const SalesManagementWrapper = styled.div`
  padding: 50px 0 0;
`;
const SearchBox = styled.div`
  padding: 0 0 50px;
  display: grid;
  grid-template-columns: 2fr 4fr 1fr;
  gap: 15px;
  select {
    border: 1px solid ${theme.colors.borderColor};
    border-radius: 4px;
    font-size: 16px;
    padding: 8px 10px;
  }
  input[type="text"] {
    border: 1px solid ${theme.colors.borderColor};
    font-size: 16px;
    padding: 8px 10px;
    border-radius: 4px;
  }
  input[type="button"] {
    background-color: ${theme.colors.mainColor};
    border: 1px solid ${theme.colors.mainColor};
    color: ${theme.colors.white};
    font-size: 16px;
    border-radius: 4px;
  }
`;
export default SalesManagement;

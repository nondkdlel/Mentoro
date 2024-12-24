import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { theme } from "@style/theme";

interface DetailPropsType {
  url: string;
}
function DetailRightContent({ url }: DetailPropsType) {
  const navigate = useNavigate();
  const [selectType, setSelectType] = useState(0);
  const [like, setLike] = useState(true);
  const typeList = [
    "5분 전화 상담",
    "15분 전화 상담",
    "5분 채팅 상담",
    "15분 채팅 상담",
  ];

  const onLike = (e: any) => {
    const target = e.target;
    setLike(!like);
    like
      ? (target.src = "/images/icon/favorite-on-icon.svg")
      : (target.src = "/images/icon/favorite-border-icon.svg");
  };

  return (
    <DetailRightContentWrapper>
      <UserIconArea>
        <button>
          <img src="/images/icon/share-icon.svg" alt="공유하기" />
        </button>
        <button onClick={onLike}>
          <img src="/images/icon/favorite-border-icon.svg" alt="좋아요" />
        </button>
      </UserIconArea>
      <InnerBox>
        <Consultation>
          <div className="section">
            <p className="thead type">상담 종류 선택</p>
            <div className="select-type">
              {typeList.map((type, idx) => (
                <button
                  key={idx}
                  className={selectType === idx ? "on" : ""}
                  onClick={() => setSelectType(idx)}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>
          <div className="section">
            <p className="thead date">희망 상담 날짜</p>
            <div className="select-type">
              <input
                id="dateSelect"
                type="date"
                placeholder="날짜를 선택해주세요."
              />
            </div>
          </div>
          <div className="section">
            <p className="thead time">희망 상담 시간</p>
            <div className="select-type">
              <select name="" id="">
                <option value="09:00">09:00</option>
                <option value="10:00">10:00</option>
                <option value="11:00">11:00</option>
                <option value="12:00">12:00</option>
                <option value="13:00">13:00</option>
                <option value="14:00">14:00</option>
                <option value="15:00">15:00</option>
                <option value="16:00">16:00</option>
                <option value="17:00">17:00</option>
                <option value="18:00">18:00</option>
              </select>
            </div>
          </div>
        </Consultation>
        <TotalPrice>
          <dl className="price-box">
            <dt>가격</dt>
            <dd>5,000원</dd>
          </dl>
          <div className="btn-area">
            <input
              type="button"
              value="구매하기"
              onClick={() => navigate(url)}
            />
            <input type="button" value="채팅하기" />
          </div>
        </TotalPrice>
      </InnerBox>
    </DetailRightContentWrapper>
  );
}
const DetailRightContentWrapper = styled.div``;
const UserIconArea = styled.div`
  display: flex;
  flex-direction: row-reverse;
  margin-bottom: 50px;
  button {
    width: 30px;
    height: 30px;
    border: none;
    background-color: ${theme.colors.transparent};
    margin-left: 10px;
  }
`;
const InnerBox = styled.div`
  padding: 50px 20px;
  border: 1px solid ${theme.colors.borderColor};
`;
const Consultation = styled.div`
  .section {
    margin-bottom: 30px;
    .thead {
      font-size: 18px;
      padding-bottom: 15px;
      &::before {
        content: "";
        display: inline-block;
        vertical-align: middle;
        width: 20px;
        height: 20px;
        background-repeat: no-repeat;
        margin-right: 5px;
      }
      &.type::before {
        background-image: url("/images/icon/tel-icon.svg");
      }
      &.date::before {
        background-image: url("/images/icon/date-icon.svg");
      }
      &.time::before {
        background-image: url("/images/icon/time-icon.svg");
      }
    }
    button {
      background-color: ${theme.colors.transparent};
      border: 1px solid ${theme.colors.borderColor};
      border-radius: 4px;
      margin: 0 10px 10px 0;
      padding: 5px 0;
      width: 120px;
      font-size: 15px;
      color: ${theme.colors.gray};
      &.on {
        color: ${theme.colors.mainColor};
        border: 1px solid ${theme.colors.mainColor};
      }
    }
    input[type="date"] {
      width: 100%;
      font-size: 16px;
      padding: 8px;
      border: 1px solid ${theme.colors.borderColor};
    }
    select {
      width: 100%;
      border: 1px solid ${theme.colors.borderColor};
      font-size: 16px;
      padding: 8px;
    }
  }
`;
const TotalPrice = styled.div`
  dl {
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-flow: column;
  }
  dt,
  dd {
    display: inline-block;
    vertical-align: middle;
    font-size: 18px;
  }
  dt {
    &::before {
      content: "";
      display: inline-block;
      vertical-align: middle;
      width: 20px;
      height: 20px;
      background-image: url("/images/icon/withdraw-success-icon.svg");
      margin-right: 5px;
    }
  }
  dd {
    font-weight: 600;
  }
  .btn-area {
    padding-top: 30px;
    input[type="button"] {
      display: block;
      width: 100%;
      font-size: 18px;
      padding: 14px 0;
      border-radius: 6px;
      font-weight: 500;
      &:first-child {
        margin-bottom: 12px;
        border: 1px solid ${theme.colors.mainColor};
        color: ${theme.colors.white};
        background-color: ${theme.colors.mainColor};
      }
      &:last-child {
        border: 1px solid ${theme.colors.subColor};
        color: ${theme.colors.mainColor};
        background-color: ${theme.colors.subColor};
      }
    }
  }
`;

export default DetailRightContent;

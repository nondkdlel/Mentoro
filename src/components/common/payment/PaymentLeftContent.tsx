import { useState } from "react";
import styled from "styled-components";

import { theme } from "@style/theme";

function PaymentLeftContent() {
  const [payType, setPayType] = useState(0);
  const payTypeList = ["신용카드", "토스페이", "카카오페이", "네이버페이"];

  return (
    <PaymentLeftContentWrapper>
      <div className="section">
        <p className="thead">주문내역</p>
        <div className="product">
          <img src="/images/dummy-thum.png" alt="" />
          <div className="product-txt">
            <p className="product-name">
              APP앱개발 전문 업체 노빌더 기획/디자인/개발까지
            </p>
            <p className="option">- 전화 상담 10분</p>
          </div>
        </div>
      </div>
      <div className="section">
        <p className="thead">쿠폰 / 캐시</p>
        <dl>
          <dt>사용 가능한 쿠폰</dt>
          <dd>
            <select name="" id="">
              <option value="">사용 가능한 쿠폰 없음</option>
            </select>
          </dd>
        </dl>
        <dl>
          <dt>캐시 사용</dt>
          <dd>
            <div className="cash-input">
              <input type="text" name="" id="" placeholder="0원" />
              <input type="button" value="전액 사용" />
            </div>
            <span className="asset-cash">보유 캐시: 1,000원</span>
          </dd>
        </dl>
      </div>
      <div className="section">
        <p className="thead">결제방법</p>
        <div className="type-list">
          {payTypeList.map((type, idx) => (
            <button
              key={idx}
              className={payType === idx ? "on" : ""}
              onClick={() => setPayType(idx)}
            >
              {type}
            </button>
          ))}
        </div>
      </div>
      <div className="section">
        <p className="thead">세금 계산서 신청</p>
        <label htmlFor="apply-on">
          <input
            type="radio"
            id="apply-on"
            name="apply"
            value="세금 계산서 발행"
            defaultChecked
          />
          세금 계산서 발행
        </label>
        <label htmlFor="apply-off">
          <input
            type="radio"
            id="apply-off"
            name="apply"
            value="세금 계산서 미발행"
          />
          세금 계산서 미발행
        </label>
      </div>
    </PaymentLeftContentWrapper>
  );
}

const PaymentLeftContentWrapper = styled.div`
  .section {
    margin-bottom: 35px;
    .thead {
      font-size: 20px;
      font-weight: 500;
      border-bottom: 1px solid ${theme.colors.borderColor};
      line-height: 1.8;
      margin-bottom: 20px;
    }
    .product {
      display: grid;
      grid-template-columns: 4fr 7fr;
      gap: 30px;
      img {
        height: 140px;
        object-fit: cover;
      }
      .product-name {
        font-size: 22px;
        line-height: 1.4;
        padding-bottom: 20px;
      }
      .option {
        font-size: 15px;
        color: ${theme.colors.gray};
      }
    }
    dl {
      display: grid;
      grid-template-columns: 3fr 7fr;
      margin-bottom: 20px;
      align-items: center;
      dt {
        font-size: 17px;
      }
      dd {
        select {
          width: 100%;
          font-size: 16px;
          padding: 12px;
          border: 1px solid ${theme.colors.borderColor};
          border-radius: 4px;
        }
        .cash-input {
          display: grid;
          grid-template-columns: 7fr 3fr;
          gap: 10px;
          margin-bottom: 10px;
          input {
            font-size: 16px;
            padding: 12px;
            border-radius: 4px;
          }
          input[type="text"] {
            border: 1px solid ${theme.colors.borderColor};
          }
          input[type="button"] {
            border: 1px solid ${theme.colors.mainColor};
            background-color: ${theme.colors.mainColor};
            color: ${theme.colors.white};
          }
        }
        .asset-cash {
          color: ${theme.colors.gray};
          font-size: 14px;
        }
      }
    }
    .type-list {
      button {
        width: 140px;
        font-size: 16px;
        padding: 10px 0;
        margin-right: 20px;
        border: 1px solid ${theme.colors.borderColor};
        background-color: ${theme.colors.transparent};
        border-radius: 4px;
        color: ${theme.colors.gray};
        &.on {
          border: 1px solid ${theme.colors.mainColor};
          color: ${theme.colors.mainColor};
        }
      }
    }
    input[type="radio"] {
      margin-right: 10px;
    }
    label {
      display: block;
      padding-bottom: 10px;
    }
  }
`;
export default PaymentLeftContent;

import { useState } from "react";
import styled from "styled-components";

import BtnGroup from "@comp/common/BtnGroup";
import { theme } from "@style/theme";

function PaymentRightContent() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <PaymentRightContentWrapper>
      <div className="inner-box">
        <div className="section">
          <dl>
            <dt>주문 금액</dt>
            <dd>5,000원</dd>
          </dl>
          <dl>
            <dt>쿠폰 할인</dt>
            <dd>0원</dd>
          </dl>
          <dl>
            <dt>MENTORO 캐시</dt>
            <dd>0원</dd>
          </dl>
        </div>
        <ul className="total-price">
          <li>
            총 결제 금액<span>(VAT) 포함</span>{" "}
          </li>
          <li>5,000원</li>
        </ul>
        <div className="notice-area">
          <div className="click-noti">
            <p>결제 전 안내사항</p>
            <button onClick={() => setIsOpen(!isOpen)}></button>
          </div>
          {isOpen && (
            <div className="noti-content">
              <p>
                환불 규정 유의사항 동의
                <br />
                · 전문가가 의뢰인의 주문 의뢰 내용에 맞게 용역을 제공하는 맞춤형
                상품의 경우, 가분하거나 재판매하기 어려운 성격의 상품입니다.
                주문 의뢰 내용에 따라 용역 등의 작업이 진행된 이후에는
                「전자상거래법」 제17조 2항에 따라 원칙적으로 청약철회가
                제한됩니다. 의뢰인은 서비스 상세페이지에 명시된 취소·환불 규정
                또는 전문가와 별도 합의한 내용에 따라 청약철회를 요청할 수
                있습니다.
                <br />· 디지털 형태로 제작된 콘텐츠를 제공하는 상품의 경우,
                콘텐츠 제공이 개시되면 서비스 제공이 완료된 것으로 간주합니다.
                콘텐츠 제공이 개시된 이후에는 「전자상거래법」 제17조 2항에 따라
                원칙적으로 청약철회가 제한됩니다. 의뢰인은 서비스 상세페이지에
                등록된 디지털 콘텐츠의 일부를 미리 확인한 후 서비스를 구매할 수
                있습니다.
              </p>
            </div>
          )}
        </div>
        <p className="comment-txt">위 내용을 확인하였고, 결제에 동의합니다.</p>
        <BtnGroup
          isDouble={false}
          singleBtnText="구매하기"
          singleType="submit"
          width="100%"
        />
      </div>
    </PaymentRightContentWrapper>
  );
}
const PaymentRightContentWrapper = styled.div`
  .inner-box {
    padding: 30px 20px;
    border: 1px solid ${theme.colors.borderColor};
  }
  .section {
    dl {
      display: grid;
      grid-template-columns: 1fr;
      grid-auto-flow: column;
      align-items: center;
      padding-bottom: 12px;
    }
    dt {
      font-size: 16px;
    }
    dd {
      font-size: 17px;
      font-weight: 600;
    }
  }
  .total-price {
    background-color: ${theme.colors.backgroudColor};
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-flow: column;
    align-items: center;
    padding: 20px;
    margin: 20px 0 30px;
    border-radius: 6px;
    li {
      font-size: 18px;
      &:first-child {
        font-weight: 500;
      }
      &:last-child {
        font-weight: 600;
      }
    }
  }
  .notice-area {
    .click-noti {
      display: grid;
      grid-template-columns: 1fr;
      grid-auto-flow: column;
      align-items: center;
      margin-bottom: 20px;
      p {
        color: ${theme.colors.gray};
      }
      button {
        border: none;
        background-color: ${theme.colors.transparent};
        width: 20px;
        height: 20px;
        margin: 0 10px 5px 0;
        &::before {
          content: "";
          display: block;
          width: 7px;
          height: 7px;
          border-top: 2px solid #000;
          border-right: 2px solid #000;
          transform: rotate(135deg);
        }
      }
    }
    .noti-content {
      background-color: ${theme.colors.backgroudColor};
      padding: 15px;
      border-radius: 6px;
      margin-bottom: 30px;
      p {
        font-size: 14px;
        color: ${theme.colors.gray};
        line-height: 1.6;
      }
    }
  }
  .comment-txt {
    text-align: center;
    padding-bottom: 30px;
    font-size: 15px;
    color: ${theme.colors.gray};
  }
`;
export default PaymentRightContent;

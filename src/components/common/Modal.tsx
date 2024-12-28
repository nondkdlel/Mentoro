import { useState } from "react";
import styled from "styled-components";

import { theme } from "@style/theme";
import { proxyModalStatus } from "@valtio/common/ModalStatus";

interface ModalPropstype {
  isCharge?: boolean;
  isRefund?: boolean;
  title?: string;
  chargePriceList?: string[];
}

function Modal({
  isCharge = false,
  isRefund = false,
  title,
  chargePriceList,
}: ModalPropstype) {
  const [activeBtn, setActiveBtn] = useState(0);

  const onClose = () => {
    isCharge ? (proxyModalStatus.isCharge = false) : "";
    isRefund ? (proxyModalStatus.isRefund = false) : "";
  };
  return (
    <ModalWrapper>
      <InnerWrapper>
        <ModalHeader>
          <button className="close-btn" onClick={onClose}>
            <img src="/images/icon/close-icon.png" alt="" />
          </button>
        </ModalHeader>
        <h1>{title}</h1>
        {isCharge && chargePriceList && (
          <ModalContent>
            <div className="list-box">
              {chargePriceList.map((list, idx) => (
                <button
                  key={idx}
                  className={activeBtn === idx ? "on" : ""}
                  onClick={() => setActiveBtn(idx)}
                >
                  {list}
                </button>
              ))}
            </div>
          </ModalContent>
        )}
        {isRefund && (
          <ModalContent>
            <input
              type="text"
              name=""
              id=""
              placeholder="환불 금액을 입력해주세요."
            />
          </ModalContent>
        )}
        <ModalFooter>
          <input type="button" value="구매하기" />
        </ModalFooter>
      </InnerWrapper>
    </ModalWrapper>
  );
}
const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 3;
`;
const InnerWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 440px;
  padding: 30px;
  background-color: ${theme.colors.white};
  border-radius: 12px;
  h1 {
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 30px;
    &::before {
      content: "";
      display: inline-block;
      vertical-align: middle;
      width: 20px;
      height: 20px;
      background-image: url("/images/icon/withdraw-success-icon.svg");
      background-repeat: no-repeat;
      margin-right: 10px;
    }
  }
`;
const ModalHeader = styled.div`
  display: flex;
  flex-direction: row-reverse;
  .close-btn {
    width: 30px;
    height: 30px;
    background-color: ${theme.colors.transparent};
    border: none;
    img {
      object-fit: contain;
    }
  }
`;
const ModalContent = styled.div`
  .list-box {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 10px;
    button {
      background-color: ${theme.colors.transparent};
      border: 1px solid ${theme.colors.borderColor};
      color: ${theme.colors.gray};
      border-radius: 4px;
      font-size: 16px;
      padding: 7px 10px;
      &.on {
        color: ${theme.colors.mainColor};
        border: 1px solid ${theme.colors.mainColor};
      }
    }
  }
  input[type="text"] {
    width: 100%;
    border: 1px solid ${theme.colors.borderColor};
    padding: 12px;
    font-size: 16px;
    border-radius: 4px;
  }
`;
const ModalFooter = styled.div`
  padding: 30px 0 0;
  input[type="button"] {
    width: 100%;
    padding: 12px 0;
    font-size: 17px;
    color: ${theme.colors.white};
    border: 1px solid ${theme.colors.mainColor};
    background-color: ${theme.colors.mainColor};
    border-radius: 6px;
  }
`;
export default Modal;

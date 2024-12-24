import { Link } from "react-router-dom";
import styled from "styled-components";

import { theme } from "@style/theme";

function AlarmModal() {
  return (
    <AlarmModalWrapper>
      <div className="date">
        <p>2024년 12월 24일(화)</p>
      </div>
      <Link className="alarm-box" to="">
        <img src="/images/dummy-profile.png" alt="" />
        <p className="alarm-txt">
          홍길동 님의 평가가 작성되어 구매가 확정되었습니다.
        </p>
      </Link>
    </AlarmModalWrapper>
  );
}
const AlarmModalWrapper = styled.div`
  position: absolute;
  top: 95px;
  right: 80px;
  width: 365px;
  height: 500px;
  overflow-y: auto;
  background-color: ${theme.colors.white};
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 0 16px rgba(0, 0, 0, 0.2);
  z-index: 10;
  .date {
    text-align: center;
    p {
      display: inline-block;
      text-align: center;
      padding: 10px 15px;
      background-color: ${theme.colors.backgroudColor};
      border-radius: 20px;
      font-size: 15px;
      color: ${theme.colors.gray};
      font-weight: 600;
    }
  }
  .alarm-box {
    display: grid;
    grid-template-columns: 2fr 8fr;
    gap: 20px;
    padding: 20px 0 0;
    img {
      border-radius: 50%;
    }
    .alarm-txt {
      font-size: 15px;
      line-height: 1.4;
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

export default AlarmModal;

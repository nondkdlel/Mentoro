import styled from "styled-components";

import { theme } from "@style/theme";

interface HoldingStatusPropsType {
  isDouble?: boolean;
  firstLeftText?: string;
  firstRightText?: string;
  secondLeftText?: string;
  secondRightText?: string;
  isButton?: boolean;
  leftBtnText?: string;
  rightBtnText?: string;
  leftOnClick?: () => void;
  RightOnClick?: () => void;
}
function HoldingStatus({
  isDouble = false,
  firstLeftText,
  firstRightText,
  secondLeftText,
  secondRightText,
  isButton = false,
  leftBtnText,
  rightBtnText,
  leftOnClick,
  RightOnClick,
}: HoldingStatusPropsType) {
  return (
    <>
      <HoldingStatusList>
        <dl>
          <dt>{firstLeftText}</dt>
          <dd>{firstRightText}</dd>
        </dl>
        {isDouble && (
          <dl>
            <dt>{secondLeftText}</dt>
            <dd>{secondRightText}</dd>
          </dl>
        )}
      </HoldingStatusList>

      {isButton && (
        <ButtonArea>
          <input type="button" value={leftBtnText} onClick={leftOnClick} />
          <input type="button" value={rightBtnText} onClick={RightOnClick} />
        </ButtonArea>
      )}
    </>
  );
}

const HoldingStatusList = styled.div`
  dl {
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-flow: column;
    border: 1px solid ${theme.colors.borderColor};
    border-radius: 6px;
    padding: 30px 20px;
    font-size: 18px;
    margin-bottom: 20px;
    &:nth-child(1) {
      dt::before {
        background-image: url("/images/icon/withdraw-success-icon.svg");
      }
    }
    &:nth-child(2) {
      dt::before {
        background-image: url("/images/icon/withdraw-finish-icon.svg");
      }
      dt,
      dd {
        color: ${theme.colors.gray};
      }
    }
    dt {
      font-size: 18px;
      &::before {
        content: "";
        display: inline-block;
        vertical-align: middle;
        width: 20px;
        height: 20px;
        margin-right: 10px;
      }
    }
    dd {
      font-size: 20px;
      font-weight: 600;
    }
  }
`;
const ButtonArea = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  padding: 30px 0 60px;
  input[type="button"] {
    font-size: 17px;
    padding: 16px 0;
    border-radius: 6px;
    &:nth-child(1) {
      background-color: ${theme.colors.mainColor};
      color: ${theme.colors.white};
      border: 1px solid ${theme.colors.mainColor};
    }
    &:nth-child(2) {
      background-color: transparent;
      color: ${theme.colors.mainColor};
      border: 1px solid ${theme.colors.mainColor};
    }
  }
`;
export default HoldingStatus;

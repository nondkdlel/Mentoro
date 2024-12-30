import styled from "styled-components";

import { theme } from "@style/theme";

import WithdrawSuccessIcon from "@images/icon/withdraw-success-icon.svg?react";
import WithdrawFinishIcon from "@images/icon/withdraw-finish-icon.svg?react";
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
          <dt>
            <WithdrawSuccessIcon />
            {firstLeftText}
          </dt>
          <dd>{firstRightText}</dd>
        </dl>
        {isDouble && (
          <dl>
            <dt>
              <WithdrawFinishIcon />
              {secondLeftText}
            </dt>
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
    padding: 30px;
    font-size: 18px;
    margin-bottom: 20px;

    &:nth-child(2) {
      dt,
      dd {
        color: ${theme.colors.gray};
      }
    }
    dt {
      font-size: 18px;
      svg {
        display: inline-block;
        vertical-align: middle;
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

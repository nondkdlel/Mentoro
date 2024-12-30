import styled from "styled-components";

import { theme } from "@style/theme";

interface BtnGroupPropsType {
  isDouble?: boolean;
  singleBtnText?: string;
  doubleBtnText?: string;
  singleType?: string;
  doubleType?: string;
  $padding?: string;
  singleOnClick?: () => void;
  doubleOnClick?: () => void;
  width?: string;
}
function BtnGroup({
  width,
  $padding,
  singleType,
  doubleType,
  isDouble,
  singleBtnText,
  doubleBtnText,
  singleOnClick,
  doubleOnClick,
}: BtnGroupPropsType) {
  return (
    <BtnGroupArea $padding={$padding}>
      {isDouble ? (
        <input
          type={doubleType}
          value={doubleBtnText}
          className="reverse"
          onClick={doubleOnClick}
          style={{ width: width ? width : "200px" }}
        />
      ) : (
        ""
      )}
      <input
        type={singleType}
        value={singleBtnText}
        onClick={singleOnClick}
        style={{ width: width ? width : "200px" }}
      />
    </BtnGroupArea>
  );
}

const BtnGroupArea = styled.div<BtnGroupPropsType>`
  text-align: center;
  margin: 0 auto;
  padding: ${({ $padding }) => $padding ?? "0"};
  input {
    text-align: center;
    background-color: ${theme.colors.mainColor};
    border: 1px solid ${theme.colors.mainColor};
    color: ${theme.colors.white};
    padding: 14px 0;
    border-radius: 6px;
    font-size: 16px;
  }
  input.reverse {
    background-color: ${theme.colors.subColor};
    border: 1px solid ${theme.colors.subColor};
    color: ${theme.colors.mainColor};
    margin-right: 20px;
  }
`;

export default BtnGroup;

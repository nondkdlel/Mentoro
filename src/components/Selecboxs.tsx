import styled from "styled-components";
import { theme } from "@style/theme";

function SelectBoxs() {
  return (
    <SelectBoxArea>
      <select name="" id="">
        <option value="">강의 형태</option>
      </select>
      <select name="" id="">
        <option value="">서비스 종류</option>
      </select>
      <select name="" id="">
        <option value="">강의 주제</option>
      </select>
    </SelectBoxArea>
  );
}
const SelectBoxArea = styled.div`
  select {
    font-size: 16px;
    padding: 6px 10px;
    margin-right: 20px;
    border: 1px solid ${theme.colors.gray};
    border-radius: 4px;
    color: ${theme.colors.gray};
  }
`;

export default SelectBoxs;

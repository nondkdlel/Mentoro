import { theme } from "@style/theme";
import styled from "styled-components";

interface ListInfoBoxPropsType {
  title: string;
  date: string;
  price: string;
}
function ListInfoBox({ title, date, price }: ListInfoBoxPropsType) {
  return (
    <ListInfoBoxWrapper>
      <p className="left-box">{title}</p>
      <ul className="right-box">
        <li>{date}</li>
        <li>{price}</li>
      </ul>
    </ListInfoBoxWrapper>
  );
}
const ListInfoBoxWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-flow: column;
  align-items: center;
  background-color: ${theme.colors.backgroudColor};
  border-radius: 6px;
  padding: 20px 30px;
  margin-bottom: 20px;
  .left-box {
    font-size: 17px;
    font-weight: 500;
  }
  .right-box {
    text-align: right;
    li {
      line-height: 1.6;
      &:first-child {
        color: ${theme.colors.gray};
        font-size: 15px;
      }
      &:last-child {
        font-size: 18px;
        font-weight: 700;
      }
    }
  }
`;
export default ListInfoBox;

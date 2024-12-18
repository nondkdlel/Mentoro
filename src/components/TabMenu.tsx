import { useState } from "react";
import styled from "styled-components";

import { theme } from "@style/theme";

interface titleType {
  title: (title: string) => void;
}
function TabMenu({ title }: titleType) {
  const tabList: string[] = [
    "BLOG",
    "IT 개발",
    "영상/사진",
    "디자인",
    "부동산",
    "기타",
  ];
  const [active, setActive] = useState<number>(0);
  const onActive = (idx: number, tabName: string) => {
    setActive(idx);
    title(tabName);
  };
  return (
    <TabContainer>
      {tabList.map((tabName, idx) => (
        <li
          className={idx === active ? "active" : ""}
          key={idx}
          onClick={() => onActive(idx, tabName)}
        >
          {tabName}
        </li>
      ))}
    </TabContainer>
  );
}

const TabContainer = styled.ul`
  border-bottom: 1px solid ${theme.colors.gray};

  li {
    display: inline-block;
    vertical-align: middle;
    font-size: 20px;
    color: ${theme.colors.gray};
    padding: 10px 35px 10px 0;
    font-weight: 500;
    cursor: pointer;
  }
  li.active {
    color: ${theme.colors.mainColor};
  }
`;

export default TabMenu;

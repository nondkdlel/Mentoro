import { useSnapshot } from "valtio";
import styled from "styled-components";

import { theme } from "@style/theme";
import { proxyActiveTab } from "@valtio/common/ActiveTab";
import { useEffect } from "react";

interface tabListStylePropsType {
  $fontSize?: string;
  $padding?: string;
}
interface tabListPropsType extends tabListStylePropsType {
  tabList: string[];
}
function TabMenu({ tabList, $fontSize, $padding }: tabListPropsType) {
  useEffect(() => {
    proxyActiveTab.tabId = 0;
  }, []);
  const { tabId } = useSnapshot(proxyActiveTab);
  return (
    <TabMenuWrapper $fontSize={$fontSize} $padding={$padding}>
      {tabList.map((tabName, idx) => (
        <button
          className={tabId === idx ? "active" : ""}
          key={idx}
          onClick={() => (proxyActiveTab.tabId = idx)}
        >
          {tabName}
        </button>
      ))}
    </TabMenuWrapper>
  );
}

const TabMenuWrapper = styled.div<tabListStylePropsType>`
  border-bottom: 1px solid ${theme.colors.gray};

  button {
    display: inline-block;
    vertical-align: middle;
    font-size: ${({ $fontSize }) => ($fontSize ? $fontSize : "22px")};
    padding: ${({ $padding }) => ($padding ? $padding : "10px 40px 10px 0")};
    color: ${theme.colors.gray};
    font-weight: 500;
    border: none;
    background-color: ${theme.colors.transparent};
  }
  button.active {
    color: ${theme.colors.mainColor};
  }
`;

export default TabMenu;

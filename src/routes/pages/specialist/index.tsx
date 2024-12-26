import styled from "styled-components";

import TabMenu from "@comp/common/TabMenu";
import SelectBoxs from "@comp/Selecboxs";
import ProductBox from "@comp/ProductBox";

import { ContentContainer, theme } from "@style/theme";
import { proxyActiveTab } from "@valtio/common/ActiveTab";
import { useSnapshot } from "valtio";

function Specialist() {
  const { tabId } = useSnapshot(proxyActiveTab);
  return (
    <SpecialListWrapper>
      <TabMenu
        tabList={["BLOG", "IT 개발", "영상/사진", "디자인", "부동산", "기타"]}
      />
      <Title>
        {tabId === 0
          ? "BLOG"
          : tabId === 1
          ? "IT 개발"
          : tabId === 2
          ? "영상/사진"
          : tabId === 3
          ? "디자인"
          : tabId === 4
          ? "부동산"
          : tabId === 5
          ? "기타"
          : ""}
      </Title>
      <SelectBoxs />
      <ProductList>
        <ProductBox />
        <ProductBox />
        <ProductBox />
        <ProductBox />
        <ProductBox />
      </ProductList>
    </SpecialListWrapper>
  );
}
const SpecialListWrapper = styled.div`
  ${ContentContainer}
`;
const Title = styled.h1`
  padding: 50px 0 30px;
  font-size: 34px;
  color: ${theme.colors.mainColor};
`;
const ProductList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 50px 30px;
  padding: 50px 0 0;
`;
export default Specialist;

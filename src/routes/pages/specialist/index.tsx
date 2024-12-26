import { useSnapshot } from "valtio";

import TabMenu from "@comp/common/TabMenu";
import SelectBoxs from "@comp/Selecboxs";
import ProductBox from "@comp/ProductBox";

import { proxyActiveTab } from "@valtio/common/ActiveTab";

import {
  PageLayoutStyle,
  PageTitle,
  ProductWrapper,
} from "@comp/common/styles";

function Specialist() {
  const { tabId } = useSnapshot(proxyActiveTab);
  return (
    <PageLayoutStyle>
      <TabMenu
        tabList={["BLOG", "IT 개발", "영상/사진", "디자인", "부동산", "기타"]}
      />
      <PageTitle>
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
      </PageTitle>
      <SelectBoxs />
      <ProductWrapper>
        <ProductBox url="/specialist/detail" />
        <ProductBox url="/specialist/detail" />
        <ProductBox url="/specialist/detail" />
        <ProductBox url="/specialist/detail" />
        <ProductBox url="/specialist/detail" />
      </ProductWrapper>
    </PageLayoutStyle>
  );
}

export default Specialist;

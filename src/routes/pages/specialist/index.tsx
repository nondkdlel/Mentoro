import { useState } from "react";
import styled from "styled-components";

import TabMenu from "@comp/TabMenu";
import SelectBoxs from "@comp/Selecboxs";
import ProductBox from "@comp/ProductBox";

import { ContentContainer, theme } from "@style/theme";

function Specialist() {
  const [tabNum, setTabNum] = useState<number>(0);
  function onUpdatePage(id: number) {
    setTabNum(id);
  }
  return (
    <SpecialListWrapper>
      <TabMenu onUpdatePage={onUpdatePage} />
      <Title>
        {tabNum === 0
          ? "BLOG"
          : tabNum === 1
          ? "IT 개발"
          : tabNum === 2
          ? "영상/사진"
          : tabNum === 3
          ? "디자인"
          : tabNum === 4
          ? "부동산"
          : tabNum === 5
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

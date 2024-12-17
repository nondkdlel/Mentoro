import { useState } from "react";
import styled from "styled-components";

import TabMenu from "@comp/TabMenu";
import SelectBoxs from "@comp/Selecboxs";
import ProductBox from "@comp/ProductBox";

import { ContentContainer, theme } from "@style/theme";

function Specialist() {
  const [title, setTitle] = useState<string>("BLOG");
  function onTitle(name: string) {
    setTitle(name);
  }
  return (
    <SpecialListWrapper>
      <TabMenu title={onTitle} />
      <Title>{title}</Title>
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

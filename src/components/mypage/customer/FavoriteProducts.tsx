import styled from "styled-components";

import ProductBox from "@comp/ProductBox";

function FavoriteProducts() {
  return (
    <FavoriteProductsWrapper>
      <ProductBox />
      <ProductBox />
      <ProductBox />
      <ProductBox />
    </FavoriteProductsWrapper>
  );
}
const FavoriteProductsWrapper = styled.div`
  padding: 50px 0 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 30px 20px;
`;
export default FavoriteProducts;

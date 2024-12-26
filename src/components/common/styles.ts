import styled from "styled-components";
import { theme, ContentContainer } from "@style/theme";

/* 전문가 센터 && 전차책/VOD 공통 CSS */
export const PageLayoutStyle = styled.div`
  ${ContentContainer}
`;
export const PageTitle = styled.h1`
  padding: 50px 0 30px;
  font-size: 34px;
  color: ${theme.colors.mainColor};
`;
export const ProductWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 50px 30px;
  padding: 50px 0 0;
`;

export const DetailLayoutStyle = styled.div`
  ${ContentContainer}
  display: grid;
  grid-template-columns: 6fr 4fr;
  gap: 80px;
`;

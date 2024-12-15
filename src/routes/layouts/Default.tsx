import { Outlet, ScrollRestoration } from "react-router-dom";
import styled from "styled-components";
import TheHeader from "@comp/layout/TheHeader";
import TheFooter from "@comp/layout/TheFooter";

export default function DefaultLayout() {
  return (
    <>
      <TheHeader />
      <WrapContent>
        <Outlet />
      </WrapContent>
      <TheFooter />
      <ScrollRestoration />
    </>
  );
}
const WrapContent = styled.div`
  min-height: 100vh;
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
`;

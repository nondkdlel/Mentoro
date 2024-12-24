import styled from "styled-components";

import DetailLeftContent from "@comp/common/detail/DetailLeftContent";
import DetailRightContent from "@comp/common/detail/DetailRightContent";
import { ContentContainer } from "@style/theme";

function SpecialistDetail() {
  return (
    <SpecialistDetailWrapper>
      <DetailLeftContent />
      <DetailRightContent url="/specialist/payment" />
    </SpecialistDetailWrapper>
  );
}

const SpecialistDetailWrapper = styled.div`
  ${ContentContainer}
  display: grid;
  grid-template-columns: 6fr 4fr;
  gap: 80px;
`;

export default SpecialistDetail;

import DetailLeftContent from "@comp/common/detail/DetailLeftContent";
import DetailRightContent from "@comp/common/detail/DetailRightContent";
import { DetailLayoutStyle } from "@comp/common/styles";

function SpecialistDetail() {
  return (
    <DetailLayoutStyle>
      <DetailLeftContent />
      <DetailRightContent isCounsel={true} url="/payment" />
    </DetailLayoutStyle>
  );
}

export default SpecialistDetail;

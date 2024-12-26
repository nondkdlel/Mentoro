import DetailLeftContent from "@comp/common/detail/DetailLeftContent";
import DetailRightContent from "@comp/common/detail/DetailRightContent";
import { DetailLayoutStyle } from "@comp/common/styles";

function VodDetail() {
  return (
    <DetailLayoutStyle>
      <DetailLeftContent />
      <DetailRightContent url="/payment" />
    </DetailLayoutStyle>
  );
}
export default VodDetail;

import styled from "styled-components";

import PageStep from "@comp/mypage/service/PageStep";
import FormInput from "@comp/FormInput";
import {
  ServiceEnrollWrapperStyle,
  FormWrapperStyle,
} from "@comp/mypage/service/styles";

import BtnGroup from "@comp/common/BtnGroup";
import { useNavigate } from "react-router-dom";

function ServiceEnrollSetp1() {
  const navigate = useNavigate();
  const nextOnClick = () => {
    navigate("/mypage/service/enroll/step2");
  };
  return (
    <ServiceEnrollWrapper>
      <PageStep active={0} />
      <FormWrapper>
        <FormInput
          type={"input"}
          thead={"제목"}
          placeholder={
            "썸네일 제목을 입력해주세요. ex) 월 매출 4,000만원의 플레이스 최적화 비결"
          }
        />
        <FormInput type={"select"} thead={"카테고리"} />
        <FormInput
          type={"file"}
          thead={"썸네일 이미지"}
          fileId="thumUpdate"
          accept={"image/*"}
        />
        <FormInput
          type={"file"}
          thead={"(선택) 상세 이미지"}
          fileId="detailUpdate"
          accept={"image/*"}
          isMultiple={true}
        />
        <FormInput
          type={"file"}
          thead={"(선택) 동영상 등록"}
          fileId={"videoUpdate"}
          accept={"video/*"}
        />
        <BtnGroup
          isDouble={false}
          padding={"80px 0 0"}
          singleType={"button"}
          singleBtnText="다음으로"
          singleOnClick={nextOnClick}
        />
      </FormWrapper>
    </ServiceEnrollWrapper>
  );
}
const ServiceEnrollWrapper = styled.div`
  ${ServiceEnrollWrapperStyle}
`;
const FormWrapper = styled.div`
  ${FormWrapperStyle};
`;
export default ServiceEnrollSetp1;

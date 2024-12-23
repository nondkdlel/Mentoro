import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import PageStep from "@comp/mypage/service/PageStep";
import FormInput from "@comp/FormInput";
import {
  ServiceEnrollWrapperStyle,
  FormWrapperStyle,
} from "@comp/mypage/service/styles";

import BtnGroup from "@comp/common/BtnGroup";

function ServiceEnrollStep2() {
  const navigate = useNavigate();
  const prevOnclick = () => {
    navigate("/mypage/service/enroll/step1");
  };
  const nextOnclick = () => {
    navigate("/mypage/service/enroll/step3");
  };
  return (
    <ServiceEnrollWrapper>
      <PageStep active={1} />
      <FormWrapper>
        <FormInput
          type={"input"}
          thead={"제목"}
          placeholder={"상품 제목에 대해 작성해주세요. ex) 비법서 전자책"}
        />
        <FormInput
          type={"input"}
          thead={"가격"}
          placeholder={
            "상품 가격을 작성해주세요 (단, VAT 포함가로 작성해주세요.)"
          }
        />
        <FormInput
          type={"input"}
          thead={"설명"}
          placeholder={
            "상품 내용에 대해 간략히 작성해주세요. ex)PDF 전자책, 이론서, 5분 상담 채팅 진행 등"
          }
        />
        <BtnGroup
          isDouble={true}
          padding={"80px 0 0"}
          singleType={"button"}
          doubleType="button"
          singleBtnText="다음으로"
          doubleBtnText="이전으로"
          singleOnClick={nextOnclick}
          doubleOnClick={prevOnclick}
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
export default ServiceEnrollStep2;

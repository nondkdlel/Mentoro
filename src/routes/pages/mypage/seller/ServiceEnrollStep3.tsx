import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import PageStep from "@comp/mypage/service/PageStep";
import FormInput from "@comp/FormInput";
import {
  ServiceEnrollWrapperStyle,
  FormWrapperStyle,
} from "@comp/mypage/service/styles";

import BtnGroup from "@comp/common/BtnGroup";

function ServiceEnrollStep3() {
  const navigate = useNavigate();
  const prevOnclick = () => {
    navigate("/mypage/service/enroll/step2");
  };

  return (
    <ServiceEnrollWrapper>
      <PageStep active={1} />
      <FormWrapper>
        <FormInput
          type={"textarea"}
          thead={"서비스 상세 설명"}
          placeholder={
            "해당 서비스의 상세 설명 및 전문가님에 대한 상세 설명을 작성해주세요."
          }
        />
        <FormInput
          type={"textarea"}
          thead={"서비스 제공 절차"}
          placeholder="Tip. 서비스가 어떤 절차로 진행되는지 상담 절차부터 구매 동의 등의 과정을 자세히 설명해주세요. &#10;자주 묻는 질문을 여기에 추가해주셔도 좋아요!"
        />
        <FormInput
          type={"textarea"}
          thead={"수정 및 재진행 & 환불 규정"}
          placeholder="다음 형식으로 작성해주세요. &#10;1. 수정 및 재진행 안내 &#10;2. 환불 규정"
        />
        <BtnGroup
          isDouble={true}
          padding={"80px 0 0"}
          singleType={"button"}
          doubleType="button"
          singleBtnText="서비스 신청하기"
          doubleBtnText="이전으로"
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
export default ServiceEnrollStep3;

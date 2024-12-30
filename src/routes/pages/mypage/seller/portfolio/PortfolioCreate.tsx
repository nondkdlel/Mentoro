import styled from "styled-components";

import FormInput from "@comp/FormInput";
import BtnGroup from "@comp/common/BtnGroup";
import { theme, ContentContainer } from "@style/theme";

function PortfolioCreate() {
  return (
    <PortfolioCreateWrapper>
      <h1>포트폴리오 등록하기</h1>
      <p className="noti-txt">
        해당 내용은 순수 본인 창작물이어야 하며, 신고 접수 시 해당 포트폴리오는
        삭제됩니다.
      </p>
      <FormInput
        type="input"
        thead="제목"
        placeholder="썸네일 제목을 입력해주세요. ex) 월 매출 4,000만원의 플레이스 최적화 비결"
      />
      <FormInput
        type="textarea"
        thead="설명"
        placeholder="해당 프로젝트에 대한 설명을 상세히 적어주세요. &#10; Tip. 기능 혹은 서비스에 대해 작성해주세요! 고객사에서 한눈에 파악할 수 있게 구현한 기능 혹은 서비스에 대해 요청을 작성해주세요. :)"
      />
      <FormInput type="select" thead="카테고리" />
      <FormInput
        type="input"
        thead="역할"
        placeholder="해당 업무에서 본인이 수행한 역할을 작성해주세요. ex) 백엔드 총괄 개발, 프론트 개발 약 30%"
      />
      <FormInput
        type="input"
        thead="참여 기간"
        placeholder="업무 기간을 작성해주세요. (꼭 일까지 적지 않아도 돼요! 대략 얼마정도 진행했는지 말씀헤주세요. ex) 2개월, 40일)"
      />
      <FormInput
        type="file"
        thead="첨부파일"
        accept="image/*"
        isMultiple={true}
      />
      <BtnGroup
        $padding="80px 0 0"
        isDouble={false}
        singleType="button"
        singleBtnText="등록하기"
      />
    </PortfolioCreateWrapper>
  );
}

const PortfolioCreateWrapper = styled.div`
  ${ContentContainer}
  h1 {
    text-align: center;
    font-size: 28px;
    font-weight: 600;
  }
  .noti-txt {
    margin: 100px 0;
    text-align: center;
    padding: 50px 0;
    color: ${theme.colors.gray};
    background-color: ${theme.colors.backgroudColor};
  }
`;

export default PortfolioCreate;

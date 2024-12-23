import styled from "styled-components";

import ChatArea from "@comp/common/ChatArea";
import { ContentContainer, theme } from "@style/theme";

function Jobs() {
  return (
    <JobsWrapper>
      <h1>AI 부업 추천</h1>
      <ChatArea
        $border={`1px solid ${theme.colors.borderColor}`}
        $radius={"6px"}
      />
    </JobsWrapper>
  );
}
const JobsWrapper = styled.div`
  ${ContentContainer};
  h1 {
    font-size: 28px;
    text-align: center;
    font-weight: 600;
    margin-bottom: 60px;
  }
`;

export default Jobs;

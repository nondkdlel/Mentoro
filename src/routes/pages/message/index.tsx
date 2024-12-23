import styled from "styled-components";

import { ContentContainer, theme } from "@style/theme";

import MessageList from "@comp/common/MessageList";
import ChatArea from "@comp/common/ChatArea";

function Message() {
  return (
    <MessageWrapper>
      <MessageList />
      <ChatArea />
    </MessageWrapper>
  );
}
const MessageWrapper = styled.div`
  ${ContentContainer}
  display: grid;
  grid-template-columns: 4fr 7fr;
  border: 1px solid ${theme.colors.borderColor};
  border-radius: 6px;
  margin: 100px auto;
  padding: 0;
`;

export default Message;

import { useState } from "react";
import styled from "styled-components";

import { theme } from "@style/theme";
function MessageList() {
  const [unRead, setUnRead] = useState(true);
  return (
    <MessageListWrapper>
      <PreviewBox>
        <div className="profile-img">
          <img src="images/dummy-profile.png" alt="" />
        </div>
        <div className="preview-txt">
          <p className="user-name">홍길동</p>
          <p className="user-msg">
            미리보기 텍스트가 보여집니다. 특정 영역을 벗어나면 그 이후부터는
            보이지 않습니다.
          </p>
        </div>
        <div className="icon">
          {unRead ? <img src="/images/icon/unread-icon.svg" /> : ""}
        </div>
      </PreviewBox>
    </MessageListWrapper>
  );
}
const MessageListWrapper = styled.div`
  border-right: 1px solid ${theme.colors.borderColor};
`;
const PreviewBox = styled.div`
  display: grid;
  grid-template-columns: 2fr 9fr 1fr;
  gap: 20px;
  border-bottom: 1px solid ${theme.colors.borderColor};
  padding: 14px;
  align-items: center;
  .profile-img {
    border-radius: 50%;
    overflow: hidden;
    img {
      width: 100%;
    }
  }
  .preview-txt {
    overflow: hidden;
    .user-name {
      font-size: 17px;
      font-weight: 600;
      padding-bottom: 5px;
    }
    .user-msg {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      font-size: 15px;
    }
  }
  .icon {
    text-align: right;
    img {
      width: 23px;
      height: 23px;
    }
  }
`;
export default MessageList;

import styled from "styled-components";

import { theme } from "@style/theme";

interface ChatAreaStyleProps {
  $border?: string;
  $radius?: string;
}
function ChatArea({ $border, $radius }: ChatAreaStyleProps) {
  return (
    <ChatAreaWrapper $border={$border} $radius={$radius}>
      <div className="date-box">
        <p>2024년 12월 12일</p>
      </div>
      <div className="bubble-area">
        <div className="receive-box bubble-box">
          <p>I need help with</p>
          <span className="time">10:01</span>
        </div>
        <div className="receive-box bubble-box">
          <p>I need help with</p>
          <span className="time">10:01</span>
        </div>
        <div className="send-box bubble-box">
          <p>
            작성하는 글자에 따라 width 값이 변동됩니다. 테스트 중입니다.
            작성하는 글자에 따라 width 값이 변동됩니다. 테스트 중입니다.
            작성하는 글자에 따라 width 값이 변동됩니다. 테스트 중입니다.
            작성하는 글자에 따라 width 값이 변동됩니다. 테스트 중입니다.
            작성하는 글자에 따라 width 값이 변동됩니다. 테스트 중입니다.
            작성하는 글자에 따라 width 값이 변동됩니다. 테스트 중입니다.
            작성하는 글자에 따라 width 값이 변동됩니다. 테스트 중입니다.
            작성하는 글자에 따라 width 값이 변동됩니다. 테스트 중입니다.
            작성하는 글자에 따라 width 값이 변동됩니다. 테스트 중입니다.
            작성하는 글자에 따라 width 값이 변동됩니다. 테스트 중입니다.
          </p>
          <span className="time">10:01</span>
        </div>
        <div className="receive-box bubble-box">
          <p>
            작성하는 글자에 따라 width 값이 변동됩니다. 테스트 중입니다.
            작성하는 글자에 따라 width 값이 변동됩니다. 테스트 중입니다.
            작성하는 글자에 따라 width 값이 변동됩니다. 테스트 중입니다.
            작성하는 글자에 따라 width 값이 변동됩니다. 테스트 중입니다.
            작성하는 글자에 따라 width 값이 변동됩니다. 테스트 중입니다.
            작성하는 글자에 따라 width 값이 변동됩니다. 테스트 중입니다.
            작성하는 글자에 따라 width 값이 변동됩니다. 테스트 중입니다.
            작성하는 글자에 따라 width 값이 변동됩니다. 테스트 중입니다.
            작성하는 글자에 따라 width 값이 변동됩니다. 테스트 중입니다.
            작성하는 글자에 따라 width 값이 변동됩니다. 테스트 중입니다.{" "}
          </p>
          <span className="time">10:01</span>
        </div>
        <div className="send-box bubble-box">
          <p>
            작성하는 글자에 따라 width 값이 변동됩니다. 테스트 중입니다.
            작성하는 글자에 따라 width 값이 변동됩니다. 테스트 중입니다.
            작성하는 글자에 따라 width 값이 변동됩니다. 테스트 중입니다.
            작성하는 글자에 따라 width 값이 변동됩니다. 테스트 중입니다.
            작성하는 글자에 따라 width 값이 변동됩니다. 테스트 중입니다.
            작성하는 글자에 따라 width 값이 변동됩니다. 테스트 중입니다.
            작성하는 글자에 따라 width 값이 변동됩니다. 테스트 중입니다.
            작성하는 글자에 따라 width 값이 변동됩니다. 테스트 중입니다.
            작성하는 글자에 따라 width 값이 변동됩니다. 테스트 중입니다.
            작성하는 글자에 따라 width 값이 변동됩니다. 테스트 중입니다.
          </p>
          <span className="time">10:01</span>
        </div>
        <div className="send-box bubble-box">
          <p>
            작성하는 글자에 따라 width 값이 변동됩니다. 테스트 중입니다.
            작성하는 글자에 따라 width 값이 변동됩니다. 테스트 중입니다.
            작성하는 글자에 따라 width 값이 변동됩니다. 테스트 중입니다.
            작성하는 글자에 따라 width 값이 변동됩니다. 테스트 중입니다.
            작성하는 글자에 따라 width 값이 변동됩니다. 테스트 중입니다.
            작성하는 글자에 따라 width 값이 변동됩니다. 테스트 중입니다.
            작성하는 글자에 따라 width 값이 변동됩니다. 테스트 중입니다.
            작성하는 글자에 따라 width 값이 변동됩니다. 테스트 중입니다.
            작성하는 글자에 따라 width 값이 변동됩니다. 테스트 중입니다.
            작성하는 글자에 따라 width 값이 변동됩니다. 테스트 중입니다.
          </p>
          <span className="time">10:01</span>
        </div>
      </div>
      <InputArea>
        <input type="text" name="" id="" placeholder="메시지를 입력해주세요." />
        <input type="button" value="전송" />
      </InputArea>
    </ChatAreaWrapper>
  );
}

const ChatAreaWrapper = styled.div<ChatAreaStyleProps>`
  padding: 30px 50px;
  border: ${({ $border }) => $border && $border};
  border-radius: ${({ $radius }) => $radius && $radius};
  .date-box {
    text-align: center;
    margin-bottom: 20px;
    p {
      display: inline-block;
      border-radius: 20px;
      padding: 7px 25px;
      background-color: ${theme.colors.backgroudColor};
      text-align: center;
      font-size: 15px;
      font-weight: 500;
      color: #9ca3af;
    }
  }
  .bubble-area {
    height: 600px;
    overflow-y: auto;
    padding: 20px 0;
  }
  .bubble-box {
    margin-bottom: 15px;
    p {
      display: inline-block;
      vertical-align: bottom;
      font-size: 16px;
      padding: 12px 20px;
      border-radius: 12px;
      max-width: 70%;
    }
    span {
      display: inline-block;
      vertical-align: bottom;
      font-size: 14px;
      color: ${theme.colors.gray};
    }
  }
  .receive-box {
    p {
      background-color: ${theme.colors.mainColor};
      color: ${theme.colors.white};
    }
    span {
      padding-left: 10px;
    }
  }
  .send-box {
    display: flex;
    flex-direction: row-reverse;
    p {
      background-color: ${theme.colors.backgroudColor};
    }
    span {
      padding-right: 10px;
      align-self: flex-end;
    }
  }
`;
const InputArea = styled.div`
  display: grid;
  grid-template-columns: 4fr 1fr;
  gap: 10px;
  padding: 20px 20px 0;
  input[type="text"],
  input[type="button"] {
    padding: 12px;
    font-size: 16px;
    border-radius: 6px;
  }
  input[type="text"] {
    border: 1px solid ${theme.colors.borderColor};
  }
  input[type="button"] {
    background-color: ${theme.colors.mainColor};
    border: 1px solid ${theme.colors.mainColor};
    color: ${theme.colors.white};
  }
`;
export default ChatArea;

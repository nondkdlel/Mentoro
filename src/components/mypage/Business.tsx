import styled from "styled-components";

import { StatusAreaStyle } from "./styles";
import { theme } from "@style/theme";
function Business() {
  return (
    <BusinessWrapper>
      <StatusArea>
        <dl>
          <dt>등록 상태</dt>
          <dd>등록 완료</dd>
        </dl>
      </StatusArea>
      <FormArea>
        <div className="input-box">
          <p>사업자 등록번호</p>
          <input
            type="text"
            placeholder="사업자 번호를 입력해주세요. ex) 000-00-000000"
          />
        </div>
        <div className="input-box">
          <p>상호명</p>
          <input type="text" placeholder="ex.쉐릿" />
        </div>
        <div className="input-box">
          <p>대표자명</p>
          <input type="text" placeholder="ex.홍길동" />
        </div>
        <div className="input-box">
          <p>사업자 주소</p>
          <input type="text" placeholder="ex.서울특별시 땡땡구 땡땡길 10" />
        </div>
        <div className="input-box">
          <p>사업자 등록증</p>
          <div className="custom-file">
            <input type="text" className="upload-name" />
            <input
              id="uploadFile"
              type="file"
              placeholder="ex.서울특별시 땡땡구 땡땡길 10"
              accept="image/jpg, image/png, image/jpeg"
            />
            <label htmlFor="uploadFile">파일 등록</label>
          </div>
        </div>
        <input type="submit" value="저장하기" />
      </FormArea>
    </BusinessWrapper>
  );
}
const BusinessWrapper = styled.div`
  padding: 50px 0;
`;
const StatusArea = styled.div`
  ${StatusAreaStyle}
`;
const FormArea = styled.form`
  padding: 50px 0 80px;
  .input-box {
    margin-bottom: 30px;
    p {
      font-size: 16px;
      font-weight: 500;
      margin-bottom: 10px;
    }
    input[type="text"],
    input[type="file"] {
      width: 100%;
      font-size: 15px;
      padding: 14px;
      border: 1px solid ${theme.colors.borderColor};
      border-radius: 6px;
    }
    .custom-file {
      display: grid;
      grid-template-columns: 5fr 1fr;
      gap: 10px;
    }
    input[type="file"] {
      display: none;
    }
    .custom-file label {
      display: block;
      font-size: 15px;
      color: ${theme.colors.white};
      text-align: center;
      border-radius: 6px;
      line-height: 43px;
      background-color: ${theme.colors.mainColor};
      border: 1px solid ${theme.colors.mainColor};
    }
  }
  input[type="submit"] {
    display: block;
    margin: 100px auto 0;
    border-radius: 6px;
    width: 300px;
    font-size: 16px;
    padding: 15px 0;
    background-color: ${theme.colors.mainColor};
    border: 1px solid ${theme.colors.mainColor};
    color: ${theme.colors.white};
  }
`;
export default Business;

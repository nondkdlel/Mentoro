import styled from "styled-components";

import { theme } from "@style/theme";
import FormInputFile from "@comp/FormInputFile";

interface FormInputPropsType {
  type: string;
  thead: string;
  placeholder?: string;
  fileId?: string;
  accept?: string;
  isMultiple?: boolean;
}
function FormInput({
  type,
  thead,
  placeholder,
  fileId,
  accept,
  isMultiple,
}: FormInputPropsType) {
  return (
    <FormInputWrapper>
      <p className="thead">{thead}</p>
      {type === "input" ? (
        <input type="text" placeholder={placeholder} />
      ) : type === "select" ? (
        <select name="" id="">
          <option value="BLOG">BLOG</option>
          <option value="IT">IT</option>
          <option value="영상/사진">영상 / 사진</option>
          <option value="디자인">디자인</option>
          <option value="부동산">부동산</option>
          <option value="기타">기타</option>
        </select>
      ) : type === "textarea" ? (
        <textarea name="" id="" placeholder={placeholder} />
      ) : type === "file" ? (
        <FormInputFile
          fileId={fileId}
          accept={accept}
          isMultiple={isMultiple}
        />
      ) : (
        ""
      )}
    </FormInputWrapper>
  );
}
const FormInputWrapper = styled.div`
  margin-bottom: 30px;
  .thead {
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 10px;
  }
  input[type="text"] {
    width: 100%;
    font-size: 16px;
    padding: 15px;
    border-radius: 4px;
    border: 1px solid ${theme.colors.borderColor};

    &::placeholder {
      color: ${theme.colors.gray};
    }
  }
  select {
    width: 100%;
    border: 1px solid ${theme.colors.borderColor};
    font-size: 16px;
    padding: 15px;
    border: 1px solid ${theme.colors.borderColor};
    border-radius: 4px;
  }
  textarea {
    width: 100%;
    height: 400px;
    border: 1px solid ${theme.colors.borderColor};
    border-radius: 4px;
    font-size: 16px;
    line-height: 1.6;
    padding: 15px;
  }
`;

export default FormInput;

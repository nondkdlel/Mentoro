import { useState } from "react";
import styled from "styled-components";

import { theme } from "@style/theme";

interface typeProps {
  fileId?: string;
  accept?: string;
  isMultiple?: boolean;
}
function FormInputFile({ fileId, accept, isMultiple }: typeProps) {
  const [fileName, setFileName] = useState("이미지를 업로드 해주세요.");
  const uploadFile = (e: any) => {
    const file = e.target.files[0].name;
    setFileName(file);
    console.log(fileName);
  };

  return (
    <InputFile>
      <p>{fileName}</p>
      <input
        // id="fileUpdate"
        id={fileId}
        type="file"
        accept={accept}
        multiple={isMultiple || false}
        onChange={uploadFile}
      />
      <label
        // htmlFor="fileUpdate"
        htmlFor={fileId}
      >
        파일 업로드
      </label>
    </InputFile>
  );
}
const InputFile = styled.div`
  display: grid;
  grid-template-columns: 8fr 2fr;
  gap: 10px;
  margin-bottom: 30px;
  p {
    border: 1px solid ${theme.colors.borderColor};
    border-radius: 4px;
    font-size: 16px;
    padding: 15px;
  }
  input[type="file"] {
    display: none;
  }
  label {
    border: 1px solid ${theme.colors.mainColor};
    background-color: ${theme.colors.mainColor};
    color: ${theme.colors.white};
    font-size: 16px;
    padding: 15px 0;
    border-radius: 4px;
    text-align: center;
    cursor: pointer;
  }
`;
export default FormInputFile;

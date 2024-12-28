import { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import { ContentContainer } from "@style/theme";
import FormInput from "@comp/FormInput";
import BtnGroup from "@comp/common/BtnGroup";

function ReviewCreate() {
  const [star, setStar] = useState(0);
  const navigate = useNavigate();

  return (
    <ReviewCreateWrapper>
      <h1>리뷰 등록하기</h1>
      <ScopeInputArea>
        <p className="thead">별점</p>
        <ul className="star-list">
          {[...Array(5)].map((el, idx) => (
            <li key={idx} onClick={() => setStar(idx + 1)}>
              {star <= idx ? (
                <img src="/images/icon/star-off-icon.svg" alt={el} />
              ) : (
                <img src="/images/icon/star-on-icon.svg" alt={el} />
              )}
            </li>
          ))}
        </ul>
      </ScopeInputArea>
      <FormInput
        type="textarea"
        thead="내용"
        placeholder="리뷰를 작성해주세요. (* 단, 리뷰는 수정 가능하나 삭제는 불가능합니다.)"
      />
      <BtnGroup
        isDouble={false}
        padding={"80px 0 0"}
        singleType="button"
        singleBtnText="리뷰 남기기"
        singleOnClick={() => navigate("/mypage/seller")}
      />
    </ReviewCreateWrapper>
  );
}

const ReviewCreateWrapper = styled.div`
  ${ContentContainer}
  h1 {
    text-align: center;
    font-size: 28px;
    font-weight: 600;
  }
`;
const ScopeInputArea = styled.div`
  margin-bottom: 30px;
  p {
    display: inline-block;
    vertical-align: middle;
    margin-right: 30px;
  }
  ul,
  li {
    display: inline-block;
    vertical-align: middle;
  }
  li {
    img {
      display: inline-block;
      vertical-align: middle;
      width: 30px;
      height: 30px;
    }
  }
`;
export default ReviewCreate;

import { useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

import { theme } from "@style/theme";

function Profile() {
  const [imgFile, setImgFile] = useState<string>("");
  const imgRef = useRef<any>(null);
  const [userName] = useState<string>("홍길동");
  const [readOnly, setReadOnly] = useState(true);

  const navigate = useNavigate();
  const { pathname } = useLocation();
  const url = pathname.split("/").splice(-1)[0];

  const saveProfileImg = () => {
    const file = imgRef.current.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      const url = reader.result?.toString() as string;
      setImgFile(url);
    };
  };

  const onEdit = () => {
    const name = document.querySelector(".user-name");
    const editBtn = document.querySelector(".edit-btn");
    setReadOnly(!readOnly);
    if (name && editBtn) {
      readOnly ? name.classList.add("active") : name.classList.remove("active");
    }
  };

  const onLoadType = () => {
    url === "seller"
      ? navigate("/mypage/customer")
      : navigate("/mypage/seller");
  };
  return (
    <ProfileWrapper>
      <div className="profile-img-box">
        <input
          id="uploadFile"
          type="file"
          accept="image/jpg, image/png, image/jpeg"
          name="profile_img"
          onChange={saveProfileImg}
          ref={imgRef}
        />
        <label htmlFor="uploadFile">
          <img
            className="default-profile-img"
            src={imgFile ? imgFile : "/images/dummy-profile.png"}
            alt="profile"
          />
        </label>
      </div>
      <UserNameArea>
        <input
          className="user-name"
          type="text"
          defaultValue={userName}
          readOnly={readOnly ? true : false}
        />
        <input
          type="button"
          className="edit-btn"
          value={readOnly ? "수정" : "저장"}
          onClick={onEdit}
        />
      </UserNameArea>
      <RoleButton className={url === "seller" ? "" : "on"} onClick={onLoadType}>
        <img
          src={
            url === "seller"
              ? "/images/icon/change-circle-customer-icon.svg"
              : "/images/icon/change-circle-seller-icon.svg"
          }
          alt=""
        />
        <p>{url === "seller" ? "고객 모드로 전환" : "전문가 모드로 전환"}</p>
      </RoleButton>
    </ProfileWrapper>
  );
}
const ProfileWrapper = styled.div`
  text-align: center;
  .profile-img-box {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    overflow: hidden;
    position: relative;
    border: 1px solid #e4e6e7;
    margin: 0 auto;
    &:hover::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      display: block;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.2);
    }
    &:hover::before {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 30px;
      height: 30px;
      background-image: url("/images/icon/profile-icon.svg");
      object-fit: contain;
    }
    .default-profile-img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
    #uploadFile {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      height: 100%;
      z-index: 5;
      opacity: 0;
      cursor: pointer;
    }
  }
`;
const UserNameArea = styled.div`
  padding: 30px 0;
  input {
    display: inline-block;
    vertical-align: middle;
  }
  input[type="text"] {
    border: 1px solid transparent;
    text-align: center;
    font-size: 18px;
    margin-right: 10px;
    padding: 5px 10px;
    &.active {
      border: 1px solid ${theme.colors.gray};
      border-radius: 4px;
    }
  }
  input[type="button"] {
    color: ${theme.colors.gray};
    border: 1px solid #e4e6e7;
    background-color: #e4e6e7;
    font-size: 14px;
    padding: 8px 10px;
    border-radius: 4px;
  }
`;
const RoleButton = styled.button`
  width: 100%;
  font-size: 16px;
  padding: 15px 0;
  color: ${theme.colors.mainColor};
  border: 1px solid ${theme.colors.mainColor};
  border-radius: 6px;
  background-color: transparent;
  &.on {
    background-color: ${theme.colors.mainColor};
    color: ${theme.colors.white};
  }
  img {
    display: inline-block;
    vertical-align: middle;
    width: 20px;
    height: 20px;
    object-fit: contain;
    margin-right: 10px;
  }
  p {
    display: inline-block;
    vertical-align: middle;
  }
`;
export default Profile;

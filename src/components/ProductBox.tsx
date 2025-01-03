import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { theme } from "@style/theme";

import DummyThumbnail from "@images/dummy-thum.png";
import FavoriteOnIcon from "@images/icon/favorite-on-icon.svg";
import FavoriteOFFIcon from "@images/icon/favorite-off-icon.svg";
import StarIcon from "@images/icon/star-icon.svg";

interface ProductPropsType {
  url?: string;
}
function ProductBox({ url = "" }: ProductPropsType) {
  const [wish, setWish] = useState<Boolean>(true);
  const refEl = useRef<HTMLInputElement>(null);
  const refImg = useRef<HTMLImageElement>(null);

  const handleMouseOver = () => {
    refEl && refEl.current && refEl.current.classList.add("on");
    refImg && refImg.current && refImg.current.classList.add("hover");
  };
  const handleMouseOut = () => {
    refEl && refEl.current && refEl.current.classList.remove("on");
    refImg && refImg.current && refImg.current.classList.remove("hover");
  };

  const onWish = (e: any) => {
    setWish(!wish);
    const target = e.target;
    wish ? (target.src = FavoriteOnIcon) : (target.src = FavoriteOFFIcon);
  };
  return (
    <ProductBoxWrapper>
      <div className="thum-box">
        <img
          className="thum-img"
          src={DummyThumbnail}
          alt=""
          ref={refImg}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        />
        <div
          className="wish-icon"
          ref={refEl}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          onClick={onWish}
        >
          <img src={FavoriteOFFIcon} alt="favorite-off" />
        </div>
      </div>
      <Link to={url}>
        <p className="thum-txt">
          APP앱개발 전문 업체 노빌더 기획/디자인/개발까지
        </p>
        <ObjectiveInfo>
          <div className="left-box">
            <img className="star-icon" src={StarIcon} alt="star-icon" />
            <p>
              4.0 <span>(100)</span>{" "}
            </p>
          </div>
          <div className="right-box">490,000원~</div>
        </ObjectiveInfo>
      </Link>
    </ProductBoxWrapper>
  );
}
const ProductBoxWrapper = styled.div`
  cursor: pointer;
  .thum-box {
    position: relative;
    margin-bottom: 10px;
  }
  .thum-img {
    height: 175px;
    width: 100%;
    border-radius: 8px;
    object-fit: cover;
    z-index: 0;
    &.hover {
      filter: brightness(50%);
    }
  }

  .wish-icon {
    display: none;
    position: absolute;
    top: 15px;
    right: 15px;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.6);
    &.on {
      display: block;
    }
    img {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 25px;
      height: 25px;
    }
  }
  .thum-txt {
    margin-bottom: 20px;
    &:hover {
      text-decoration: underline;
    }
  }
`;
const ObjectiveInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-flow: column;
  align-items: center;
  .star-icon {
    display: inline-block;
    vertical-align: middle;
    width: 20px;
    height: 20px;
    object-fit: contain;
    margin-right: 5px;
  }

  p {
    display: inline-block;
    vertical-align: middle;
    font-size: 14px;
    span {
      color: ${theme.colors.gray};
    }
  }
  .right-box {
    font-size: 16px;
    font-weight: 500;
  }
`;
export default ProductBox;

import { styled } from 'styled-components'
import { Chip } from '@mui/material'
import { Swiper } from 'swiper/react'

// FORM
export const FeatureBox = styled.div`
&& {
  width: 100%;
  background-color: #e9eaf1;
  &.display_none {
    width: 100px;
  }
  .wrap {
    width: 100%;
    height: 400px;
    background-color: #e9eaf1;
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
  }
  .infoBox {
    height: 400px;
    margin-top: 100px;
    h5.brand {
      font-size: 1.125rem;
      margin-bottom: 0 !important;
      font-weight: bold;
    }
    h1.name {
      font-size: 3.75rem;
    }
    p.price {
      color: #62478f;
      font-weight: bold;
      font-size: 1.25rem;
      line-height: 2rem;
      letter-spacing: 0.125rem;
    }
  }
}`;
export const StyledChip = styled(Chip)`
&& {
  margin-right: 10px;
}`;
export const ImgBox = styled.div`
&& {
  margin-top: 120px;
  img {
    width: 500px;
  }
}`;

// TargetNav
export const TartgetNav = styled.div`
&& {
  width: 100%;
  background-color: #fff;
  .btnGroup {
    width: 1100px;
    height: 80px;
    display: flex;
    justify-content: flex-start;
    z-index: 2;

    @media (max-width: 1440px) {
      width: 960px;
    }
    .unclick {
      color: #cacaca;
    }
    .clicked {
      color: #000;
      position: relative;
      &::before {
        content: "";
        display: block;
        width: 100%;
        height: 7px;
        position: absolute;
        bottom: 0;
        left: 0;
        background-color: #AB9ADD;
      }
    }
  }
}`;
export const TargetBtn = styled.div`
&& {
  width: 140px;
  text-align: center;
  cursor: pointer;
  p {
    position: relative;
    top: 50%;
    transform: translateY(-50%);
  }
}`;

// FixedBox
export const FixedBox = styled.div`
&& {
  width: 100%;
  height: 150px;
  position: fixed;
  top: 0;
  background-color: #fff;
  /* border-bottom: 1px solid #000; */
  box-shadow: 0px 4px 20px rgba(196,196,196,0.25);
  overflow: hidden;
  z-index: 2;
  &.unfixed { display: none; }
  &.fixed { display: block; }
  .wrap {
    width: 1100px;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    @media (max-width:1440px) {
      width: 960px;
    }
    .featureBox {
      .titleGroup {
        margin-top: 30px;
        .brand {
          display: flex;
          img {
            height: 16px;
            margin: auto 0;
            transform: scale(0.7);
          }
          span {
            font-size: 14px;
            color: #626262;
            text-align: center;
          }
        }
        p.name {
          color: #626262;
          font-size: 38px;
          line-height: 2.5rem;
          font-family: "NotoSans KR";
        }
      }
      .btnGroup {
        display: flex;
        margin-top: 34px;
        .targetBtn {
          height: 100%;
          line-height: 0.5rem;
        }
        .unclick {
            color: #cacaca;
          }
        .clicked {
          color: #000;
          position: relative;
          &::before {
            content: "";
            display: block;
            width: 100%;
            height: 7px;
            position: absolute;
            bottom: 0;
            left: 0;

            background-color: #AB9ADD;
          }
        }
      }
    }
    .imgBax {
      overflow: hidden;
      img {
        width: 500px;
        position: relative;
        top: 30px;
      }
    }
  }
}`;

// INFO
export const InfoBoxWrap = styled.div`
&& {
  margin-top: 50px;
}`;
export const Title = styled.span`
&& {
  font-size: 1em;
  font-weight: bold;
  text-align: center;
}`;
export const MoreInfo = styled.div`
&& {
  width: 100%;
  margin-top: 20px;
  border: 1px solid #e8e8e8;
  border-radius: 5px;
}`;
export const FormDl = styled.dl`
&& {
  background-color: #fbfbfb;
  padding: 24px 0 24px 16px;
  margin-bottom: 0;
  border-bottom: 1px solid #e8e8e8;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  min-height: 46px;
}`;
export const FormDt = styled.dt`
&& {
  width: 90px;
  height: 100%;
  margin-top: 10px;
  margin-right: 24px;
  text-align: center;
}`;
export const FormDd = styled.dd`
&& {
  width: 85%;
  height: 100%;
  margin-bottom: 0;
  display: flex;
  flex-wrap: wrap;
  cursor: pointer;
  gap: .7em;
  .clicked {
    color: #fff;
    background-color: #62478f;
  }
  .grade {
  }
}`;
export const ChipBtn = styled.div`
&& {
  padding: 5px 10px;
  padding-left: 20px;
  padding-right: 20px;
  /* min-width: 60px; */
  text-align: center;
  border: 1px solid #d8d8d8;
  border-radius: 1.5em;
}`;
export const PriceDl = styled.dl`
&& {
  margin: 18px 16px 0;
  padding-bottom: 6px;
  border-bottom: 1px solid #d8d8d8;
  display: flex;
  align-items: flex-start;
  dt {
    width: 90px;
    height: 100%;
    margin-top: 8px;
    margin-right: 24px;
    text-align: center;
  }
  dd {
    width: 85%;
    span {
      font-size: 14px;
    }
  }
}`;

// SPAC
export const SpacDl = styled.dl`
&& {
  margin-top: 48px;
  margin-left: 16px;
  display: flex;
}`;
export const SpacDt = styled.dt`
&& {
  width: 90px;
  height: 85%;
  margin-right: 24px;
  text-align: center;
}`;
export const SpacDd = styled.dd`
&& {
  display: flex;
  width: 85%;
  span {
    font-size: 0.825em;
  }
}`;
export const OptionDl = styled.dl`
&& {
  width: 33.3333333333%;
}`;
export const OptionDt = styled.dt`
&& {
  width: 40%;
  color: #999999;
  font-weight: normal;
  float: left;
  margin-bottom: 8px;
}`;
export const OptionDd = styled.dd`
&& {
  margin-bottom: 8px;
  /* font-weight: bold; */
}`;
export const SizeBox = styled.div`
&& {
  width: 85%;
  height: 100%;
  margin-left: 90px;
  display: flex;
  justify-content: space-evenly;
  .size_box {
    .wrap_thumb .sizeimg {
      height: 104px;
      margin-bottom: 3px;
    }
    .wrap_size {
      display: block;
      margin: 0 auto;
      text-align: center;
      position: relative;
      line-height: 1em;
      .txt {
        font-size: .75em;
        background-color: #fff;
        padding: 0 3px;
      }
      .line {
        width: 100%;
        height: 1px;
        background-color: #ccc;
        position: absolute;
        left: 0;
        top: 50%;
        z-index: -1;
        &::after {
          content: "";
          display: block;
          width: 1px;
          height: 5px;
          background-color: #ccc;
          position: absolute;
          top: -5px;
          left: 0;
        }
        &::before {
          content: "";
          display: block;
          width: 1px;
          height: 5px;
          background-color: #ccc;
          position: absolute;
          top: -5px;
          right: 0;
        }
      }
    }
  }
  .front {
    .track {
      width: 94px;
    }
    .weight {
      width: 100%;
    }
  }
  .side {
    .wheelbase {
      width: 180px;
    }
    .length {}
  }
  .rear {
    position: relative;
    .tread {
      width: 94px;
      margin-top: 8px;
    }
    .height {
      height: 104px;
      margin: 0 auto;
      text-align: center;
      position: absolute;
      top: 0;
      left: 152px;
      line-height: 1em;
      .txt {
        display: block;
        width: 61px;
        padding: 5px 0;
        font-size: .75em;
        background-color: #fff;
        position: relative;
        top: 50%;
        left: -50%;
        transform: translateY(-50%);
      }
      .line {
        width: 1px;
        height: 100%;
        background-color: #ccc;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        &::after {
          content: "";
          display: block;
          width: 5px;
          height: 1px;
          background-color: #ccc;
          position: absolute;
          top: 0;
          left: -5px;
        }
        &::before {
          content: "";
          display: block;
          width: 5px;
          height: 1px;
          background-color: #ccc;
          position: absolute;
          top: 103px;
          left: -5px;
        }
      }
    }
  }
}`;

// SWIPER
export const SwiperWrap = styled.div`
&& {
  width: 100%;
  margin-top: 160px;
  height: 700px;
}`;
export const MainSwiper = styled(Swiper)`
&& {
  margin-top: 20px;
  --swiper-navigation-color : #fff;
  --swiper-pagination-color : #fff;
  img {
    width: 100%;
  }
}`;

export const ThumbsSwiper = styled(Swiper)`
&& {
  margin-top: 10px;
  .swiper-slide {
    position: relative;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .swiper-slide::after {
    content: "";
    box-sizing: border-box;
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: #000;
    opacity: .3;
  }
  
  .swiper-slide-thumb-active {
    position: relative;
  }
  .swiper-slide-thumb-active::after { display: none; }
  .swiper-slide-thumb-active::before {
    content: "";
    box-sizing: border-box;
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: transparent;
    border-bottom: 5px solid #62478f;
  }
}`;

// COMMENT
export const CommentWrap = styled.div`
&& {
  width: 100%;
  /* height: 100%; */
  margin-top: 280px;
  .top_section {
    margin-left: 24px;
    margin-bottom: 36px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    .left {
      width: 300px;
      position: relative;
      .star {
        color: #FFA30B;
        font-size: 3.5em;
      }
      .int {
        font-size: 4em;
        font-weight: bold;
        margin-top: 1rem;
        margin-left: 1rem;
      }
      .commentCount {
        color: #777777;
        font-size: 14px;
        position: absolute;
        left: 3em;
        bottom: -1.25em;
      }
      
    }
    .right {
      width: 800px;
      border-left: 1px solid #999999;
      padding-left: 36px;
      .box {
        display: flex;
        .line {
          width: 150px;
          height: 6px;
          margin: auto 0;
          margin-left: 0.5em;
          background-color: #FFA30B;
          border-radius: 50px;
        }
      }
    }
    
  }
  .sort {
    cursor: pointer;
  }
}`;
export const PostForm = styled.form`
&& {
  padding: 10px 0;
  display: flex;
  align-items: center;
  .rating {
    margin-right: 16px;
    margin-left: 24px;
  }
  .send {
    width: 100px;
    height: 100%;
    color: #d8d8d8;
    margin-right: 16px;
    margin-left: 10px;
    height: 56px;
    border-radius: 100%;
    &:hover {
      color: #000;
    }
    .sendIcon {
      font-size: 2em;
      width: 100%;
      height: 100%;
      margin-top: -3px;
      padding: 8px 8px 8px;
      transform: rotate(-28.42deg);
    }
  }
}`;

// COMMENT-list
export const CommentList = styled.form`
&& {
  .list {
    width: 100%;
    min-height: 128px;
    padding: 24px;
    display: flex;
    align-items: center;
    margin-bottom: 18px;
    background-color: #f9f9f9;
    border-radius: 20px;
    .rating {
      margin-right: .5em;
    }
    .ratingNum {
      color: #000;
      font-weight: bold;
      margin-right: 1.25em;
    }
    .textBox {
      width: 100%;
      height: 100%;
      .typo {
        font-size: 1em;
      }
      .userInfo {
        margin-top: 8px;
        font-size: .75rem;
        font-weight: lighter;
        color: #626262;
        .userName {}
        .date {}
      }
  }
  }
  .like {
    width: 100px;
    text-align: center;
    .icon, .offIcon {
      color: #c6c6c6;
      font-size: 2.5em;
    }
    .icon {}
    .offIcon {}
    .likeCtn {
      line-height: 2em;
      font-size: 0.75em;
    }
  }
}`;
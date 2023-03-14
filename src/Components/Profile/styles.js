import styled from "styled-components";

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 52px;
`;

export const ProfileHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 46px;
  position: relative;
  img {
    width: 100%;
    border-radius: 6px;
  }
  .profileImage {
    position: absolute;
    top: 147px;
    left: 18px;
    img {
      border: 5px solid #fee1e1;
      border-radius: 50%;
      max-width: 270px;
      width: 100%;
    }
  }
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 22px;
    padding: 18px 32px;
    align-self: flex-end;
    background: #9146ff;
    border-radius: 9px;
    border: none;
    font-weight: 700;
    font-size: 38px;
    line-height: 46px;
    color: #fff;
    transition: all 0.6s;
    img {
      width: 44.84px;
      transition: all 0.6s;
    }
    :hover {
      filter: brightness(1.1);
      box-shadow: 0px 0px 15px 2px #9146ff;
      img {
        transform: scale(1.1);
      }
    }
  }
  @media (max-width: 650px) {
    .profileImage {
      img {
        max-width: 200px;
      }
    }
    a {
      padding: 12px 30px;
      font-size: 24px;
      img {
        width: 38px;
      }
    }
  }
  @media (max-width: 470px) {
    position: initial;
    .profileImage {
      img {
        max-width: 160px;
      }
    }
    a {
      padding: 6px 20px;
      font-size: 22px;
      img {
        width: 32px;
      }
    }
  }
`;
export const ProfileInfo = styled.div`
  width: 100%;
  margin-bottom: 45px;
  padding-left: 15px;
  .top {
    display: flex;
    gap: 51px;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 12px;
    .headline {
      display: flex;
      align-items: center;
      justify-content: space-between;
      h1 {
        font-weight: 700;
        font-size: 42px;
        line-height: 48px;
        color: white;
        margin-bottom: 7px;
      }
      span {
        font-weight: 700;
        font-size: 24px;
        line-height: 29px;
        color: #d31d56;
        margin-left: 16px;
      }
      p {
        font-weight: 500;
        font-size: 24px;
        line-height: 29px;
        color: #fff;
      }
    }
    img {
      margin-right: 45px;
    }
    p {
      max-width: 226px;
      font-weight: 500;
      font-size: 16px;
      line-height: 19px;
      color: #fee1e1;
    }
  }
  .description {
    p {
      max-width: 560px;
      font-weight: 500;
      font-size: 28px;
      line-height: 130.5%;
      color: #dfd8d8;
      position: relative;
      img {
        margin-left: 6px;
        position: absolute;
        animation: heart 0.7s infinite alternate-reverse;
      }
    }
    .live {
      margin-top: 20px;
      color: #e14274;
      ::after {
        content: "";
        display: inline-block;
        width: 14px;
        height: 14px;
        background: #e14274;
        border-radius: 50%;
        margin-left: 11px;
        box-shadow: 0px 0px 15px 2px rgba(225, 66, 116, 0.45);
      }
    }
  }
  @media (max-width: 530px) {
    padding-left: 0px;
    .top {
      gap: 10px;
      position: relative;
      .headline {
        p {
          max-width: 123px;
        }
      }
      img {
        position: absolute;
        margin: 0;
        top: -158px;
        right: 2px;
        width: 46px;
      }
    }
    .description {
      P {
        font-size: 22px;
        img {
          width: 33px;
        }
      }
    }
  }
  @keyframes heart {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(1.2);
    }
  }
`;

export const Separator = styled.span`
  width: 3px;
  height: 29px;
  background: #9146ff;
  border-radius: 1px;
  margin-inline: 15px;
`;

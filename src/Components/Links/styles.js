import styled from "styled-components";

export const LinksContainer = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 70px;
  margin-bottom: 110px;
  .links {
    display: flex;
    gap: 40px;
    .link {
      width: 85.74px;
      height: 85.74px;
      background-color: #fff;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  .cardLink {
    border-radius: 12px;
    max-width: 397.21px;
    width: 100%;
    max-height: 282px;
    height: 100%;
    .imageCard {
      max-height: 194.09px;
      height: 100%;
      img {
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        width: 100%;
      }
    }
    .linkContent {
      background: #ffffff;
      display: flex;
      align-items: center;
      gap: 40px;
      padding: 12px 32px;
      border-bottom-right-radius: 10px;
      border-bottom-left-radius: 10px;
      img {
        width: 57px;
        height: 56px;
      }
    }
    p {
      font-weight: 700;
      font-size: 36px;
      line-height: 43px;
    }
  }
  @media (max-width: 530px) {
    .links {
      gap: 28px;
      .link {
        width: 60px;
        height: 60px;
        img {
          width: 40px;
        }
      }
    }
  }
  @media (max-width: 450px) {
    .cardLink {
      .linkContent {
        img {
          width: 48px;
        }
        p {
          font-size: 28px;
        }
      }
    }
  }
`;

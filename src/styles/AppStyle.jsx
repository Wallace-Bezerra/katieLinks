import styled from "styled-components";

export const AppStyle = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  max-width: 620px;
  width: 100%;
  position: relative;
  padding-top: 32px;
  margin-bottom: 130px;

  @media (max-width: 700px) {
    max-width: 680px;
    padding-left: 30px;
  }
`;

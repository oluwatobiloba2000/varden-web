import styled from "styled-components";
import colors from "../../colors";

export const MainWrapper = styled.main`
  width: 100%;
  background-color: ${colors.containerBackgroundColor};
  min-height: 100vh;
  position: relative;
  z-index: -9999;
  .content {
    padding: 100px 0px;
    position: relative;
    z-index: -1;
    .btn {
      width: 100%;
      padding: 12px 30px;
    }
    .btn_orange {
      background-color: ${colors.orange};
      color: #fff;
    }
    .btn_green {
      background-color: ${colors.mainColor};
      color: #fff;
    }
    input {
      width: 100%;
      padding: 12px 10px;
      text-align: center;
    }
    .img-fit {
      width: 100%;
      height: 450px;
      object-fit: cover;
    }
  }
  .back_link {
    display: flex;
    align-items: center;
    color: #21a746;
    padding: 10px 10px;
    background: #fff;
    img {
      margin-right: 10px;
    }
  }
  .margin_bottom-sm {
    margin-bottom: 50px;
  }

  h2 {
    margin-bottom: 30px;
    font-size: 30px;
  }

  .btn_green {
    background-color: ${colors.mainColor};
    color: #fff;
  }
  @media (max-width: 460px) {
    .content {
      padding: 32px 0px;
    }

    h2 {
      font-size: 24px;
    }
  }

  .description {
    margin: 30px 0px;
  }
`;

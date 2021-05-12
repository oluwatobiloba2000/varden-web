import styled from "styled-components";
import colors from "../../colors";

export const MainWrapper = styled.main`
  width: 100%;
  background-color: ${colors.containerBackgroundColor};
  min-height: 100vh;
  position: relative;
  z-index: -9999;
  .orange {
    color: #EF761E;
  }
  .btn-checkout {
    background-color: #EF761E;
    color: #fff;
    padding: 10px 25px;
  }
  main {
    background: #F6F8FA;
  }
  .other-info {
    background: #fff;
    padding-top: 10px;
  }
  .content {
    padding: 100px 0px;
    padding-bottom: 40px;
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
    // input {
    //   width: 100%;
    //   padding: 12px 10px;
    //   text-align: center;
    // }
    .img-fit {
      width: 100%;
      height: 450px;
      object-fit: cover;
    }
  }
  .product-details {
    padding: 40px;
    h3.price {
      padding: 10px 0px;
      width: 100%;
      line-height: 25px;
      font-weight: 500;
      font-size: 1.4em;
      border-radius: 30px;
    }
    span.price {
      padding: 10px 0px;
      width: 100%;
      line-height: 25px;
      font-weight: 500;
      font-size: .9em;
      border-radius: 30px;
    }
    h1 {
      font-size: 40px;
      font-weight: 700;
    }
    h5 {
      font-size: 17px;
      font-weight: 700;
    }
    p {
      font-size: .9em;
      font-weight: 400;
      line-height: 25px;
    }
  }
  .other-info-navigation {
    .nav-link {
      padding: 10px 0;
      margin-right: 30px;
      color: #222;
      font-weight: 600;
    }
    .nav-link.active {
      border-bottom: 4px solid #EF761E;
    }
  }
  .review-list {
    .rating {
      h1,p {
        margin: 0;
      }
    }
    .review-list-item {
      padding: 20px;
      margin-bottom: 30px;
      box-shadow: 0px 0px 7px rgba(200,194,194,0.25);
      p.title {
        font-size: 14px;
        font-weight: 500;
        margin: 0;
      }
      p.body {
        font-size: 13px;
        margin: 0;
      }
    }
  }
  .back_link {
    display: flex;
    align-items: center;
    // box-shadow: 0px 0px 7px rgba(200,194,194,0.25);
    color: #222;
    font-weight: 500;
    font-size: 14px;
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
    font-weight: 600;
  }

  .btn_green {
    background-color: ${colors.mainColor};
    color: #fff;
    font-size: 16px;
    box-shadow: 0px 0px 7px rgba(200,194,194,0.25);
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


export const IncrementerWrapper = styled.div`
  .btns {
    width: 100%;
    flex: 1;
    border-radius: 5px;
    margin: 5px;
    padding: 0 13px;
    align-items: center;
    justify-content: center;
    height: 45px;
    i {
      font-size: .9em;
      font-weight: 600;
    }
  }
  input {
    padding: 7px;
    height: 45px;
    border-radius: 5px;
    margin: 5px;
  }
`
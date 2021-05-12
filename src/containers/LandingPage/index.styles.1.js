import styled from "styled-components";

import colors from "../../colors";

export const Wrapper = styled.div`
  width: 100%;
  .mobile-app img {
    width: 100%;
    height: 500px;
  }
  .mobile-app-con {
    padding: 100px 0;
  }
  .top-margin-sm {
    margin-top: 150px;
  }
  .swiper-container{
    // height: 200px !important;
  }
  .product_item img{
    width:100%;
    height:100%;
    object-fit:cover;
  }
  .product_item-details{
    margin-top:10px;
  }
`;

export const Slider = styled.div`
  min-height: 567px;
  width: 100%;
  @media (max-width: 460px) {
    min-height: 300px;
  }
`;

export const ResortWrapper = styled.div`
  width: 100%;
  padding: 100px 0 50px 0;
  background-color: ${colors.containerBackgroundColor};
  .top-margin {
    margin-top: 50px;
    @media (max-width: 460px) {
      margin-top: 10px;
    }
  }
  .resort-btn {
    background-color: ${colors.mainColor};
    color: #fff;
    width: 100%;
    padding: 20px 0;
  }
  .resort-masthead {
    width: 100%;
    background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
      url("https://res.cloudinary.com/dotvhpvra/image/upload/v1543397274/varden/web/man-cooking-compressed.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: 400px;
    border-radius: 3px;
    position: relative;
  }
  .selling-point {
    position: absolute;
    background-color: #fff;
    bottom: 50px;
    right: -190px;
    width: 50%;
    padding: 30px;
    border-radius: 3px;
    p {
      padding: 20px 0;
    }
  }
`;

export const Card = styled.div`
  width: 100%;
  background-color: #fff;
  box-shadow: 0px 4px 4px rgba(243, 243, 243, 0.5);
  padding: 15px;
  h6 {
    text-transform: uppercase;
    font-size: 20px;
  }
  p {
    font-size: 14px;
  }
  margin-top: 10px;
`;

export const Image = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 100px;
  box-shadow: 4px 4px 10px rgba(243, 243, 243, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 40px;
    height: 40px;
  }
  @media (max-width: 460px) {
    width: 60px;
    height: 60px;
    img {
      width: 30px;
      height: 30px;
    }
    margin-bottom: 20px;
  }
  margin-bottom: 40px;
`;

export const FarmMastWrapper = styled.div`
  width: 100%;
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url("https://res.cloudinary.com/dotvhpvra/image/upload/v1547034520/varden/anaya-katlego-792064-unsplash-compressed.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 500px;
  h1 {
    font-weight: bolder;
    color: #fff;
    text-align: center;
    line-height: 1.5em;
  }
  .farm-btn {
    padding: 20px 60px;
    font-weight: bolder;
    background-color: ${colors.mainColor};
    color: #fff;
    @media (max-width: 460px) {
      font-size: 14px;
      font-weight: bold;
    }
  }
  .top-margin {
    margin-top: 40px;
  }
  .top-margin-lg {
    margin-top: 100px;
  }

  @media (max-width: 460px) {
    height: 400px;
    h1 {
      font-size: 30px;
    }
    .top-margin-lg {
      margin-top: 50px;
    }
  }
`;

export const Masthead = styled.div`
  width: 100%;
  height:450px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url("https://res.cloudinary.com/dotvhpvra/image/upload/v1551224237/varden/PNUS_1013_WFM_mosaic_prepared_tile_browser_2x._CB476230172_.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
  padding: 50px 0;
  h1 {
    font-size: 50px;
    color: #fff;
    margin-bottom:20px;
  }
  p {
    font-size: 20px;
    color: #fff;

    margin-top: 20px;
    margin-bottom: 2rem;
  }
  .top-margin {
    margin-top: 100px;
  }
  .input {
    padding: 15px;
    border-radius: 0;
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
    border: none;
  }
  .form {
    display: flex;
    justify-content: space-between;
  }
  .btn {
    border-radius: 3px;
    background-color: ${colors.mainColor};
    color: #fff;
    border: none;
    padding: 15px 20px;
    width:100%;
  }
  @media(max-width:460px){
    height:500px;

    h1{
      font-size:28px;
    }
    p{
      font-size:18px
    }
  }
`;

export const FoodDeliveryWrapper = styled.div`
  position: relative;
  .top-margin {
    margin-top: 200px;
  }
  .pull-left {
    float: right;
  }
  .resort-btn {
    background-color: ${colors.mainColor};
    color: #fff;
    width: 100%;
  }
  width: 100%;
  padding: 100px 0;
  img {
    width: 60%;
    height: 100%;
    object-fit: cover;
    border-radius: 5px;
  }
  h2 {
    font-size: 40px;
    font-weight: bold;
    margin: 0;
  }
  p {
    font-size: 17px;
    margin-top: 20px;
  }
  .relative {
    position: relative;
  }
  .absolute {
    position: absolute;
  }
  @media (max-width: 480px) {
    h2 {
      font-size: 20px;
      margin-top: 20px;
    }
    p {
      font-size: 14px;
    }
    img {
      width: 100%;
    }
    .pull-left {
      float: left;
    }
    .top-margin {
      margin-top: 50px;
    }
  }
`;



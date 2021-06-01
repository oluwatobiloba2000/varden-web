import styled from "styled-components";

import colors from "../../colors";

export const Wrapper = styled.div`
  width: 100%;
  .how-it-works {
    background: #FEFDFD;

    .heading {
      font-weight: 700;
      font-size: 50px;
      @media(max-width: 460px) {
        font-size: 40px;
      }
    }

    .how-it-works-item {
      padding: 40px;
      margin-bottom: 15px;
      background: #FFFFFF;
      box-shadow: 0px 0px 7px rgba(200, 194, 194, 0.25);

      .img {
        height: 60px;
        margin: 0;
        img {
          width: 20%;
        }
      }

      .content {
        margin-top: 30px;

        p.content-verb {
          font-size: 14px;
          font-weight: 400;
          margin: 0 !important;
        }

        h3.content-noun {
          font-weight: 700;
        }

        p.content-description {
          font-size: 16px;
          margin-top: 30px;
          font-weight: 600;
        }
      }
    }
  }
  
  .fresh-from-farm {
    margin-bottom: 100px;
    min-sheight: 382px;
    padding: 50px 0;
    background: #21a746;
    border-radius: 0px 100px 5px 0px;

    .navigation {
      margin-top: 20px;
      button {
        background: #fff;
        padding: 0 10px;
        border: none;
        margin-left: 10px;
        border-radius: 3px;
      }
    }

    h3 {
      font-weight: 700;
      margin-bottom: 40px;
      color: #fff;
      font-size: 45px;
      @media(max-width: 460px) {
        font-size: 35px;
      }
    }
  }

  .all-produce {
    padding: 70px 0;
    padding-top: 30px;

    h3 {
      font-weight: 700;
      margin-bottom: 40px;
      color: #2A2557;
      font-size: 45px;
      @media(max-width: 460px) {
        font-size: 35px;
      }
    }
    button {
      border-radius: 3px;
      background-color: #EF771D;
      color: #fff;
      border: none;
      font-weight: 600;
      padding: 10px 20px;
    }
    .col-1-cell-1 {
      background-image: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.7) 59.69%, rgba(13, 12, 12, 0.82) 100%),
      url("https://res.cloudinary.com/oluwatobby/image/upload/v1622506534/plantain_bfbiw3.png");
      height: 560px;
      max-height: 560px;
      background-size: cover;
      margin: 0;
      margin-bottom: 50px;
      padding: 25px;
      padding-bottom: 10px;
      h2 {
        font-weight: 600;
        color: #fff;
      }
      p {
        color: #fff;
      }
      @media(max-width: 767px) {
        height: 100px;
        max-height: 100px;
        h2 {
          font-weight: 600;
          font-size: 16px;
          color: #fff;
        }
        p {
          color: #fff;
        }
      }
    }
    .col-2-cell-1 {
      background-image: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.7) 29.69%, rgba(13, 12, 12, 0.82) 100%),
      url("https://res.cloudinary.com/oluwatobby/image/upload/v1622506678/Broilers_sk8asp.jpg");
      height: 265px;
      max-height: 265px;
      background-size: cover;
      margin: 0;
      padding: 20px;
      padding-bottom: 10px;
      h6 {
        font-weight: 600;
        color: #fff;
      }
      p {
        color: #fff;
      }
      @media(max-width: 767px) {
        height: 100px;
        max-height: 100px;
      }
    }
  }
  .col-2-cell-2 {
    background-image: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.7) 29.69%, rgba(13, 12, 12, 0.82) 100%),
    url("https://res.cloudinary.com/oluwatobby/image/upload/v1622506773/Cockerel_thsha7.jpg");
    height: 265px;
    max-height: 265px;
    background-size: cover;
    margin: 0;
    padding: 20px;
    padding-bottom: 10px;
    h6 {
      font-weight: 600;
      color: #fff;
    }
    p {
      color: #fff;
    }
    @media(max-width: 767px) {
      height: 100px;
      max-height: 100px;
    }
  }
}
.col-2-cell-3 {
  background-image: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.7) 29.69%, rgba(13, 12, 12, 0.82) 100%),
  url("https://res.cloudinary.com/oluwatobby/image/upload/v1622506829/Oldlayers_uxpeqb.jpg");
  height: 265px;
  max-height: 265px;
  background-size: cover;
  margin: 0;
  padding: 20px;
  padding-bottom: 10px;
  h6 {
    font-weight: 600;
    color: #fff;
  }
  p {
    color: #fff;
  }
  @media(max-width: 767px) {
    height: 100px;
    max-height: 100px;
  }
}
}
.col-2-cell-4 {
  background-image: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.7) 29.69%, rgba(13, 12, 12, 0.82) 100%),
  url("https://res.cloudinary.com/oluwatobby/image/upload/v1622507085/karol-klajar-JzpiVI4n5x0-unsplash_m5gotf.jpg");
  height: 265px;
  max-height: 265px;
  background-size: cover;
  margin: 0;
  padding: 20px;
  padding-bottom: 10px;
  h6 {
    font-weight: 600;
    color: #fff;
  }
  p {
    color: #fff;
  }
  @media(max-width: 767px) {
    height: 100px;
    max-height: 100px;
  }
}
}

  .location-section {
    padding: 80px 10px;
    margin-bottom: 60px;
    background: #EF771D;
    h1 {
      font-weight: 700;
      margin-bottom: 40px;
      color: #fff;
      font-size: 45px;
      @media(max-width: 460px) {
        font-size: 35px;
      }
    }
    span {
      font-weight: 300;
      color: #fff;
      padding: 10px 15px;
      border-bottom: 2px solid #fff;
    }
    .location-list {
      margin-top: 30px;
      padding: 40px;
      p {
        margin-bottom: 30px;
        font-weight: 400;
        color: #fff;
      }
    }
  }

  .app-section {
    .btn-app {
      padding: 10px 15px;
      height: 45px;
      background: #f2f2f2;
      border: 1px solid #a3a3a3;
      border-radius: 3px;
    }
    h1 {
      font-weight: 700;
      font-size: 50px;
    }
    p {
      font-weight: 500;
      font-size: 20px;
    }
  }

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
  min-height: 640px;
  background-image: ${props => `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)),
    url(${props.img})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  text-align: center;
  padding: 130px 0;
  h1 {
    font-size: 50px;
    color: #fff;
    font-weight: 600;
    margin-bottom:20px;
  }
  h3 {
    font-size: 27px;
    color: #fff;
    font-weight: 500;
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
    background-color: #fff;
    color: #2A2557;
    border: none;
    font-weight: 600;
    padding: 15px 20px;
    // width:100%;
  }
  @media(max-width:460px){
    min-height:500px;
    h1{
      font-size:32px;
    }
    h3{
      font-size:16px
    }
  }
`;

export const ProduceCardWrapper = styled.div`
  padding: 30px 30px;
  // width: 400px;
  background: #fff;
  margin-bottom: 20px;
  box-shadow: 0px 5px 5px rgba(204, 204, 204, 0.25);
  border-radius: 10px;

  .rating-box {
    padding: 6px;
    background: rgba(243, 184, 8, 0.4);
    color: #C47632;
    border-radius: 3px;
    width: auto;
    font-size: .8em;
    span.inner {
      margin: 0;
      font-weight: 600;
    }
  }

  img.product-image {
    width: 60%;
    border-radius: 20px;
    min-height: 160px;
    max-height: 160px;
    object-fit: cover;
    margin-bottom: 30px;
    margin-top: 20px;
  }
  h4 {
    margin: 0;
    font-weight: 600;
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



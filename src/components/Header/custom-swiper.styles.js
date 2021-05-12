import styled from "styled-components";
import colors from "../../colors";

export const SwiperWrapper = styled.section`
  height: 100%;
  width: 100%;

  .swiper-container {
    height: inherit;
    width: inherit;
  }

  .prev-icon,
  .next-icon {
    position: absolute;
    top: 50%;
    margin-top: -22px;
    z-index: 10;
    cursor: pointer;
  }

  .next-icon {
    right: 10px;
    left: auto;
  }

  .prev-icon {
    left: 10px;
    right: auto;
  }

  .next-icon.swiper-button-disabled,
  .prev-icon.swiper-button-disabled {
    opacity: 0.35;
    cursor: auto;
    pointer-events: none;
  }

  .slide-container {
    height: 100%;
    width: 100%;
    color: ${colors.whiteColor};
  }

  .actions button {
    font-size: 20px;
    font-weight: bold;
  }

  .buy_button {
    background-color: ${colors.orange};
    color: ${colors.whiteColor};
    padding: 10px 30px;
    margin-right: 16px
  }

  
  .add_cart_button {
    background-color: ${colors.white};
    color: ${colors.black};
    padding: 10px 30px;
  }

  .slide-text-container {
    max-width: 40%;
    margin-left: 150px;
    margin-top: 80px;
    @media (max-width: 770px) {
      max-width: 70%;
      margin-left: 120px;
      margin-top: 20px;
      h1 {
        font-size: 30px;
      }
      p {
        font-size: 20px;
      }
    }

    h1 {
      margin-bottom: 20px;
      font-weight: bold;
      font-size: 50px;
      text-align: left;
      line-height: 63px;
    }

    h4 {
      color: ${colors.orange};
      margin-bottom: 32px;
      font-size: 30px;
      font-weight: bold;
    }

    p {
      margin-bottom: 20px;
      font-weight: bold;
      font-size: 25px;
      text-align: left;
      line-height: 37px;
    }
  }

  @media (max-width: 460px) {
    .slide-text-container {
      max-width: 70%;
      margin: 0px auto;
      margin-top: ${props => props.isSingleProductView ? '100px' : '50px'}; 
      
      h1 {
        line-height: 20px;
        font-size: 24px;
        text-align: center;
      }

      .actions{
        text-align: center;

        button{
          font-size: 14px
        }
      }


      h4 {
        color: ${colors.orange};
        margin-bottom: 16px;
        font-size: 18px;
        text-align: center;
      }

      p {
        line-height: 1.3em;
        font-size: 14px;
        font-weight: normal;
        text-align: center;
      }

      .buy_button, .add_cart_button {
        padding: 5px 16px;
      }
    
    }
  }
`;

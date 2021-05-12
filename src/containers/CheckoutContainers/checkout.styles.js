import styled from "styled-components";

import colors from "../../colors";

export const Wrapper = styled.div`
  width: 100%;
  background-color: ${colors.containerBackgroundColor};
  min-height: 100vh;
  .btn {
    // width: 100%;
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
  .header {
    height: 87px;
    background-color: ${colors.whiteColor};
    box-shadow: 0px 2px 1px rgba(204, 204, 204, 0.2);
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 101.8px;
      height: 50px;
      object-fit: cover;
    }
    position: relative;
    z-index: 1;
  }
  .no-padding-left {
    padding-left: 0;
  }
  .padding-tb_sm {
    padding-top: 150px;
    margin-bottom: 50px;
  }
  .back_link {
    display: flex;
    align-items: center;
    color: #21a746;
    padding: 2px 10px;
    background: #fff;
    img {
      margin-right: 10px;
    }
  }
  .back_btn {
    margin-left: 10px;
  }
  .pay_btn {
    padding: 12px 30px;
  }
  .misc {
    margin: 50px 0px;
  }
  .item_price {
    display: flex;
    justify-content: space-between;
  }
  .styling {
    border-bottom: 1px solid ${colors.tableBorderBtm};
    border-top: 1px solid ${colors.tableBorderBtm};
    padding: 10px 30px;
    margin-top: 20px;
    background-color: ${colors.containerBackgroundColor};
    h6 {
      margin-bottom: 0;
    }
  }
  .margin-top_sm {
    margin-top: 50px;
  }
  @media (max-width: 460px) {
    height: auto;
    padding-bottom: 50px;
  }
`;

export const CartWrapper = styled.div`
  width: 100%;
  padding: 30px;
  background-color: ${colors.whiteColor};
  .cart_list-item {
    .item_image {
      img {
        width: 100px;
        height: 100px;
        object-fit: cover;
      }
    }
    .item_details, .item_price, styling {
      h5 {
        font-weight: 600;
      }
      span {
        font-weight: 500;
      }
      p {
        font-size: 14px;
        font-weight: 500;
      }
    }
  }
  .payment_btn {
    padding: 12px 30px;
    background-color: ${colors.mainColor};
    color: #fff;
  }
  .update_cart {
    padding: 12px 30px;
    background-color: #EF761E;
    color: #fff;
  }
`;

export const CartTotal = styled.div`
  width: 100%;
  border-radius: 3px;
  h4 {
    font-size: 26px;
    font-weight: bold;
    span {
      font-size: 30px;
      color: ${colors.orangeColor};
      font-weight: bold;
    }
  }
  .total-content {
    display: flex;
    align-items: center;
    height: inherit;
    background-color: ${colors.containerBackgroundColor};
    padding: 30px 20px;
  }

  @media (max-width: 460px) {
    height: 70px;
    h4 {
      font-size: 20px;
      font-weight: bold;
      span {
        font-size: 24px;
      }
    }
  }
`;

export const DeliveryWrapper = styled.div`
  width: 100%;
`;

export const DeliveryMethod = styled.div`
  background-color: ${colors.whiteColor};
  box-shadow: 0px 4px 4px rgba(243, 243, 243, 0.5);
  height: 150px;
  width: 150px;
  margin: 20px;
  text-align: center;
  padding: 30px 15px;
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  img {
    width: 50px;
    height: 50px;
    object-fit: cover;
    transition: all 0.3s ease;
  }
  p {
    font-size: 16px;
    margin-top: 10px;
  }

  :hover {
    transform: scale(1.2);
  }

  &.active {
    transform: scale(1.2);
  }
`;

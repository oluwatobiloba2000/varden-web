import styled from "styled-components";

import colors from "../../colors";

export const Wrapper = styled.div`
  width: 100%;
  background-color: ${colors.containerBackgroundColor};
  min-height: 100vh;
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
    padding-top: 100px;
    margin-bottom: 50px;
  }
  .sprite {
    background: url("https://www.paystack.com/assets/payment/img/sprite.png")
      no-repeat;
    width: 20px;
    height: 20px;
    display: inline-block;
  }
  .paystack-container .paystack-footer {
    font-size: 11px;
    text-transform: uppercase;
    margin: 20px 0;
    text-align: center;
    opacity: 0.7;
  }
  .payment {
    .form-control {
      height: 50px !important;
    }
    input {
      padding: 20px 12px !important;
      border-radius: 3px !important;
      :focus {
        border: 2px solid ${colors.mainColor};
        box-shadow: none;
      }
    }
  }
  .pay-btn {
      background-color: ${colors.mainColor};
      color: ${colors.whiteColor};
      padding: 18px 64px;
      width: 100%;
      font-weight: bold;
      margin-top: 20px;
    }
    .No{
       background-color:red;
       color:#fff;
       padding: 18px 64px;
      width: 100%;
      margin-top: 20px;
     }
  @media (max-width: 460px) {
    height: auto;
    padding-bottom: 50px;
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

export const SelectDelivery = styled.div`
  margin-bottom: 20px;

  .address-card {
    width: 100%;
    box-shadow: 0px 4px 4px rgba(243, 243, 243, 0.5);
    border-radius: 3px;
    padding: 15px 30px;
    background-color: ${colors.whiteColor};
    margin-top: 50px;
    margin-bottom: 50px;
    display: flex;
    flex-direction: column;
    img {
      width: 20px;
      height: 20px;
      object-fit: cover;
      margin-right: 10px;
    }
    .flex{
      margin-bottom:20px;
    }
    .main-btn {
      background-color: ${colors.mainColor};
      color: #fff;
      padding: 7px 10px;
      font-size: 9px;
      font-weight:normal;
    }
    .secondary-btn {
      background-color: #dee2e6;
      color: #6c757d;
      padding: 7px 10px;
      font-size: 9px;
      font-weight:normal;
    }
  }
`;
export const PaymentMethod = styled.div`
  h3 {
    color: rgba(0, 0, 0, 0.74);
    font-size: 30px;
    font-weight: 500;
    margin-bottom: 30px;
  }

  .payment-box {
    width: 100%;
    background-color: ${colors.whiteColor};
    box-shadow: 0px 4px 4px rgba(243, 243, 243, 0.5);
    border-radius: 3px;
    padding: 15px;

    label {
      font-size: 13px;
      margin-bottom: 5px !important;
      color: #0000007a;
    }

    .top-margin {
      margin-top: 20px;
    }

    .btn-container {
      margin-top: 50px;
    }


  }
`;

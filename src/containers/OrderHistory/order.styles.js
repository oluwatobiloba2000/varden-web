import styled from "styled-components";
import colors from "../../colors";

export const Wrapper = styled.div`
  width: 100%;
  background-color: ${colors.containerBackgroundColor};
  min-height: 100vh;
  padding: 150px 0px 100px 0;
  .header-title {
    font-weight: 600;
  }
  .order-table {
    background-color: #fff;
    width: 100%;
    padding: 15px;
    border: 1px solid #f3f3f3;
    height: 500px;
    max-height: 500px;
    box-sizing: border-box;
    box-shadow: 4px 4px 2px rgba(243, 243, 243, 0.7);
    overflow: hidden;
    overflow-y: scroll;
  }
`;

export const ProcessOrder = styled.div`
  width: 100%;
  padding: 10px;
  height: 500px;
  max-height: 500px;
  background-color: #fff;
  border: 1px solid #f3f3f3;
  box-sizing: border-box;
  box-shadow: 4px 4px 2px rgba(243, 243, 243, 0.7);
  border-radius: 3px;
  overflow: hidden;
  overflow-y: scroll;
`;

export const OrderSummary = styled.div`
  width: 400px;
  overflow-y: scroll;
  padding-top: 30px;
  padding-bottom: 150px;
  background: #f7f8f9;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  box-sizing: border-box;
  box-shadow: -2px 4px 4px rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  position: fixed;
  height: 100vh;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 12;
  margin-right: 0px;
  transition: 0.7s ease-in-out all;
  &.hidden {
    margin-right: -600px;
  }
  .summary-header {
    height: 52px;
    background: #fff;
    padding: 0px 16px;
    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 400px;
    top: 0;
    -webkit-box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.05);
    box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.05);
    z-index: 100;
    span {
      color: #444;
      font-size: 14px;
      font-weight: 700;
    }
    img {
      width: 20px;
      height: 20px;
      object-fit: cover;
      cursor: pointer;
    }
  }
  .summary-details {
    padding: 18px 0px 18px;
    overflow-y: scroll;
    overflow: scroll;
    .items-list{
      margin-top:50px;
    }
  }
  .summary-footer {
    background: #fff;
    -webkit-box-shadow: 0 -1px 0 0 rgba(0, 0, 0, 0.05);
    box-shadow: 0 -1px 0 0 rgba(0, 0, 0, 0.05);
    height: 150px;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
    z-index: 200;
    position: fixed;
    bottom: 0;
    width: 400px;
    padding: 0px 16px;

    .subtotal {
      display: flex;
      justify-content: space-between;
      padding: 15px 0;
      border-bottom: 1px solid ${colors.containerBackgroundColor};
      span {
        font-weight: bold;
      }
      span:last-child {
        font-size: 18px;
      }
    }
    .checkout_btn {
      width: 100%;
      padding: 13px 35px;
      text-align: center;
      background-color: ${colors.orange};
      color: #fff;
    }
  }
  .track-btn{
    width: 100%;
      padding: 13px 35px;
      text-align: center;
      background-color: ${colors.mainColor};
      color: #fff;
  }
  .delete_modal {
    position: absolute;
    top: 0;
    width: 400px;
    height: 100vh;
    background: rgba(0, 0, 0, 0.05);
  }

  .close-tag {
    svg {
      cursor: pointer;
      height: 20px;
      width: 20px;
    }
  }
  p{
    font-size:17px;
  }
  .margin-top-xs{
    margin-top:50px;
  }
  .grey-font{
    color: rgba(0, 0, 0, 0.57);
  }
  @media (max-width: 600px) {
    width: 100%;
  }
`;

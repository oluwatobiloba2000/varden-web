import styled from "styled-components";
import colors from '../../colors';

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.6);
  overflow-y: scroll;
  &.hidden {
    display: none;
  }
`;

export const Cart = styled.div`
  width: 400px;
  background-color: #fff;
  height: 100vh;
  overflow-y: scroll;
  padding-top: 48px;
  padding-bottom: 150px;
  background: #f7f8f9;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position:relative;
  .cart-header {
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
  .cart-list {
    padding: 18px 0px 18px;
    overflow-y: scroll;
    overflow: scroll;
  }
  .cart-footer {
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
    .subtotal{
      display:flex;
      justify-content:space-between;
      padding:15px 0;
      border-bottom:1px solid ${colors.containerBackgroundColor};
      span{
        font-weight:bold;
      }
      span:last-child{
        font-size:18px;
      }
    }
    .checkout_btn{
      width:100%;
      padding:13px 35px;
      text-align:center;
      background-color: ${colors.orange};
      color:#fff;
    }
    .shopping_btn{
      width:100%;
      padding:13px 35px;
      text-align:center;
      margin-top:20;
      background-color: ${colors.containerBackgroundColor};
      color:#000;
    }
  }
  .delete_modal{
    position:absolute;top:0;width:400px;
    height:100vh;
    background: rgba(0, 0, 0, 0.05);
  }
`;

export const CardListItem = styled.div`
  width: 100%;
  background-color: #fff;
  background: #fff;
  border-radius: 4px;
  -webkit-box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
  margin-bottom: 16px;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  .block {
    display: block;
  }
  .item-details{
    flex:4;
    margin-left:10px;
  }
  .item-image {
    flex:1;
    img {
      width: 100px;
      height: 100px;
      object-fit: cover;
    }
  }
  h5 {
    font-size: 15px;
    color: #444;
    font-weight: bold;
  }
  span {
    font-size: 14px;
  }
  .cart-values {
    display: flex;
    margin-top: 10px;
    input {
      width: 40px;
      height: 30px;
      text-align: center;
      border: 2px solid #444;
      border-radius: 3px;
    }
    .price {
      margin-left: 5px;
      span {
        margin-left: 5px;
      }
    }
  }
  .item-image-delete {
    flex:0.4;
    img {
      width: 20px;
      height: 20px;
      object-fit: cover;
      cursor: pointer;
    }
  }
  .no-padding-lr{
    padding-left:0 !important;
    padding-right:0 !important;
  }
`;

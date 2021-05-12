import styled from "styled-components";

import colors from "../../colors";

export const DashWrapper = styled.div`
  width: 100%;
  background-color: ${colors.containerBackgroundColor};
  position: relative;
`;

export const NotificationPanel = styled.div`
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
  .btn_green {
    background-color: ${colors.mainColor};
    color: #fff;
    height: 45px;
    font-size: .9em;
  }
  .btn-block {
    width: 100%;
  }
  .notification-header {
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
  .notification-details {
    padding: 18px 0px 18px;
    overflow-y: scroll;
    overflow: scroll;
    form {
      label {
        font-size: .8em;
        font-weight: 600;
      }
      input {
        height: 50px;
        width: 100%;
        border: 1px solid #f2f2f2;
        font-size: .9em;
        border-radius: 5px;
        padding: 10px;
      }
      textarea {
        height: 100px;
        width: 100%;
        border: 1px solid #f2f2f2;
        font-size: .9em;
        border-radius: 5px;
        padding: 10px;
      }
    }
    .notifications-list {
      padding-top: 20px;
      .notifications-list-item {
        padding: 15px;
        background: #fff;
        box-shadow: 0px 1px 1px 4px #f2f2f2;
        border-radius: 5px;
        h6 {
          font-size: 15px;
          margin-top: 10px;
        }
        p {
          font-size: 13px;
          margin: 0;
        }
      }
    }
    .items-list {
      margin-top: 50px;
    }
  }
  .notification-footer {
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
  .track-btn {
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
  p {
    font-size: 17px;
  }
  .margin-top-xs {
    margin-top: 50px;
  }
  .grey-font {
    color: rgba(0, 0, 0, 0.57);
  }
  @media (max-width: 600px) {
    width: 100%;
  }
`;

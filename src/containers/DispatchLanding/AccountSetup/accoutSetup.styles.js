import styled from "styled-components";
import colors from "../../../colors";

export const Wrapper = styled.div`
  width: 100%;
  .header,
  .menu {
    height: 100px;
  }
  .menu {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .navlist {
    a {
      margin-right: 30px;
      transition: 0.6s ease-in-out;
      color: ${colors.mainColor};
      :last-child {
        margin-right: 0;
      }
      &:hover {
        color: #002554;
        transform: scale(2px);
        text-decoration: none;
      }
    }
  }
  @media (max-width: 460px) {
    .header,
    .menu {
      height: 50px;
    }
    .navlist {
      a {
        margin-right: 20px;
        font-size: 12px;
      }
    }
  }
`;


export const Main = styled.div`
  width: 100%;
  background-color: ${colors.containerBackgroundColor};
  padding: 100px 0px;
  border-top: 1px solid #e6e6e6;
  .flexify {
    margin-top: 50px !important;
  }
  .flexify p {
    font-size: 16px;
    color: ${colors.main};
    cursor: pointer;
    margin-bottom: 0;
    transition: 0.6s ease-in-out;
    display: flex;
    align-items: center;
    img {
      width: 20px;
      height: 20px;
      margin-right: 10px;
    }
    &:hover {
      color: #002554;
      transform: translateY(2px);
    }
  }
  .flexify,
  .links {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .links {
    background-color: #fff;
    padding: 10px 15px;
    border-bottom: 1px solid #f3f3f3;
    .active {
      padding: 10px 15px;
      color: ${colors.main};
    }
    .link {
      display: flex;
      justify-content: center;
      flex: 1 1 0%;
      position: relative;
    }
  }
`;

export const FormContainer = styled.div`
  width: 100%;
  padding: 30px;
  background-color: #fff;
  border-radius: 3px;
  form {
    label {
      font-size: 14px;
      margin-bottom: 2px;
    }
    .input {
      padding: 12px 15px;
    }
    textarea {
      width: 100%;
      padding: 15px;
      height: 150px;
      border-radius: 3px;
      border: 2px solid ${colors.inputBorderColor};
      :focus {
        outline: 1px solid ${colors.main};
      }
    }
    .btn {
      padding: 15px 20px;
      width: 200px;
      background-color: ${colors.mainColor};
      color: #fff;
      transition: 0.6s ease-in-out;
      &:hover {
        color: #fff;
        background-color: #002554;
        transform: translateY(2px);
        box-shadow: rgba(50, 50, 93, 0.1) 0px 7px 14px,
          rgba(0, 0, 0, 0.08) 0px 3px 6px;
      }
    }
    .group {
      margin-top: 20px;
    }
  }
  .no_padding{
    padding:0;
  }
`;

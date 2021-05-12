import styled, { css } from "styled-components";
import colors from "../../../colors";
// import headerImage1 from "../../assets/header-bg-1.jpg";

export const NavbarWrapper = styled.nav`
  .is-visible {
    display: block;
  }
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 2;
  height: 79px;
  & > div.container-fluid {
    width: 100%;
    z-index: 2;
    margin: 20px auto;
    display: flex;
    align-items: center;
    ${props =>
      props.white &&
      css`
        background-color: #fff;
        color: #000;
        border-bottom: 1px solid #f3f3f3;
        height: 80px;
        a {
          color: #000 !important;
          font-weight: 500;
          font-size: .9em;
        }
        .top-margin {
          margin-top: 0;
        }
        margin: 0 !important;
        button {
          background-color: ${colors.mainColor} !important;
          color: #fff !important;
        }
      `}
    .btn-logout {
      margin: 0px;
    }
    .none-mobile-nav {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 16px;
      font-weight: bold;
      height: auto;

      & > div > a {
        margin-right: 44px;
      }

      & > div > button {
        background-color: white;
        color: black;
        padding: 10px 30px;
      }
    }

    .logo {
      width: 70px;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    a {
      text-decoration: none;
      color: ${colors.white};
    }
    .hamburger {
      display: none;
    }
    @media (max-width: 560px) {
      .hamburger {
        display: block;
        img {
          width: 30px;
        }
      }
      height: 70px;
      .show-mobile {
        display: block;
      }
      .d-none-mobile {
        display: none;
      }
      & > div.container-fluid {
        height: 70px;
      }
    }
    @media (max-width: 460px) {
      .logo {
        width: 50px;
        height: 50px;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }
  }
`;

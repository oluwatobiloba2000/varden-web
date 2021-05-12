import styled from "styled-components";
import colors from "../../colors";

export const Wrapper = styled.div`
  width: 100%;
  background-color: ${colors.containerBackgroundColor};

  .top-nav, .bottom-nav{
    background-color: ${colors.whiteColor}
    border-bottom: 2px solid ${colors.containerBackgroundColor};

    .logo {
      width: 80px;
      height: 40px;
    }

    .avatar {
      width: 50px;
      height: 50px;
    }
  }


  nav > ul {
   display: flex; 
   list-style-type: none;
   align-items: center;
  }

  nav > ul li {
    margin: 0 2rem;
    cursor: pointer;
    display: flex;
    flex-direction: row;
  }

  nav > ul li:hover {
    color: ${colors.mainColor}

    svg path {
      fill: ${colors.mainColor};
    }
  }

  
  @media (max-width: 600px){
    .bottom-nav nav ul {
      overflow: auto;
      font-size: 1rem
    }

    nav > ul li {
      margin: 0 1.2rem 0 0.5rem;
      cursor: pointer;
    }

    .mobile-nav {
      .logo {
        width: 60px;
        height: 30px;
      }

      .avatar{
        width: 25px;
        height: 25px
      }
    }

  }
  

   
`;

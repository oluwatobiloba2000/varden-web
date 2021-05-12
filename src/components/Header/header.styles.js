import styled from "styled-components";
// import colors from "../../colors";
// import headerImage1 from "../../assets/header-bg-1.jpg";

export const HeaderWrapper = styled.section`
  width: 100%;
  height: 567px;
  position: relative;
  @media(max-width:770px){
    height:300px;
  }

  @media (max-width: 460px) {
    min-height:  300px;

    .logo {
        width: 100px;
        height: 50px;
    }
    
  }
`;

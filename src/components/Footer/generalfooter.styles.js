import styled from "styled-components";

import colors from "../../colors";

export const Wrapper = styled.div`
  width: 100%;
  background: #EF761E;
  // background-color: ${colors.gpFooter};
  padding: 50px 0;
  img {
    width: 100px;
  }
  .logo{
    width:50px;
    height:50px;
    object-fit:cover;
  }
  h6 {
    font-size: 15px;
    color: #fff;
    font-weight:bold;
    margin-bottom: 1.5em;
    text-transform: uppercase;
    @media(max-width:460px){
      margin-bottom:.9em;
    }
  }
  .links {
    color: #fff;
    font-size: 14px;
    line-height: 1.9em;
    a {
      display: block;
      color: #fff;
    }
    @media(max-width:460px){
      margin-top:40px;
    }
  }
  p{
    font-size: 15px;
    line-height: 1.6em;
    color: #fff;
    margin-top: 1.5em;
  }
`;

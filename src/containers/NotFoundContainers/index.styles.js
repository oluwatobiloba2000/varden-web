import styled from 'styled-components';

import colors from '../../colors';

export const Wrapper = styled.div`
  width:100%;
  height:100vh;
  background-color: ${colors.mainColor};
  h1{
    font-size:200px;
    color:#fff;margin:0;
  }
  h3{
    font-size:50px;
    color:#fff;
    margin:0;
  }
  p{
    color:#fff;
  }
  .top-padding{
    padding-top:100px;
  }
  a{
    margin-right:20px;
  }
`
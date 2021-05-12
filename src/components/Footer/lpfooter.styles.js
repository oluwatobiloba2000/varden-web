import styled from 'styled-components';

import colors from '../../colors';

export const Wrapper = styled.div`
  h1{
    font-size:30px;
    font-weight:bolder;
  }
  p{
    line-height:1.5em;
  }
  .footer-btn{
    width:100%;
    height:60px;
    color: #fff;
    background-color:${colors.mainColor};
    font-weight:bold;
    @media(max-width:460px){
      font-size:12px;
    }
  }
  .no-padding-left{
    padding-left:0;
  }
  .no-padding-right{
    padding-right:0;
  }
  form{
    margin-top:50px;
    margin-bottom:100px;
  }
  input{
    border-top-right-radius:0;
    border-bottom-right-radius:0;
    border-right:0;
    height:60px;
  }
  button{
    border-top-left-radius:0;
    border-bottom-left-radius:0;
  }
  input, button{
    box-shadow: 0 5px 25px rgba(0,0,0,.05);
  }
`
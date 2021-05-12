import styled from 'styled-components';

import colors from '../../colors';

export const  Wrapper = styled.div`
  width:100%;
  .margin__top-sm{
    margin-top:30px;
  }
`

export const Masthead = styled.div`
  width:100%;
  height:600px;
  overflow:hidden;
  // background-color: ${colors.mainColor};
    background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
      url("https://images.unsplash.com/photo-1542990725-319ce3f87c0c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    position: relative;
  .padding__top-lg{
    padding-top:200px;
  }
  h2{
    color: #fff;
    line-height:1.2em;
    font-size: 48px;
    font-weight: 600;
  }
  p{
    color: #fff;
    line-height: 1.2em;
    font-size: 20px;
  }
  input{
    border:0;
  }
  .btn{
    margin-top:10px;
    font-size: 17px;
    padding-left: 35px; 
    padding-right: 35px; 
    font-weight: 600;
    background-color: ${colors.mainColor};
    color: ${colors.white};
  }
  .phone{
    width:100%;
    overflow:hidden;
  }
`
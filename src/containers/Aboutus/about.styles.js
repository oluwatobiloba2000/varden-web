import styled from 'styled-components';
import colors from '../../colors';

export const Wrapper = styled.div`
  width:100%;
  p {
    font-size: 16px;
    line-height: 30px;
  }
  h1 {
    font-weight: 600;
  }
  .unique{
    padding:100px 0;
    .organic-text{
      text-align: center;
      h1{
        color:${colors.mainColor};
        font-weight:bold;
        font-size:60px;
        margin: 0;
      }
    }
  }
  .how{
    background-color: #F7F8FA;
    min-height: 550px;

    img{
      width: 100%;
      // max-height: 100%;
      min-height: 550px;
      object-fit: cover;
    }
    .no-left-padding{
      padding-left: 0;
    }
    h3 {
      font-weight: 600;
      color: #EF761E;
    }
    p{
      color: #6c757d;
      font-size: 16px;
      line-height: 29px;
    }
    .top{
      margin-top: 30px;
    }
  }
  .call-to-action{
    padding:100px 0;
    border-top: 1px solid #f3f3f3;
    border-bottom: 1px solid #f3f3f3;
    h2 {
      font-weight: 600;
    }
  }
  .buy-btn{
    padding: 15px 30px;
    background-color:${colors.mainColor};
    color:#fff;
    margin-top:50px;
  }
`;

export const Masthead = styled.div`
  width: 100%;
  height: 500px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url("https://images.unsplash.com/photo-1468408816249-a6778cf9ace2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding: 50px 0;
  h1 {
    font-size: 50px;
    font-weight: 600;
    color: #fff;
  }
  p {
    font-size: 20px;
    color: #fff;
  }
  .top-margin {
    margin-top: 180px;
  }

`
import styled from 'styled-components'

import colors from '../../colors';

export const SignupWrapper = styled.div`
  width:100%;
  min-height: 100vh;
  background-color: ${colors.mainColor};
  .logo{
    width:100px;
    height:100px;
    object-fit:cover;
    cursor:pointer;
  }
  .alt-login-text{
    font-size:17px;
    margin-top:26px;
    color:${colors.whiteColor},
    a{
      color:${colors.whiteColor},
    }
  }
`

export const FormContainer = styled.div`
  width:450px;
  background-color: ${colors.whiteColor};
  padding:50px;
  margin-top:30px;
  border-radius:3px;
  box-shadow: 2px 2px 10px ${colors.authBoxShadow};
  input:focus{
      outline:rgb(222, 230, 236);
    }
  .flex{
    display:flex;
    justify-content:space-between;
    :first-child{
      margin-right:10px;
    }
  }
  .input-wrapper{
    margin-bottom:20px;
    
  }
  p{
    margin-bottom:30px;
    text-align:center;
    font-size:17px;
  }
  .terms-text{
    font-size:12px;
    text-align:left;
  }
  .btn{
    background-color:${colors.mainColor};
    color: ${colors.white};
    width:100%;
  }
`
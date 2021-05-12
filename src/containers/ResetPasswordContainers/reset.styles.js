import styled from 'styled-components'

import colors from '../../colors';

export const ResetWrapper = styled.div`
  width:100%;
  background-color: ${colors.mainColor};
  height:100vh;
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
  margin-top:100px;
  border-radius:3px;
  box-shadow: 2px 2px 10px ${colors.authBoxShadow};
  .input-wrapper{
    margin-bottom:20px;
  }
  p{
    margin-bottom:30px;
    text-align:center;
    font-size:17px;
  }
  h5{
    text-align:center;
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
import styled from 'styled-components';

import colors from "../../colors";


export const Wrapper = styled.div`
  width: 100%;
  display:flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;
  h4{
    margin:20px 0;
  }
  .btn{
    width:200px;
    height:50px;
    background-color: ${colors.mainColor};
    color: #fff;
    margin-top: 50px;
    margin-bottom: 50px;
  }
  p{
    text-align:center;
  }
  img{
    width:100px;
    height:100px;
    object-fit:cover;
    margin-top:50px;
  }

`
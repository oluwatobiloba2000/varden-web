import styled from 'styled-components'
import colors from '../../../colors';

export const Wrapper = styled.div`
  width:100%;
  background-color:${colors.containerBackgroundColor};
  padding:50px 0 50px 0;
  h1 {
    font-weight: 600;
  }
  .margin__tb{
    margin:50px 0;
  }
`
export const Card = styled.div`
  padding: 40px 25px;
  background-color:#fff;
  border-radius:3px;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  box-shadow: 0px 0px 7px rgba(200,194,194,0.25);
  img{
    width:100px;
    height:100px;
    object-fit:cover;
  }
  h5{
    line-height:2em;
    margin-top:10px;
  }
  p{
    text-align:center;
    font-size: 15px;
  }

`
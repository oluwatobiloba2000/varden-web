import styled from 'styled-components';

import colors from '../../colors';

export const Wrapper = styled.div`
  margin-bottom: ${props => props.marginBottom};
  width:100%;
  .food-img-size{
    width:100px;
    object-fit:cover;
    @media(max-width:460px){
      width:50px;
      height:50px;
      margin-bottom:20px !important;
    }
  }
  .flexify{
    display:flex;
    width:100%;
    justify-content:space-between;
  }
  .delete{
    cursor:pointer;
  }
  .buttons{
    display:flex;
    flex-direction:column;
    .delete{
      align-self:flex-end;

      @media(max-width:460px){
        svg{
          width:15px;
          height:15px;
        }
      }
    }
    .cart-button{
      margin-top:45px;
      display:flex;
      align-items:center;
      input{
        width:40px;
        height:40px;
        background-color:${colors.containerBackgroundColor};
        border:0;
        outline:none;
        padding-left:10px;
        font-weight:bold;
        :focus{
          outline:none;
        }
        border-left:1px solid #f3f3f3;
        border-right:1px solid #f3f3f3;
      }
      .subtract, .add{
        background-color:${colors.containerBackgroundColor};
        height:40px;
        width:40px;
        display:flex;
        align-items:center;
        justify-content:center;
        cursor:pointer;
      }
      .subtract{
        border-top-left-radius:3px;
        border-bottom-left-radius:3px;
      }
      .add{
        border-top-right-radius:3px;
        border-bottom-right-radius:3px;
      }
      @media(max-width:460px){
        .subtract, .add, input{
          width:20px;
          height:20px;
        }
        .subtract, .add{
          svg{
            width:10px;
            height:10px;
          }
        }
        margin-top:20px;
        input{
          font-size:12px;
          padding-left:3px;
        }
      }
    }
  }

  .img-and-details{
    display:flex;
    align-items: center;
    img{
      margin-right:20px;
    }
  }
  .details{
    p,h4{font-weight:bolder; font-size:20px;}
    p{
      margin-top:40px;
      color: ${colors.orangeColor}
    }
    @media(max-width:460px){
      h4{font-size:15px;}
      p{margin-top:20px;font-size:14px}
    }
  }
`

import styled from "styled-components";
import colors from "../../colors";

export const HomeWrapper = styled.div`
  width: 100%;
  background-color: ${colors.containerBackgroundColor};
  position:relative;
  min-height: 100vh;
  .card-link {
    text-decoration: none
  }
  .content{
    // padding: 0 100px;
    margin-bottom:50px;
    padding-top:120px;
  }
  @media (max-width: 460px) {

  }
  .no-left-margin{
    margin-left:0;
    margin-right:0;
  }
  .search-form{
    input{
      padding:12px 15px;
    }
  }
  .top-margin-sm{
    margin-top: 30px;
  }
  .filter {
    background: #fff;
    box-shadow: 0px 0px 17px rgba(200,194,194,0.15);
    padding: 20px;
    margin: 0;
    .filter-select {
      width: 100%;
      height: 40px;
      background: #fff;
      font-size: .9em;
    }
    .title {
      font-weight: 600;
      padding: 10px 0;
      margin-bottom: 20px;
    }
    h6{
      margin-bottom: 20px;
      font-size: .9em;
    }
    button {
      background: #21a746;
      color: #fff;
    }
  }
  .filter h6:nth-child(2){
    margin-top:10px;
  }
  .margin-bottom_sm{
    margin-bottom: 50px;
  }
  .modal-img-style{
    width:100%;
    height:100px;
  }
  .modal_button{
    width:100%;
    padding:12px 30px;
    background-color:${colors.mainColor};
    color:#fff;
  }
  .modal_input{
    text-align:center;
    padding:12px 30px;
  }
`;


// export const HomeWrapper = styled.div`
//   width: 100%;
//   background-color: ${colors.containerBackgroundColor};
//   min-height: 100vh;

//   .content {
//     padding: 55px 55px;
//   }

//   .card-link {
//     text-decoration: none
//   }

//   @media (max-width: 460px) {
//     .content {
//       padding: 16px 16px;
//     }

//   }
// `;


export const CheckoutContainer = styled.div`
  width:100%;
  background-color: rgba(0,0,0,0.6);
  height:100%;
  position:fixed;
  top:0;
  z-index:1;
  &.hidden{
    display:none;
  }
`


export const CheckoutPanel = styled.div`
  width:400px;
  background-color:#fff;
  position:fixed;
  right:0;
  height:100%;
  margin-right:0px;
  transition: .7s ease-in-out all;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  background-color: ${colors.containerBackgroundColor};
  &.hidden{
    display:-500px;
  }
  .header{
    padding:15px;
    border-bottom:2px solid #f3f3f3;
    position:fixed;
    z-index:99999;
    width:100%;
  }

  .footer{
    padding:15px;
    border-top:2px solid #f3f3f3;
    position:fixed;
    z-index:99999;
    width:100%;
    bottom: 0;
    height:200px;
  }
`
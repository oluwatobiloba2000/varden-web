import styled from "styled-components";

import colors from "../../colors";

export const Wrapper = styled.div`
  width: 100%;
  padding-bottom:30px;
  background-color: ${colors.containerBackgroundColor};
`;

export const Header = styled.div`
  width: 100%;
  height: 80px;
  background-color: #fff;
  border-bottom: 1px solid #f3f3f3;
`;

export const MainContent = styled.div`
  width: 100%;
  padding-top:100px;
  padding-bottom:50px;
  .check{
    margin-bottom:20px;
  }
  .btn-con{
    margin-top:20px;
    .btn{height:60px;text-transform:uppercase;width:100%;font-size:12px}
    .btn-white{
      background-color:#fff;
      border:1px solid #f3f3f3;
    }
    .btn-green{
      background-color:${colors.mainColor};
      color:#fff;
      margin-right:10px;
    }
  }
  @media(max-width:460px){
    .btn-green{
      margin-bottom:10px;
    }
  }
`;

export const BarcodeContainer = styled.div`
  width: 100%;
  padding: 30px;
  background-color: #fff;
  box-shadow: 2px 4px 6px rgba(243, 243, 243, 0.5);
  border-radius: 3px;
  img {
    width: 100%;
    height: 100%;
    objec-fit: cover;
  }
`;

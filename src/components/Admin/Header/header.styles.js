import styled from "styled-components";
import colors from "../../../colors";

export const HeaderWrapper = styled.nav`
  width: 100%;
  border: none;
  background-color: ${colors.white};
  border-bottom: 1px solid #f3f3f3;
  position:fixed;
  top:0;
  z-index:10;
`;

export const HeaderNav = styled.div`
  height: 80px;
  background-color: #fff;
  width: 100%;
  display:flex;
  align-items:center;
  .flex{
    display:flex;
  justify-content:space-between;
  }
`;


export const Logo = styled.div`
  width:70px;
  height:100%;
  img{
    width:100%;
    height:100%;
    object-fit:cover;
  }
`
export const NavList = styled.div`
  display:flex;
  width:200px;
  justify-content:space-between;
  align-items:center;
  .notification{
    position:relative;
  }
  .count{
    position: absolute;
    top: -5px;
    left: 10px;
    background-color: #21a746;
    color: #fff;
    border-radius: 100px;
    line-height: 20px;
    height: 20px;
    font-size: 12px;
    width: 20px;
    text-align: center;
  }
  img{
    width:40px;
    height:40px;
    border-radius:100%;
    object-fit:cover;
  }
  .count, .notification, img{
    cursor:pointer;
  }
`;


export const Nav = styled.div`
  width: 100%;
  height: 50px;
  display:flex;
  a{
    color:#403f3f;
  }
  .list{
    display:flex;
    align-items:center;
    padding-right:70px;
    text-decoration:none;
    transition:.6s ease-in-out all;
    svg{
      path{
      transition:.6s ease-in-out all;
      }
    }
    :hover{
      text-decoration:none;
      color:${colors.mainColor}
      svg {
      path {
        fill: ${colors.mainColor};
      }
    }
    }
  span{
    font-weight:350;
    font-size:16px;
    svg{
      margin-right:10px;
      width:20px;
      height:20px;
      fill:#403f3f
    }
  }
  }
  .active {
    color: ${colors.mainColor};
    svg {
      path {
        fill: ${colors.mainColor};
      }
    }
  }
`;

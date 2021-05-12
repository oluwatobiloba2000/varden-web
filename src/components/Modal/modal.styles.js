import styled from "styled-components";

// import colors from '../../colors';

export const BackdropWrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  padding: 50px;
  z-index: 3;
  transition: 0.6 ease-in-out all;
  overflow:scroll;
  .custom-modal {
    background-color: #fff;
    border-radius: 5px;
    max-width: 500px;
    height: auto;
    padding: 50px 15px;
    max-height: 750px;
    margin: 50px auto;
    position: relative;
  }
  .close {
    position: absolute;
    top: 15px;
    right: 15px;
    width:20px;
    height:20px;
    object-fit:cover;
  }
  @media(max-width:560px){
    padding:15px;
  }
`;

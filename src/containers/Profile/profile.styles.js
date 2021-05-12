import styled from "styled-components";

import colors from '../../colors';

export const Wrapper = styled.div`
  width: 100%;
  background-color: ${colors.containerBackgroundColor};
  min-height: 100vh;
  padding: 100px 0px 100px 0;
  .btn{
    width:100%;
    background-color:${colors.mainColor};
    color:#fff;
    height:60px;
    :focus{
      outline:none;
    }
  }
`;

export const ProfileCard = styled.div`
  width: 100%;
  padding: 30px;
  // height: 400px;
  background-color: #fff;
  border: 1px solid #f3f3f3;
  box-sizing: border-box;
  box-shadow: 4px 4px 2px rgba(243, 243, 243, 0.7);
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  align-items: center;
  .upload-btn-wrapper {
    position: relative;
    overflow: hidden;
    display: inline-block;
  }
  .upload-btn-wrapper input[type=file] {
    font-size: 100px;
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0;
  }
  .button-change {
    margin: 0;
    margin-bottom: 5px;
    border: 1px solid #1FA746;
    border-radius: 5px;
    font-size: 12px;
    padding: 5px 7px;
    :hover {
      background: #1FA746;
      color: #fff;
    }
  }
  img {
    width: 100px;
    object-fit: cover;
    border-radius: 100px;
  }
  h4 {
    font-size: 18px;
  }
  .flexify {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .user-details {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
    h5 {
      font-size: 16px;
    }
  }
`;

export const EditProfile = styled.div`
  width: 100%;
  padding:30px;
  background-color: #fff;
  border: 1px solid #f3f3f3;
  box-sizing: border-box;
  box-shadow: 4px 4px 2px rgba(243, 243, 243, 0.7);
  border-radius: 3px;
  input{
    :focus{
      outline:1px solid ${colors.mainColor};
      border:0;
      border-radius:3px;
    }
  }
  textarea{
    height:150px;
    width:100%;
    border-radius:3px;
    border: 1px solid #f3f3f3;
    padding:15px;
    border-radius:3px;
    resize:none;
    :focus{
      outline:1px solid ${colors.mainColor};
      border:0;
      border-radius:3px;
    }
  }
  label{
    margin-bottom:0;
    font-size:14px;
    color:#212529ad;
  }
  .top-margin{
    margin-top:20px;
  }
`;

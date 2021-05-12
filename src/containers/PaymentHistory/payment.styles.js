import styled from "styled-components";

import colors from "../../colors";

export const Wrapper = styled.div`
  width: 100%;
  background-color: ${colors.containerBackgroundColor};
  min-height: 100vh;
  padding: 100px 0px 100px 0;
  .header-title {
    font-weight: 600;
  }
`;

export const ProfileCard = styled.div`
  width: 100%;
  padding: 30px;
  background-color: #fff;
  border: 1px solid #f3f3f3;
  box-sizing: border-box;
  box-shadow: 4px 4px 2px rgba(243, 243, 243, 0.7);
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  h4 {
    font-size: 18px;
  }
  .user-details {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
    img {
      width: 100px;
      object-fit: cover;
      border-radius: 100px;
    }

    h5 {
      font-size: 16px;
    }
  }
`;

export const PayHistoryCard = styled.div`
  width: 100%;
  padding: 30px;
  background-color: #fff;
  border: 1px solid #f3f3f3;
  box-sizing: border-box;
  box-shadow: 4px 4px 2px rgba(243, 243, 243, 0.7);
  border-radius: 3px;

  select,
  select:focus {
    background-color: #f3f3f3;
  }
`;

export const PaymentSummary = styled.div`
  width: 400px;
  padding: 30px;
  background-color: #fff;
  border: 1px solid #f3f3f3;
  box-sizing: border-box;
  box-shadow: -2px 4px 4px rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  position: fixed;
  height: 100vh;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 12;
  margin-right: 0px;
  transition: 0.7s ease-in-out all;
  &.hidden {
    margin-right:-600px; 
  }

  .close-tag{
      svg {
          cursor: pointer
      }
  }

  @media (max-width: 600px){
    width: 100%;
  }
`;

import styled from "styled-components";
import colors from "../../colors";

export const CardWrapper = styled.div`
  height: 250px;
  width: 100%;
  background-size: cover;
  // box-shadow: 0px 4px 4px rgba(243, 243, 243, 0.5);
  box-shadow: 0px 0px 7px rgba(200,194,194,0.25);
  color: rgba(0, 0, 0, 0.82);
  background-color: ${colors.white};
  display: flex;
  text-align: left;
  flex-direction: column;
  background-image: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.7) 59.69%, rgba(13, 12, 12, 0.82) 100%),
    url(${props => props.image});
  justify-content: space-between;
  margin-top: 30px;
  cursor: pointer;
  transition: 0.6s ease-in-out all;
  &:hover {
    box-shadow: 2px 4px 10px rgba(243, 243, 243, 0.5);
  }
  .col-1-cell-1 {
      min-height: 250px;
      max-height: 250px;
      h6 {
        font-weight: 600;
        color: #fff;
      }
      p {
        color: #fff;
        font-weight: 600;
        font-size: .8em;
      }
  }

  .food_content {
    text-align: left;
    margin: 0 20px;
  }

  .actions button {
    font-size: 14px;
    font-weight: normal;
  }

  .buy_button {
    background-color: ${colors.white};
    border: 1px solid ${colors.orange};
    color: ${colors.orange};
  }

  .buy_button:hover {
    background-color: ${colors.orange};
    color: ${colors.white};
  }

  .add_cart_button {
    background-color: ${colors.mainColor};
    color: ${colors.white};
    padding: 12px 30px;
    width: 100%;
    margin-top: 15px;
  }

  .add_cart_button:hover {
  }

  @media (max-width: 460px) {
    width: 100%;
    margin-right: 0px;
    .buy_button {
      padding: 10px 30px;
    }
  }
`;

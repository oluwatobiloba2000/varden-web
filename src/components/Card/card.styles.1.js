import styled from "styled-components";
import colors from "../../colors";

export const CardWrapper = styled.div`
  height: auto;
  width: 100%;
  box-shadow: 0px 4px 4px rgba(243, 243, 243, 0.5);
  color: rgba(0, 0, 0, 0.82);
  background-color: ${colors.white};
  display: flex;
  flex-direction: column;
  padding: 18px 15px;
  justify-content: space-between;
  margin-top: 20px;
  cursor: pointer;
  transition: 0.6s ease-in-out all;
  &:hover {
    box-shadow: 2px 4px 10px rgba(243, 243, 243, 0.5);
  }
  .price_tag {
    background-color: ${colors.orange};
    border-radius: 100px;
    padding: 3px 7px;
    color: ${colors.white};
    font-size: 12px;
    font-weight: bold;
  }

  .food_content {
    text-align: center;
    margin: 0 auto;
  }

  .food_image {
    margin: 0 auto 10px auto;
    img {
      width: 100%;
      height: 200px;
      object-fit: cover;
      border-radius: 3px;
      margin-top: 20px;
    }
  }

  .food_title {
    font-size: 14px;
    font-weight: bold;
  }

  .food_quantity {
    font-size: 12px;
    font-weight: normal;
    margin-top: 10px;
  }

  .actions {
    display: flex;
    justify-content: space-between;
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

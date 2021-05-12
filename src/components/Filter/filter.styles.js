import styled from "styled-components";
import colors from "../../colors";

export const FilterWrapper = styled.div`
  width: 100%;
  margin-bottom: 55px;

  h2 {
    font-size: 30px;
    font-weight: bold;
    //letter-spacing: 0.02em
  }
  .price_div{
    width:300px;
  }

  .card {
    background-color: ${colors.white};
    box-shadow: 0px 4px 4px rgba(243, 243, 243, 0.5);
    width: 100%;
    display: flex;
    flex-direction: row;
    // justify-content: center;
    align-items: center;
    padding: 15px 30px;
  }

  .card h4 {
    font-size: 14px;
    font-weight: bold;
  }

  .card button {
    font-size: 12px;
    font-weight: bold;
    margin-right: 16px;
  }

  .food_type_div {
    margin-right: 50px;

    button {
      padding: 3px 6px;
      color: ${colors.orange};
      background-color: ${colors.containerBackgroundColor};
    }

    button.active {
      background-color: ${colors.orange};
      color: ${colors.whiteColor};
    }
  }

  .input-range__slider{
    background-color: ${colors.orange};
    border:1px solid ${colors.orange}
  }

  .input-range__track--active {
    background: ${colors.orange};
}


  @media (max-width: 460px) {
    .card {
      flex-direction: column;
      align-items: start;

      h4 {
        margin-right: 32px;
      }

      .food_type_div {
        margin-right: 0px;
        margin-bottom: 16px;
        display: flex;
        align-items: center button {
          margin-right: 16px;
        }
      }
      .price_div{
        width:100%;
      }
    }
  }
`;

import styled from "styled-components";
import colors from "../../colors";

export const Wrapper = styled.div`
  width: 100%;
  padding: 20px;
  padding-top: 10px;
  background-color: #fff;
  border: 1px solid #f3f3f3;
  box-sizing: border-box;
  box-shadow: 4px 4px 2px rgba(243,243,243,0.7);
  border-radius: 3px;
  .photo {
    width: 20px;
    height: 20px;
    img {
      object-fit: cover;
      width: 20px;
      height: 20px;
      border-radius: 100px;
      margin-right:10px;
    }
  }
  .feedback-table {
    margin-top: 20px;
  }
  tr {
    border-bottom: 1px solid ${colors.tableBorderBtm};
    :last-child {
      border-bottom: 0;
    }
  }
  thead {
    border-bottom: 1px solid ${colors.tableBorderBtm};
  }
  th {
    font-size: 14px;
    font-weight: bold !important;
    color: #000 !important;
  }
  td {
    font-size: 14px;
    padding-top: 15px;
  }
  .tb-edit-btn,
  .tb-delete-btn {
    width: 50px;
    height: 25px;
    color: #fff;
    :first-child {
      margin-right: 10px;
    }
  }
  .tb-edit-btn {
    background-color: ${colors.mainColor};
  }
  .tb-delete-btn {
    background-color: ${colors.red};
  }
  .in-transit {
    color: #d0021b;
    background-color: #ffeeee;
    border-radius: 9px;
    display: block;
    width: 76.29px;
    height: 18px;
    font-size: 10px;
    font-weight: 500;
    letter-spacing: 0.21px;
    line-height: 18px;
    text-align: center;
  }
  .completed {
    color: #16b312;
    background: rgba(99, 218, 132, 0.2%);
    border-radius: 9px;
    display: block;
    width: 76.29px;
    height: 18px;
    font-size: 10px;
    font-weight: 500;
    letter-spacing: 0.21px;
    line-height: 18px;
    text-align: center;
  }
  .badge-completed {
    color: ${colors.mainColor};
    background: rgba(99, 218, 132, 0.2);
    padding: 0.3rem 0.5rem;
  }

  .badge-pending {
    background-color: rgba(255, 119, 43, 0.2);
    color: ${colors.orange};
    padding: 0.3rem 0.5rem;
  }
`;

import styled from "styled-components";
import colors from "../../../colors";

export const Wrapper = styled.div`
  width: 100%;

  table {
    thead {
      border-bottom: 1px solid ${colors.tableBorderBtm};
    }

    th {
      font-size: 14px;
      font-weight: bold;
      // color: ${colors.mainColor};
    }

    tr {
      border-bottom: 1px solid ${colors.tableBorderBtm};
      :last-child {
        border-bottom: 0;
      }
    }

    td {
      font-size: 12px;
      padding-top: 1.25rem;
    }
  }

  .badge-completed {
    color: ${colors.mainColor};
    background: rgba(99, 218, 132, 0.2);
    padding: 0.3rem 0.5rem;
  }

  .badge-in-transit {
    background-color: rgba(255, 119, 43, 0.2);
    color: ${colors.orange};
    padding: 0.3rem 0.5rem;
  }
`;

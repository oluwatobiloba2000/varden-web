import styled from "styled-components";
import colors from "../../colors";

export const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${colors.containerBackgroundColor};
  padding:130px 0;
  main {
    .full-height {
      height: 100%;
    }

    .card{
      border: 1px solid #F3F3F3;
      box-shadow: 4px 4px 2px rgba(243, 243, 243, 0.7);
      border-radius: 3px;
    
      header {
        h3 {
          font-size: 1rem;
        }

        span {
          font-size: 1rem
        }

      }

      .content{
        table {
          width: 100%
        }
        .table th{
          border-top: none;
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
  
        .action-btn{
          background-color: ${colors.mainColor};
          color: ${colors.whiteColor};
        }
      }

    }
  tr{
    border-bottom: 1px solid ${colors.tableBorderBtm};
    :last-child{
      border-bottom:0;
    }
  }
  thead{
    border-bottom: 1px solid ${colors.tableBorderBtm};
  }
  th{
    font-size:14px;
    font-weight:normal;
    color: ${colors.mainColor};
  }
  td{
    font-size:12px;
    padding-top:15px;
  }
  }
   
`;

export const ProfileDetailsCard = styled.div`
  width:100%;
  background-color:#fff;
  padding:50px 0;
  p {
    margin: 0;
    line-height: 29px;
  }
  .edit_btn{
    width:100%;
    padding:12px 15px;
    background-color:${colors.mainColor};
    color:#fff;
  }
`

export const OrderDetails = styled.div`
  width:100%;
  margin-top:50px;
`

export const Card = styled.div`
  width:100%;
  padding:15px;
  background-color:#fff;
  border-radius:3px;
  box-shadow: 4px 4px 2px rgba(243, 243, 243, 0.7);
`
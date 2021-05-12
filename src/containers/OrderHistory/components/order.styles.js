import styled from 'styled-components';
import colors from '../../../colors';


export const Wrapper = styled.div`
  width:100%;
  .list-card{
    padding:10px;
    display:flex;
    border-bottom:1px solid #f3f3f3;
    text-decoration:none;
    color:#000;
    font-size: 14px;
  }
  .flex{
    display:flex;
    justify-content:space-between;
    align-items:center;
  }
  .btn{
    padding:7px 15px;
    font-size: 14px;
    color: #fff;
  }
  .track-btn{
    background-color: ${colors.mainColor}
  }
  .view-btn{
    background-color:${colors.orange}
  }
`;

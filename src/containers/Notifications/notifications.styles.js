import styled from "styled-components";
import colors from '../../colors';

export const Wrapper = styled.div`
  width: 100%;
  background-color: ${colors.containerBackgroundColor};
  min-height: 100vh;
  padding: 150px 0px 100px 0;
  .btn {
    width: 100%;
    background-color: ${colors.mainColor};
    color: #fff;
    height: 60px;
    :focus {
      outline: none;
    }
  }
`;

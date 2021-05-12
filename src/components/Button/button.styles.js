import styled, { css } from "styled-components";
import colors from "../../colors";

export const ButtonWrapper = styled.button`
  // width: 100%;
  width: ${props => props.width};
  // height:60px;
  height: ${props => props.height};
  border-radius: 3px;
  border: none;
  cursor: pointer;
  outline: none;
  :focus{
    outline:none;
  }
  ${props =>
    props.main &&
    css`
      background-color: ${colors.mainColor};
      color: ${colors.whiteColor};
    `};
`;

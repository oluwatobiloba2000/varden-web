import styled from 'styled-components';

import colors  from '../../colors';

export const InputWrapper = styled.input`
  width:100%;
  height:${props => props.height};
  :focus{
    outline:none;
  };
  border-radius:3px;
  padding-left:15px;
  border:1px solid ${colors.inputBorderColor}
`
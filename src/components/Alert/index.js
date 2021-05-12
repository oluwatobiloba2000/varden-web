import React from 'react';


import { Wrapper, IconWrap, Body } from './alert.styles.js';
const Alert = ({type, body}) => {
  return (
    <Wrapper>
      <IconWrap>
        
      </IconWrap>
      <Body>
        <p>body</p>
      </Body>
    </Wrapper>
  )
}

export default Alert;
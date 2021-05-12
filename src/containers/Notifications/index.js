import React, { PureComponent } from 'react'


import { Wrapper } from './notifications.styles';

class Notifications extends PureComponent {
  render(){
    return (
      <Wrapper>
        <div className="container">
          <h5>Notifications</h5>
        </div>
      </Wrapper>
    )
  }
}

export default Notifications
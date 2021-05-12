import React, { PureComponent } from "react";
import { NavLink } from 'react-router-dom';

import { Wrapper } from './index.styles';

class NotFound extends PureComponent {
  render() {
    return (
      <Wrapper>
        <div className="container">
          <div className="row top-padding align-items-center">
            <div className="col-sm-6 col-md-6 align-items-center">
              <img src={require('../../assets/groceries.svg')} alt=""/>
            </div>

            <div className="col-sm-6 col-md-6">
              <h1>404</h1>
              <h3>Something's missing.</h3>
              <p>This page is missing or you were looking in the wrong store</p>
              <NavLink to="/">Go back home</NavLink>
              <NavLink to="/shop">Explore Farms</NavLink>
            </div>
          </div>

        </div>
      </Wrapper>
    );
  }
}

export default NotFound;

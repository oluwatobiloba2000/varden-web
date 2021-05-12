import React, { PureComponent } from 'react'
import { withRouter } from 'react-router-dom';

// import Button from '../../components/Button';
import GPFooter from './generalfooter';

import { Wrapper } from './lpfooter.styles';

class Footer extends PureComponent {
  render(){
    return (
      <Wrapper>
        <div className="container">
          {/* <div className="row">
            <div className="col-sm-12 col-md-6 offset-md-3 text-center">
              <h1>Ready to become a delivery partner?</h1>
              <p>Make more money during your spare time or full time delivering farm products to customers! live more happier helping others live happy</p>
            
              <form>
                <div className="row justify-content-center align-items-center">
               
                  <div className="col-6 no-padding-left text-center">
                    <Button 
                      buttonText="GET STARTED"
                      className="footer-btn"
                      height="60px"
                      onClick={() => this.props.history.push('/dispatch/register')}
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
         */}
          {/* <div className="row">
            <div className="col-12">
              <img src={require('../../assets/metro-illustration-generic.svg')} alt=""/>
            </div>
          </div> */}
        </div>
        <GPFooter />
      </Wrapper>
    )
  }
}

export default withRouter(Footer);
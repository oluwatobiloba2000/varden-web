import React, { PureComponent } from "react";

import Navbar from "../../components/Header/Navbar";
import PrimaryContent from './PrimaryContent';
// import Input from '../../components/TextInput';
import Button from '../../components/Button';
import { Wrapper, Masthead } from "./index.styles";
import Footer from "../../components/Footer/generalfooter";

class DispatchLanding extends PureComponent {
  render() {
    return (
      <React.Fragment>
        <Wrapper>
          <Masthead>
            <Navbar white/>
            <div className="container padding__top-lg">
              <div className="row align-items-center justify-content-center">
                <div className="col-sm-8 text-center">
                  <h2>Make extra money on the side</h2>
                  <p>Join varden foods delivery partners, deliver produce to customers and earn more</p>
                  <div className="margin__top-sm">
                    <p></p>
                  </div>
                  <div className="">
                    {/* <Input 
                      height="55px"
                      placeholder="Phone number"
                    /> */}
                  </div>
                  <div className="">
                    <Button 
                      buttonText="Get Started"
                      // width="100%"
                      height="55px"
                      className="btn"
                      onClick={() => this.props.history.push('/dispatch/register')}
                    />
                  </div>
                </div>
                
              </div>
            </div>
          </Masthead>
        </Wrapper>
        <PrimaryContent />
        <Footer />
      </React.Fragment>
    );
  }
}

export default DispatchLanding;

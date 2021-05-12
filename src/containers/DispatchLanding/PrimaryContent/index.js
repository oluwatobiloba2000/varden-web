import React, { PureComponent } from "react";

import { Wrapper, Card } from "./primary.styles";
import manSvg from '../../../assets/man.svg';
import deliverySvg from '../../../assets/delivery.svg'
import cashSvg from '../../../assets/cash.svg';

class PrimaryContent extends PureComponent {
  render() {
    return (
      <Wrapper>
        <div className="container">
          <div className="row">
            <div className="col-12 margin__tb text-center">
              <h1>How it works</h1>
            </div>
            <div className="col-sm-4 col-md-4 col-lg-4">
              <Card>
                <img src={manSvg} alt=""/>
                <h5>Register as a Dispatch Rider</h5>
                <p>Create a dispatch rider account today and get verified to start taking delivering orders</p>
              </Card>
            </div>
            <div className="col-sm-4 col-md-4 col-lg-4">
              <Card>
                <img src={deliverySvg} alt=""/>
                <h5>Deliver a product successfully</h5>
                <p>After verfication, you would be assigned orders for pickup and delivery</p>
              </Card>
            </div>
            <div className="col-sm-4 col-md-4 col-lg-4">
              <Card>
                <img src={cashSvg} alt=""/>
                <h5>Get paid for successfully delivery</h5>
                <p>Delivery confirmed, your customer is happy, you get paid, after a successful delivery</p>
              </Card>
            </div>
          </div>
        </div>
      </Wrapper>
    );
  }
}

export default PrimaryContent;

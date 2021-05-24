import React from "react";

import Button from "../../components/Button";
import Navbar from "../../components/Header/Navbar";
import { Wrapper, MainContent } from "./payment.styles";
import Footer from "../../components/Footer/generalfooter";
import CheckSvg from "../../assets/Check.svg";
import { useParams } from "react-router";

const SuccessPayment = () => {
    let { orderNumber } = useParams();

    return (
      <Wrapper>
        <Navbar white={true} />
        <MainContent>
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-6 col-lg-6 offset-md-3 text-center">
                <img
                  src={CheckSvg}
                  style={{
                    margin: 'auto',
                    marginBottom: '20px'
                  }}
                  alt=""
                  className="check"
                />
                <h4>Payment Successful</h4>
                <p>
                 Your order reciept has been sent to your email, please save the order number <br />
                  this is needed to verify that you paid for this product
                </p>

                <div>
                    <b>Order Number : <h1>{orderNumber}</h1></b>
                </div>

                <div className="btn-con">
                  <div className="row">
                    <div className="col-sm-12 col-md-8 offset-md-2">
                      <div className="row">
                        <div className="col-sm-12 col-md-12">
                          <Button
                            className="btn btn-green"
                            buttonText="Continue shopping"
                            onClick={() =>
                              window.location.replace('/shop')
                            }
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MainContent>
        <Footer />
      </Wrapper>
    )
}

export default SuccessPayment;
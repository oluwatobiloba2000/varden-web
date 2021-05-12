import React, { PureComponent } from "react";
import { connect } from "react-redux";

import Button from "../../components/Button";
import Navbar from "../../components/Header/Navbar";
import { Wrapper, MainContent, BarcodeContainer } from "./index.styles";
import Footer from "../../components/Footer/generalfooter";

var QRCode = require("qrcode.react");

class BarcodeScreen extends PureComponent {
  state = {
    qrcode: ""
  };
  _generateQrcode = () => {
    const qr = <QRCode value={this.state.qrcode} renderAs="canvas"/>;
    this.setState({
      qrImg: qr
    }, () => {
      console.log(this.state.qrImg)
      return qr
    })
  };

  componentDidMount = () => {
    const qrcode = window.localStorage.getItem("qrcode");
    this.setState({
      qrcode
    });
  };

  componentWillMount(){
    this._generateQrcode();
  }

  _downloadQrCode = () => {
    var canvas = document.getElementsByTagName("canvas");
    var img  = canvas[0].toDataURL("image/jpeg");
    this.setState({
      img: `<img src=${img}/>`
    }, () => console.log(this.state.img))
  }

  render() {
    const order = this.props.orders;
    return (
      <Wrapper>
        <Navbar white={true} />
        <MainContent>
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-6 col-lg-6 offset-md-3 text-center">
                <img
                  src={require("../../assets/Check.svg")}
                  alt=""
                  className="check"
                />
                <h4>Payment Successful</h4>
                <p>
                 Your order information has been sent also to your email, please save the QR-code <br />
                  this is needed to verify that you paid for this product
                </p>

                <div className="row">
                  <div className="col-sm-12 col-md-8 offset-md-2">
                    <BarcodeContainer>
                      {this.state.qrImg}
                    </BarcodeContainer>
                  </div>
                </div>

                <div className="btn-con">
                  <div className="row">
                    <div className="col-sm-12 col-md-8 offset-md-2">
                      <div className="row">
                        <div className="col-sm-12 col-md-12">
                          <Button
                            className="btn btn-green"
                            buttonText="Track Order"
                            onClick={() =>
                              this.props.history.push(
                                `${"/dashboard/tracking-order"}/${order._id}`
                              )
                            }
                          />
                        </div>
                        {/* <div className="col-sm-6 col-md-6">
                          <Button
                            className="btn btn-white"
                            buttonText="Download Barcode"
                            onClick={() => this._downloadQrCode()}
                          />
                          <a href={this.state.img} download="download" >Download as jpeg</a>
                        </div> */}
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
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.Payment.loading,
    success: state.Payment.success,
    error: state.Payment.error,
    orders: state.Orders.data,
    qrcode: state.Orders.qrcode
  };
};

export default connect(
  mapStateToProps,
  {  }
)(BarcodeScreen);

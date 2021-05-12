import React, { PureComponent } from "react";

import Input from "../../../../components/TextInput";
import Button from "../../../../components/Button";

class BankDetails extends PureComponent {
  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-sm-6 col-md-6 col-lg-6">
            <div className="group">
              <label htmlFor="bank_name">Bank name</label>
              <Input
                placeholder=""
                type="text"
                className="input"
                name="bankName"
                value={this.props.data.bankName}
                onChange={this.props.onChange}
              />
            </div>
          </div>
          <div className="col-sm-6 col-md-6 col-lg-6">
            <div className="group">
              <label htmlFor="account_number">Account Number</label>
              <Input
                placeholder=""
                type="text"
                className="input"
                name="bankAccount"
                value={this.props.data.bankAccount}
                onChange={this.props.onChange}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6 col-md-6 col-lg-6">
            <div className="group">
              <label htmlFor="bvn">BVN</label>
              <Input
                placeholder=""
                type="text"
                className="input"
                name="BVN"
                value={this.props.data.BVN}
                onChange={this.props.onChange}
              />
            </div>
          </div>
          <div className="col-sm-6 col-md-6 col-lg-6">
            <div className="group">
              <label htmlFor="bvn">varden account password</label>
              <Input
                placeholder=""
                type="password"
                className="input"
                name="password"
                value={this.props.data.password}
                onChange={this.props.onChange}
              />
            </div>
          </div>
        </div>
        <div className="group flexify">
          <p onClick={this.props.prevStep}>
            <img src={require("../../../../assets/left-arrow.png")} alt="" />
            Go back
          </p>

          <Button
            buttonText="Submit"
            className="btn"
            onClick={this.props.onSubmit}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default BankDetails;

import React, { PureComponent } from "react";

import Input from "../../../../components/TextInput";
import Button from "../../../../components/Button";

class NextOfKin extends PureComponent {
  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-sm-6 col-md-6 col-lg-6">
            <div className="group">
              <label htmlFor="nextOfKin_name">Next of Kin name</label>
              <Input
                placeholder=""
                type="text"
                className="input"
                name="nextOfKin_name"
                value={this.props.data.nextOfKin_name}
                onChange={this.props.onChange}
              />
            </div>
          </div>
          <div className="col-sm-6 col-md-6 col-lg-6">
            <div className="group">
              <label htmlFor="nextOfKin_number">Next of Kin Phone</label>
              <Input
                placeholder=""
                type="text"
                className="input"
                name="nextOfKin_number"
                value={this.props.data.nextOfKin_number}
                onChange={this.props.onChange}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6 col-md-6 col-lg-6">
            <div className="group">
              <label htmlFor="last_name">Next of Kin Address</label>
              <Input
                placeholder=""
                type="text"
                className="input"
                name="nextOfKin_address"
                value={this.props.data.nextOfKin_address}
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
            buttonText="Continue"
            className="btn"
            onClick={this.props.nextStep}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default NextOfKin;

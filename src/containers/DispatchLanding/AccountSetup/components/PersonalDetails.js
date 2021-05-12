import React, { PureComponent } from "react";

import Input from "../../../../components/TextInput";
// import FileUpload from "../../../../components/FileUpload";
import Button from "../../../../components/Button";

class PersonalDetails extends PureComponent {
  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-12">
            <div className="col-sm-4 col-md-4 col-lg-4 no_padding">
              <div className="group">
                <label htmlFor="photo">Profile Photo</label>
                <input type="file" onChange={this.props.collectImage} />
                {/* <FileUpload
                  height="150px"
                  uploadText="Upload profile photo"
                  onSelectedImage={img => this.props.collectImage(img)}
                  label="image"
                /> */}
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-6 col-lg-6">
            <div className="group">
              <label htmlFor="full_name">Full name</label>
              <Input
                placeholder=""
                type="text"
                className="input"
                name="name"
                value={this.props.data.name}
                onChange={this.props.onChange}
              />
            </div>
          </div>
          <div className="col-sm-6 col-md-6 col-lg-6">
            <div className="group">
              <label htmlFor="last_name">Date of Birth</label>
              <Input
                placeholder=""
                type="date"
                className="input"
                name="DOB"
                value={this.props.data.DOB}
                onChange={this.props.onChange}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6 col-md-6 col-lg-6">
            <div className="group">
              <label htmlFor="phoneNumber">Phone</label>
              <Input
                placeholder=""
                type="text"
                className="input"
                name="phoneNumber"
                value={this.props.data.phoneNumber}
                onChange={this.props.onChange}
              />
            </div>
          </div>
          <div className="col-sm-6 col-md-6 col-lg-6">
            <div className="group">
              <label htmlFor="email">Email address</label>
              <Input
                placeholder=""
                type="text"
                className="input"
                name="email"
                value={this.props.data.email}
                onChange={this.props.onChange}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6 col-md-6 col-lg-6">
            <div className="group">
              <label htmlFor="country">Country</label>
              <Input
                placeholder="e.g Nigeria"
                type="text"
                className="input"
                name="state"
                value={this.props.data.state}
                onChange={this.props.onChange}
              />
            </div>
          </div>
          <div className="col-sm-6 col-md-6 col-lg-6">
            <div className="group">
              <label htmlFor="state">State</label>
              <Input
                placeholder="e.g Lagos"
                type="text"
                className="input"
                name="country"
                value={this.props.data.country}
                onChange={this.props.onChange}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <div className="group">
              <label htmlFor="address">House address</label>
              <Input
                placeholder=""
                type="text"
                className="input"
                name="address"
                value={this.props.data.address}
                onChange={this.props.onChange}
              />
            </div>
          </div>
        </div>
        <div className="group flexify">
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

export default PersonalDetails;

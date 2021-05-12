import React, { PureComponent } from "react";

// import FileUpload from "../../../../components/FileUpload";
import Button from "../../../../components/Button";
import Input from "../../../../components/TextInput";



class Documents extends PureComponent {
  render() {
    return (
      <React.Fragment>
        <div className="row">
        <div className="col-sm-12">
            <div className="group">
              <label htmlFor="full_name">ID number (any of your Identity number could be used)</label>
              <Input
                placeholder=""
                type="text"
                className="input"
                name="ID"
                value={this.props.data.ID}
                onChange={this.props.onChange}
              />
            </div>
          </div>
        </div>
        <div className="row">
        <div className="col-sm-4 col-md-4 col-lg-4">
            <div className="group">
              <label htmlFor="nationalID">National ID</label>
              <input type="file" onChange={this.props.collectNational} />
              {/* <FileUpload
                height="200px"
                uploadText="Upload national id"
                label="nationalID"
                onSelectedImage={img => this.props.collectNational(img)} 
              /> */}
            </div>
          </div>
          <div className="col-sm-4 col-md-4 col-lg-4">
            <div className="group">
              <label htmlFor="votersCard">Voter's Card</label>
              <input type="file" onChange={this.props.collectVoters} />
              {/* <FileUpload
                height="200px"
                uploadText="Upload voter's card"
                label="votersCard"
                onSelectedImage={img => this.props.collectVoters(img)}
              /> */}
            </div>
          </div>
          <div className="col-sm-4 col-md-4 col-lg-4">
            <div className="group">
              <label htmlFor="driverLicense">Driver's License</label>
              <input type="file" onChange={this.props.collectLicence} />
              {/* <FileUpload
                height="200px"
                uploadText="Upload Driver's license"
                label="driverLicense"
                onSelectedImage={img => this.props.collectLicence(img)}
              /> */}
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

export default Documents;

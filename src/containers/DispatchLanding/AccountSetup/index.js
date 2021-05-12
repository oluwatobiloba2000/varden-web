import React, { PureComponent } from "react";
import { connect } from "react-redux";

import PersonalDetails from "./components/PersonalDetails";
import NextOfKin from "./components/NextOfKin";
import Documents from "./components/Documents";
import BankDetails from "./components/BankDetails";
import Thanks from "./components/Thanks";
import Navbar from "../../../components/Header/Navbar";
import Footer from "../../../components/Footer/generalfooter";

import { createDispatcher } from "../../../actions/dispatchRider";

import { Wrapper, Main, FormContainer } from "./accoutSetup.styles";
import Modal from "../../../components/Modal";

import API from '../../../services/api.services';

class AccountSetup extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      data: {
        name: "",
        email: "",
        phoneNumber: "",
        address: "",
        state: "",
        country: "",
        DOB: "",
        BVN: "",
        bankName: "",
        bankAccount: "",
        ID: "",
        nationalID: "",
        votersCard: "",
        driverLicense: "",
        nextOfKin_name: "",
        nextOfKin_address: "",
        nextOfKin_number: "",
        image: File,
        password: ""
      },
      isModalVisible: false
    };
  }

  nextStep = e => {
    e.preventDefault();
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  prevStep = e => {
    e.preventDefault();
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  _onHandleChange = e => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    console.log(value);
    this.setState(
      {
        data: {
          ...this.state.data,
          [e.target.name]: value
        }
      },
      () => console.log(this.state.data)
    );
  };

  _onSelectedImage = img => {
    this.setState({
      data: {
        ...this.state.data,
        image: img
      }
    });
  };

  _onSelectedNational = e => {
    const file = e.target.files[0]
    const image = file;

    let formdata = new FormData();
    formdata.append('image', image);

    API()({
      url: `https://varden-api.herokuapp.com/api/upload`,
			method: `POST`,
			data: formdata
		}).then(({ data }) => {
			console.log(data);
			this.setState({
				imageUpload: true,
				data: {
					...this.state.data,
					nationalID: data && data.data,
				},
			});
    })
    .catch((err) => {
      console.log(err);
    });
  };

  _onSelecteVoters = e => {
    const file = e.target.files[0]
    const image = file;

    let formdata = new FormData();
    formdata.append('image', image);

    API()({
      url: `https://varden-api.herokuapp.com/api/upload`,
			method: `POST`,
			data: formdata
		}).then(({ data }) => {
			console.log(data);
			this.setState({
				imageUpload: true,
				data: {
					...this.state.data,
					votersCard: data && data.data,
				},
			});
    })
    .catch((err) => {
      console.log(err);
    });
  };

  _onSelectedLicence = e => {
    const file = e.target.files[0]
    const image = file;

    let formdata = new FormData();
    formdata.append('image', image);

    API()({
      url: `https://varden-api.herokuapp.com/api/upload`,
			method: `POST`,
			data: formdata
		}).then(({ data }) => {
			console.log(data);
			this.setState({
				imageUpload: true,
				data: {
					...this.state.data,
					driverLicense: data && data.data,
				},
			});
    })
    .catch((err) => {
      console.log(err);
    });
  };


  _onSubmit = e => {
    e.preventDefault();
    const data = this.state.data;
    this.setState({ isModalVisible: true });
    for (let key in data) {
      if (!data[key]) {
        console.log('Error message', key);
        // return this.setState({
        //   errorMessage: "You need to provide all details"
        // });
      }
    }
    this.props.createDispatcher(data);
    console.log("I got here")
  };

  componentWillReceiveProps(nextProps) {
    if (!nextProps.loading && nextProps.success) {
      this.setState({ step: 0 });
    }
  }

  onSelectedImage = e => {
    const file = e.target.files[0]
    const image = file;

    let formdata = new FormData();
    formdata.append('image', image);

    API()({
      url: `https://varden-api.herokuapp.com/api/upload`,
			method: `POST`,
			data: formdata
		}).then(({ data }) => {
			console.log(data);
			this.setState({
				imageUpload: true,
				data: {
					...this.state.data,
					image: data && data.data,
				},
			});
    })
    .catch((err) => {
      console.log(err);
    });
  }

	onSelectedImage2 = img => {
    const image = img;
    console.log(image)
		let formdata = new FormData();
    formdata.append('image', image);
    console.log(formdata.entries());
    for (var key of formdata.entries()) {
      console.log(key[0] + ', ' + key[1]);
    }
		this.setState({ imageUpload: false });
		API({"content-type": 'multipart/form-data'})({
      url: `https://varden-api.herokuapp.com/api/upload`,
			method: `POST`,
			data: {
        image: formdata
      },
		}).then(({ data }) => {
			console.log(data);
			this.setState({
				imageUpload: true,
				data: {
					...this.state.data,
					image: [data],
				},
			});
    })
    .catch((err) => {
      console.log(err);
    });
  };
  

  render() {
    const { loading, success, error } = this.props;
    const that = this;
    const { step } = this.state;
    function renderComponent() {
      switch (step) {
        case 1:
          return (
            <PersonalDetails
              onChange={that._onHandleChange}
              data={that.state.data}
              nextStep={e => that.nextStep(e)}
              collectImage={that.onSelectedImage}
            />
          );
        case 2:
          return (
            <NextOfKin
              data={that.state.data}
              onChange={that._onHandleChange}
              prevStep={e => that.prevStep(e)}
              nextStep={e => that.nextStep(e)}
            />
          );
        case 3:
          return (
            <Documents
              data={that.state.data}
              onChange={that._onHandleChange}
              prevStep={e => that.prevStep(e)}
              nextStep={e => that.nextStep(e)}
              collectLicence={that._onSelectedLicence}
              collectVoters={that._onSelecteVoters}
              collectNational={that._onSelectedNational}
            />
          );
        case 4:
          return (
            <BankDetails
              data={that.state.data}
              onChange={that._onHandleChange}
              prevStep={e => that.prevStep(e)}
              onSubmit={that._onSubmit}
            />
          );
        default:
          return <Thanks />;
      }
    }
    return (
      <Wrapper>
        <Navbar white />
        <Main>
          <div className="container">
            <div className="row">
              <div className="col-sm-8 col-md-8 col-lg-8 offset-md-2">
                <div className="links">
                  <div className="link active">
                    <span>Personal Details</span>
                    <div className="arrow_left-main">
                      <div className="arrow_left-cover">
                        <div className="arrow_left" />
                      </div>
                    </div>
                  </div>
                  <div className="link active">
                    <span>Next of Kin</span>
                    <div className="arrow_left-main">
                      <div className="arrow_left-cover">
                        <div className="arrow_left" />
                      </div>
                    </div>
                  </div>
                  <div className="link active">
                    <span>Upload Documents</span>
                    <div className="arrow_left-main">
                      <div className="arrow_left-cover">
                        <div className="arrow_left" />
                      </div>
                    </div>
                  </div>
                  <div className="link active">
                    <span>Bank Details</span>
                    <div className="arrow_left-main">
                      <div className="arrow_left-cover">
                        <div className="arrow_left" />
                      </div>
                    </div>
                  </div>
                </div>
                <FormContainer>
                  <form onSubmit={this._onSubmit}>{renderComponent()}</form>
                </FormContainer>
              </div>
            </div>
          </div>
        </Main>
        <Footer />
        <Modal
          show={this.state.isModalVisible}
          onClose={() => this.setState({ isModalVisible: false })}
        >
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-sm-12 text-center" style={{ padding: 50 }}>
                {loading ? (
                  <React.Fragment>
                    <h5>Saving Dispatcher partner information ...</h5>
                    <img
                      src={require("../../../assets/main-color-loader.svg")}
                      alt=""
                    />
                  </React.Fragment>
                ) : !loading && !success && error ? (
                  <React.Fragment>
                    <h5>Couldn't send information</h5>
                    <p>This was caused because {error}</p>
                  </React.Fragment>
                ) : (
                  <React.Fragment>
                    <h5>Information saved successfully</h5>
                  </React.Fragment>
                )}
              </div>
            </div>
          </div>
        </Modal>
      </Wrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.Dispatcher.loading,
    success: state.Dispatcher.success,
    error: state.Dispatcher.error,
    data: state.Dispatcher.data
  };
};

export default connect(
  mapStateToProps,
  { createDispatcher }
)(AccountSetup);

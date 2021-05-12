import React, { PureComponent } from "react";
import { connect } from "react-redux";

import Input from "../../components/TextInput";
// import FileUpload from "../../components/FileUpload";
import Button from "../../components/Button";
import EmptyState from "../../components/EmptyState";

import API from "../../services/withoutHeader";

import { getUser, updateUser } from "../../actions/user";

import { Wrapper, ProfileCard, EditProfile } from "./profile.styles";

class Profile extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      imageUploading: false,
      data: {
        profilePicture: ""
      }
    };
  }

  componentDidMount() {
    this.props.getUser();
  }
  
  componentWillReceiveProps(nextProps) {
    if (!nextProps.error && nextProps.user) {
      const user = nextProps.user;
      this.setState({
        data: {
          ...user.user
        }
      });
    }
  }

  _onHandleChange = e => {
    this.setState(
      {
        data: {
          ...this.state.data,
          [e.target.name]: e.target.value
        }
      },
      () => console.log(this.state.data)
    );
  };

  uploadProfilePicture = async(data) => {
    await this.props.updateUser(data);
    this.setState({imageUploading: false});
  }

  onFileupload = e => {
    const file = e.target.files[0]
    const cover = file;

    let image = new FormData();
    image.append("image", cover);

    this.setState({imageUploading: true});

    API({
      url: `https://varden-api.herokuapp.com/api/upload`,
      method: `POST`,
      data: image
    }).then(({ data }) => {
        console.log(data);
        this.setState({ data: { ...this.state.data, profilePicture: [data && data.data] } }, () =>
          {
            const formdata = {
              profilePicture: data && data.data
            }
            this.uploadProfilePicture(formdata)
          }
        );
      })
      .catch(err => {
        console.log(err);
      });
  };

  _onUpdateUser = () => {
    const {
      firstname,
      lastname,
      state,
      country,
      phone,
      address
    } = this.state.data;
    let data = {
      firstname,
      lastname,
      state,
      country,
      phone,
      address
    };
    this.props.updateUser(data);
  };

  render() {
    const { loading, error } = this.props;
    const { data } = this.state;
    return (
      <Wrapper>
        <div className="container">
          <div className="row mt-5">
            {loading ? (
              <div className="col-sm-12 ">
                <div
                  className="row align-items-center justify-content-center"
                  style={{ marginTop: 100 }}
                >
                  <div className="col-sm-12 text-center">
                    <img
                      src={require("../../assets/main-color-loader.svg")}
                      alt=""
                    />
                    <h5 style={{ marginTop: 20 }}>Fetching user details...</h5>
                  </div>
                </div>
              </div>
            ) : (
              <React.Fragment>
                {!loading && error ? (
                  <div className="col-sm-12 card">
                    <div className="row align-items-center justify-content-center">
                      <div className="col-sm-6">
                        <EmptyState
                          img={require("../../assets/error.png")}
                          title="There was an error fetching details"
                          body={`This could either be a network error or error from the database, please check your network connection and refresh the page`}
                          buttonText="Refresh page"
                          onClick={() => this.props.getUser()}
                        />
                      </div>
                    </div>
                  </div>
                ) : (
                  <React.Fragment>
                    <div className="col-sm-4 col-md-4 col-lg-4">
                      <ProfileCard>
                        {
                          this.state.imageUploading
                          ? <span className="mb-3"><i className="mdi mdi-loading fa fa-spin" /> Uploading...</span>
                          : ''
                        }
                        <div className="upload-btn-wrapper">
                          <button className="button-change">Change</button>
                          <input type="file" onChange={this.onFileupload} />
                        </div>
                        {/* <p className="button-change float-right text-right"><i className="mdi mdi-pencil" /> Change</p> */}
                        {
                          data && data.profilePicture
                          ? <img src={data && data.profilePicture} alt="" />
                          : <img src={require("../../assets/user.svg")} alt="" />
                        }
                        <div className="user-details">
                          <h4>
                            {data && data.firstname} {data && data.lastname}
                          </h4>
                          <h5>{data && data.email}</h5>
                          <h5>{data && data.phone}</h5>
                        </div>
                      </ProfileCard>
                    </div>
                    <div className="col-sm-8 col-md-8 col-lg-8">
                      <EditProfile>
                        <div className="row">
                          {/* <div className="col-sm-12">
                            <div className="row">
                              <div className="col-sm-4 col-md-4 col-lg-4">
                                <FileUpload
                                  onSelectedImage={cover =>
                                    this.onFileupload(cover)
                                  }
                                  uploadText="Upload profile profilePicture"
                                  height="160px"
                                  label="profilePicture"
                                />
                              </div>
                            </div>
                          </div> */}
                          <div className="col-sm-6 col-md-6 col-lg-6 top-margin">
                            <label>First name</label>
                            <Input
                              placeholder=""
                              height="60px"
                              name="firstname"
                              value={data && data.firstname}
                              onChange={this._onHandleChange}
                            />
                          </div>
                          <div className="col-sm-6 col-md-6 col-lg-6 top-margin">
                            <label>Last name</label>
                            <Input
                              placeholder=""
                              height="60px"
                              name="lastname"
                              value={data && data.lastname}
                              onChange={this._onHandleChange}
                            />
                          </div>
                          <div className="ol-sm-6 col-md-6 col-lg-6 top-margin">
                            <label>Phone</label>
                            <Input
                              placeholder=""
                              height="60px"
                              name="phone"
                              value={data && data.phone}
                              onChange={this._onHandleChange}
                            />
                          </div>
                          <div className="col-sm-6 col-md-6 col-lg-6 top-margin">
                            <label>Country</label>
                            <Input
                              placeholder=""
                              height="60px"
                              name="country"
                              value={data && data.country}
                              onChange={this._onHandleChange}
                            />
                          </div>
                          <div className="col-12 top-margin">
                            <label>Address</label>
                            <textarea
                              name="address"
                              value={data && data.address}
                              onChange={this._onHandleChange}
                            />
                          </div>
                          <div className="col-6 top-margin">
                            <Button
                              buttonText="Save Profile"
                              className="btn"
                              onClick={this._onUpdateUser}
                            />
                          </div>
                        </div>
                      </EditProfile>
                    </div>
                  </React.Fragment>
                )}
              </React.Fragment>
            )}
          </div>
        </div>
      </Wrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.User.loading,
    error: state.User.error,
    user: state.User.user,
    isUserUpdating: state.User.isUserUpdating,
    isUserError: state.User.isUserError,
    isUserUpdated: state.User.isUserUpdated
  };
};

export default connect(
  mapStateToProps,
  { getUser, updateUser }
)(Profile);

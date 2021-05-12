import React, { PureComponent } from "react";

import ApiService from "../../services/api.services";
import { api } from "../../services/Endpoints";

import Loading from "../../routes/loading";
import Logo from "../../assets/logo.jpg";
import Button from "../../components/Button";
import { Wrapper, Content } from "./index.styles";

class Verification extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isVerified: false,
      isLoading: false,
      error: "",
      success: ""
    };
  }
  componentDidMount() {
    var token = this.props.match.params.token;
    this.setState({ isLoading: true });
    ApiService({})({
      url: `${api.verify}/${token}`,
      method: "GET"
    })
      .then(({ data }) => {
        if (data.status === 200) {
          this.setState(
            { isLoading: false, isVerified: true, success: data.message },
            () => {
              setTimeout(() => {
                window.location.replace("/login");
              }, 5000);
            }
          );
        }
      })
      .catch(err => {
        console.log(err);
        const error = err.response.data.message;
        this.setState({ isLoading: false, isVerified: false, error });
      });
  }

  displayVerifiedState = () => {
    const { isVerified, isLoading, error, success } = this.state;
    if (isLoading) {
      return (
        <Loading style={{ width: "0 !important", height: "0 !important" }} />
      );
    } else if (!isLoading && isVerified === false) {
      return <p>{error}</p>;
    } else {
      return (
        <React.Fragment>
          <p>{success}</p>
          <Button
            buttonText="Login in now"
            width="200px"
            height="50px"
            onClick={() => this.props.history.push("/login")}
          />
        </React.Fragment>
      );
    }
  };
  render() {
    return (
      <Wrapper>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-8 col-md-8 offset-md-2 text-center">
              <img src={Logo} alt="" />
              <Content>
                <h1>Email Verification</h1>
                <p>Please wait we are verifying your account</p>
                {this.displayVerifiedState()}
              </Content>
            </div>
          </div>
        </div>
      </Wrapper>
    );
  }
}

export default Verification;

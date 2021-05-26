import React, { PureComponent } from "react";
import { Link } from "react-router-dom";

import Input from "../../components/TextInput";
import Button from "../../components/Button";

import { ResetWrapper, FormContainer } from "./reset.styles";
import swal from "sweetalert";

import ApiService from "../../services/api.services";
import { api } from "../../services/Endpoints";

class Reset extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        email: ""
      },
      loading: false
    };
  }

  onChange = e => {
    this.setState({
      data: {
        ...this.state.data,
        [e.target.name]: e.target.value
      }
    });
  };

  onSubmit = e => {
    e.preventDefault();
    this.setState({ loading: true });
    const data = this.state.data;
    ApiService({
      url: `${api.forgotPass}`,
      method: "POST",
      data: data
    })
      .then(({ data }) => {
        console.log(JSON.stringify(data));
        this.setState({ loading: false });
        swal({
          icon: "success",
          title: "Password Reset initiated",
          text: `${data.message}`
        });
      })
      .catch(err => {
        const error = err.response.data.message;
        this.setState({ loading: false }, err => {
          swal({
            icon: "error",
            title: "Failed",
            text: error
          });
        });
      });
  };

  render() {
    console.log(this.state.data);
    return (
      <ResetWrapper>
        <div className="container">
          <div className="row justify-content-center">
            <FormContainer>
              <div className="col-sm-12 align-items-center text-center">
                <img
                  src={require("../../assets/logo.jpg")}
                  alt="logo"
                  className="logo"
                  onClick={() => this.props.history.push("/")}
                />
              </div>
              <h5>Reset Password</h5>
              <p>A Link would be sent to your email!</p>
              <div className="input-wrapper">
                <Input
                  placeholder="Email"
                  height="60px"
                  type="email"
                  name="email"
                  onChange={this.onChange}
                />
              </div>
              <div className="input-wrapper">
                <Button
                  buttonText={
                    this.state.loading ? "Loading..." : "Send me a link"
                  }
                  className="btn"
                  height="60px"
                  onClick={this.onSubmit}
                />
              </div>
            </FormContainer>
            <div className="col-sm-12 align-items-center text-center">
              <p className="alt-login-text">
                New to Appetite? <Link to="/signup">Sign up here</Link>
              </p>
            </div>
          </div>
        </div>
      </ResetWrapper>
    );
  }
}

export default Reset;

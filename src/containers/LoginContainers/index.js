import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import Input from "../../components/TextInput";
// import Button from "../../components/Button";

import LoginUser from "../../actions/login";

import { LoginWrapper, FormContainer } from "./login.styles";
import { Button } from "@chakra-ui/button";
import { Collapse } from "@chakra-ui/transition";
import { Alert, AlertIcon } from "@chakra-ui/alert";
import logoSVG from '../../assets/logo.jpg';

class Login extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        phone_email: "",
        password: ""
      },
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

  _onSubmit = e => {
    e.preventDefault();
    const data = this.state.data;
    for(let key in data){
      if(!data[key]){
        this.setState({error: 'Please fill in all the fields'})
      }else{
        this.props.LoginUser(data);
      }
    }
  };


  componentWillReceiveProps(nextProps){
    if(nextProps.success === true){
      window.location.replace('/shop');
    }
  }


  render() {
    const {loading, error} = this.props;
    console.log(error);
    return (
      <LoginWrapper>
        <div className="container">
          <div className="row justify-content-center">
            
            <FormContainer onSubmit={this._onSubmit}>
            <div style={{
                  display: "flex",
                  justifyContent: "center",
                  marginBottom: "20px"
            }}>
              <img
                src={logoSVG}
                alt="logo"
                className="logo"
                onClick={() => this.props.history.push("/")}
              />
            </div>
              <p>Welcome Back, login to your account!</p>
                <Collapse in={this.props.error} style={{marginBottom: '13px'}} animateOpacity>
                    <Alert status="error">
                      <AlertIcon /> 
                        {error}
                    </Alert>
                </Collapse>
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
                <Input
                  placeholder="password"
                  type="password"
                  height="60px"
                  name="password"
                  onChange={this.onChange}
                />
              </div>
              <div className="input-wrapper">
                <Button _hover={{
                  backgroundColor: 'green'
                }} isLoading={loading ? true : false} loadingText="login..." className="btn" height="60px" onClick={this._onSubmit} >
                  Login
                </Button>
              </div>
              <div className="input-wrapper terms-text">
                <p className="terms-text">
                  <Link to="/reset-password">forgot password?</Link>
                </p>
              </div>
            </FormContainer>
            <div className="col-sm-12 align-items-center text-center">
              <p className="alt-login-text">
                New to Appetite? <Link to="/signup">Sign up here</Link>
              </p>
            </div>
          </div>
        </div>
      </LoginWrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.Login.loading,
    success: state.Login.success,
    error: state.Login.error
  };
};

export default connect(
  mapStateToProps,
  { LoginUser }
)(Login);
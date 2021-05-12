import React, { Component } from "react";
import { Redirect } from "react-router-dom";

export function Guest(WrappedComponent) {
  let token = '';
  const user= JSON.parse(window.localStorage.getItem("current_user"));
  if(!user){
    token = null
  }else{
    token = user.token
  }
  return class extends Component {
    render() {
      return !token ? (
        <WrappedComponent {...this.props} />
      ) : (
        <Redirect to="/shop" />
      );
    }
  };
}

export function Private(WrappedComponent) {
  let token = '';
  const user= JSON.parse(window.localStorage.getItem("current_user"));
  if(!user){
    token = null
  }else{
    token = user.token
  }
  return class extends Component {
    render() {
      return token ? (
        <WrappedComponent {...this.props} />
      ) : (
        <Redirect to="/login" />
      );
    }
  };
}

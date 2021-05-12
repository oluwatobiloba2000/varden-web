import React, { PureComponent } from "react";
import { NavLink, withRouter } from "react-router-dom";

import Button from "../../../components/Button";

import { HeaderWrapper, HeaderNav, Nav, Logo, NavList } from "./header.styles";
class Header extends PureComponent {
  _logout = () => {
    window.localStorage.removeItem("current_user");
    window.location.reload();
  };
  render() {
    const path = this.props.match.path;
    return (
      <HeaderWrapper>
        <HeaderNav>
          <div className="container flex sp-btw">
            <Logo>
              <a href="/"><img src={require("../../../assets/logo.jpg")} alt="" /></a>
            </Logo>
            <NavList>
              <a className="list" href="/shop">Shop</a>

              <span>
                <Button buttonText="logout" onClick={() => this._logout()} />
              </span>
              <span className="notification" onClick={this.props.toggleNotification}>
                <svg
                  width="26"
                  height="30"
                  viewBox="0 0 26 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.49243 13.0966C3.49243 15.6461 3.21304 21.6182 0.523865 22.2817L0 22.4214V26.8568H8.94063C9.35972 28.6729 11.0012 30 12.8871 30C14.773 30 16.4144 28.6729 16.8335 26.8568H25.7742V22.4563L25.2503 22.3166C22.5611 21.6531 22.2817 15.6461 22.2817 13.1315C22.2817 7.12456 18.5797 4.74971 15.8906 3.80675C15.9604 3.56228 15.9953 3.31781 15.9953 3.07334C15.9953 1.36205 14.5984 0 12.922 0C11.2456 0 9.84866 1.39697 9.84866 3.07334C9.84866 3.31781 9.88358 3.56228 9.95343 3.80675C7.22934 4.71478 3.49243 7.08964 3.49243 13.0966ZM12.8871 28.603C11.8743 28.603 10.9662 28.0093 10.5122 27.1362H15.227C14.8079 28.0093 13.8999 28.603 12.8871 28.603ZM11.0012 4.88941L11.8743 4.64494L11.4203 3.8766C11.2806 3.63213 11.2107 3.31781 11.2107 3.03842C11.2107 2.09546 11.979 1.36205 12.8871 1.36205C13.7951 1.36205 14.5634 2.13038 14.5634 3.03842C14.5634 3.31781 14.4936 3.63213 14.3539 3.8766L13.8999 4.64494L14.773 4.88941C17.5669 5.65774 20.8498 7.71828 20.8498 13.0966C20.8498 20.2561 22.631 22.7357 24.3423 23.4692V25.4598H1.39697V23.4692C3.10827 22.7357 4.88941 20.2561 4.88941 13.0966C4.88941 7.7532 8.20722 5.69267 11.0012 4.88941Z"
                    fill="black"
                  />
                </svg>
                {/* <span className="count">4</span> */}
              </span>
            </NavList>
          </div>
        </HeaderNav>
        <div className="container">
          <Nav>
            <NavLink
              exact
              to={`${path}`}
              activeClassName="active"
              className="list"
            >
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M379.4 178.3l-87.2 133.4C299 320 303 330.5 303 342c0 26.5-21.5 48-48 48s-48-21.5-48-48c0-3 .3-6 .8-8.9l-57.6-33.5c-8.6 8.3-20.3 13.4-33.3 13.4-8.6 0-16.6-2.3-23.6-6.2L32 364.2v57.2c0 23.5 19.2 42.7 42.7 42.7h362.7c23.5 0 42.7-19.2 42.7-42.7V208.8l-58.6-38.9c-8.1 6.3-18.3 10.1-29.4 10.1-4.4 0-8.7-.6-12.7-1.7z" />
                  <path d="M117 217c26.5 0 48 21.5 48 48 0 2.1-.2 4.2-.4 6.2l60.1 33.6c8.3-6.8 18.8-10.8 30.4-10.8 3.6 0 7.1.4 10.4 1.1l87.4-135.4c-5.6-7.8-8.9-17.4-8.9-27.8 0-26.5 21.5-48 48-48s48 21.5 48 48c0 3.9-.5 7.7-1.3 11.3l41.3 27.6V90.7c0-23.5-19.2-42.7-42.7-42.7H74.7C51.2 48 32 67.2 32 90.7V320l40-38.3c-1.9-5.2-3-10.8-3-16.7 0-26.5 21.5-48 48-48z" />
                </svg>
              </span>
              <span>Overview</span>
            </NavLink>
            <NavLink
              exact
              to={`${path}/profile`}
              activeClassName="active"
              className="list"
            >
              <span>
                <svg
                  width="17"
                  height="20"
                  viewBox="0 0 17 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.3636 19.0909C16.3636 19.593 15.9566 20 15.4545 20C14.9525 20 14.5455 19.593 14.5455 19.0909C14.5455 15.5764 11.6964 12.7273 8.18182 12.7273C4.66728 12.7273 1.81818 15.5764 1.81818 19.0909C1.81818 19.593 1.41117 20 0.909091 20C0.407014 20 0 19.593 0 19.0909C0 14.5722 3.66312 10.9091 8.18182 10.9091C12.7005 10.9091 16.3636 14.5722 16.3636 19.0909ZM8.18182 10C5.42039 10 3.18182 7.76142 3.18182 5C3.18182 2.23858 5.42039 0 8.18182 0C10.9432 0 13.1818 2.23858 13.1818 5C13.1818 7.76142 10.9432 10 8.18182 10ZM8.18182 8.18182C9.93909 8.18182 11.3636 6.75727 11.3636 5C11.3636 3.24273 9.93909 1.81818 8.18182 1.81818C6.42455 1.81818 5 3.24273 5 5C5 6.75727 6.42455 8.18182 8.18182 8.18182Z"
                    fill="black"
                  />
                </svg>
              </span>
              <span>Profile</span>
            </NavLink>
            <NavLink
              exact
              to={`${path}/payment-history`}
              activeClassName="active"
              className="list"
            >
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M435.2 80H76.8c-24.9 0-44.6 19.6-44.6 44L32 388c0 24.4 19.9 44 44.8 44h358.4c24.9 0 44.8-19.6 44.8-44V124c0-24.4-19.9-44-44.8-44zm0 308H76.8V256h358.4v132zm0-220H76.8v-44h358.4v44z" />
                </svg>
              </span>
              <span>Payment History</span>
            </NavLink>
            {/* <NavLink
              exact
              to={`${path}/tracking-order/081234`}
              activeClassName="active"
              className="list"
            >
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M256 32c-88.004 0-160 70.557-160 156.801C96 306.4 256 480 256 480s160-173.6 160-291.199C416 102.557 344.004 32 256 32zm0 212.801c-31.996 0-57.144-24.645-57.144-56 0-31.357 25.147-56 57.144-56s57.144 24.643 57.144 56c0 31.355-25.148 56-57.144 56z" />
                </svg>
              </span>
              <span>Track current order</span>
            </NavLink> */}
            <NavLink
              exact
              to={`${path}/order-history`}
              activeClassName="active"
              className="list"
            >
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M169.6 377.6c-22.882 0-41.6 18.718-41.6 41.601 0 22.882 18.718 41.6 41.6 41.6s41.601-18.718 41.601-41.6c-.001-22.884-18.72-41.601-41.601-41.601zM48 51.2v41.6h41.6l74.883 151.682-31.308 50.954c-3.118 5.2-5.2 12.482-5.2 19.765 0 27.85 19.025 41.6 44.825 41.6H416v-40H177.893c-3.118 0-5.2-2.082-5.2-5.2 0-1.036 2.207-5.2 2.207-5.2l20.782-32.8h154.954c15.601 0 29.128-8.317 36.4-21.836l74.882-128.8c1.237-2.461 2.082-6.246 2.082-10.399 0-11.446-9.364-19.765-20.8-19.765H135.364L115.6 51.2H48zm326.399 326.4c-22.882 0-41.6 18.718-41.6 41.601 0 22.882 18.718 41.6 41.6 41.6S416 442.082 416 419.2c0-22.883-18.719-41.6-41.601-41.6z" />
                </svg>
              </span>
              <span>Order History</span>
            </NavLink>
          </Nav>
        </div>
      </HeaderWrapper>
    );
  }
}

export default withRouter(Header);

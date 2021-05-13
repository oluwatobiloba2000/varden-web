import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import Logo from "../../../assets/logo.jpg";
// import Button from "../../Button";
import { NavbarWrapper } from "./navbar.styles";
// import { CartIcon } from "../../Icons";
import { fetchCart } from './../../../actions/cart';
import cartSVG from '../../../assets/cart.svg';
import { Badge } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";

/**
 * @param {Boolean} white: set to true to give the navbar a white bg color
 */
class Navbar extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      dropDownActive: false,
      isLoggedIn: false,
      isMobileMenuVisible: false
    };
  }

  toggleDropDown = () => {
    this.setState({ dropDownActive: !this.state.dropDownActive });
  };

  componentDidMount() {
    let token = "";
    const user = JSON.parse(window.localStorage.getItem("current_user"));
    if (!user) {
      token = null;
    } else {
      token = user.token;
    }
    if (token) {
      this.setState({ isLoggedIn: true });
    }
  }

  _onHandleLogout = () => {
    const user = window.localStorage.removeItem("current_user");
    if (!user) {
      setTimeout(function() {
        window.location.reload();
      }, 1000);
    }
  };

  render() {
    const { isLoggedIn, isMobileMenuVisible } = this.state;
    const cartItemsCount = this.props.cartCount || JSON.parse(window.localStorage.getItem('cartItems'))?.length || 0;
    // const cartItems = JSON.parse(window.localStorage.getItem('cartItems'));
    // const cartItemsCount = this.props.isCartLoading ? <i className="mdi mdi-loading fa fa-spin" />
    //  : isLoggedIn 
    //   ? cartItems && cartItems.length > 0
    //     ? cartItems.length + (this.props.cart && this.props.cart.carts && this.props.cart.carts.length) || ''
    //     : (this.props.cart && this.props.cart.carts && this.props.cart.carts.length) || ''
    //   : (cartItems && cartItems.length) || ''
    return (
      <NavbarWrapper white={this.props.white}>
        <div className="container-fluid d-md-flex">
          <nav className="container none-mobile-nav  d-md-flex">
            <a href="/">
              <img src={Logo} alt="" className="logo" />
            </a>
            <div className="top-margin d-none-mobile" style={{
              display: 'flex',
              alignContent: 'center'}}>
              {isLoggedIn ? (
                <React.Fragment>
                  <Link to="/shop" style={{marginTop: '9px'}}>Shop</Link>
                  {/* <Link to="/farm-to-table">Farm to table</Link> */}
                  {/* <Link to="/dashboard">Dashboard</Link> */}
                  <Button
                    onClick={this._onHandleLogout}
                    marginRight="10px"
                    p="7px 10px"
                    className="btn btn-logout"
                  >logout</Button>

                  <span style={{marginLeft: '10px',
                      height: '20px',
                      position: 'relative',
                      marginTop: '12px'}}>
                      <Link to="/cart"
                      style={{
                        display: 'flex'
                      }}
                      //  onClick={() => this.props.showCart()}
                      >
                        <img src={cartSVG} width="20px" alt="" className="mr-1" /> 
                        {/* <span className="badge">{cartItemsCount}</span> */}
                        <Badge colorScheme="red" style={{
                          borderRadius: '15px',
                          padding: '2px 5px 0px 5px',
                          position: 'absolute',
                          right: '-9px',
                          top: '-8px'
                        }}>{cartItemsCount || 0}</Badge>
                      </Link>
                  </span>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <Link to="/shop" style={{marginTop: '9px'}}>Shop</Link>
                  {/* <Link to="/farm-to-table">Farm to table</Link> */}
                  <Link style={{marginTop: '9px', color: 'green'}} to="/login">Login</Link>
                  <a href="/signup" >
                      <Button style={{marginTop: '4px',
                      padding: '5px 11px'}}>
                        Signup
                      </Button>
                    </a>

                   <span style={{marginLeft: '10px',
                      height: '20px',
                      position: 'relative',
                      marginTop: '12px'}}>
                      <Link to="/cart"
                      style={{
                        display: 'flex'
                      }}
                      //  onClick={() => this.props.showCart()}
                      >
                        <img src={cartSVG} width="20px" alt="" className="mr-1" /> 
                        {/* <span className="badge">{cartItemsCount}</span> */}
                        <Badge colorScheme="red" style={{
                          borderRadius: '15px',
                          padding: '2px 5px 0px 5px',
                          position: 'absolute',
                          right: '-9px',
                          top: '-8px'
                        }}>{cartItemsCount || 0}</Badge>
                      </Link>
                  </span>
                </React.Fragment>
              )}
            </div>
            <div
              className="hamburger show-mobile"
              onClick={() => this.setState({ isMobileMenuVisible: true })}
            >
              <img src={require("../../../assets/menu.png")} alt="" />
            </div>
          </nav>
        </div>
        <div className={isMobileMenuVisible ? "modal is-visible" : "modal"}>
          <div className="container">
            <div className="row justify-content align-items-center">
              <div className="col-sm-6">
                <div className="modal-content">
                  <img src={require('../../../assets/cancel.png')} onClick={this.setState({isMobileMenuVisible: false})} alt=""/>
                  <ul>
                    <li>
                      <a href="/shop">Shop for products</a>
                    </li>
                    <li>
                      <a href="/delivery partners">delivery-partners</a>
                    </li>
                    {isLoggedIn ? (
                      <React.Fragment>
                        {/* <li>
                          <a href="/dashboard">Dashboard</a>
                        </li> */}
                        <li>
                        <Button
                          buttonText="logout out"
                          onClick={this._onHandleLogout}
                          className="mb-menu-btn btn-logout"
                        />
                        </li>
                      </React.Fragment>
                    ) : (
                      <React.Fragment>
                        <li>
                          <a href="/login">Login</a>
                        </li>
                        <li>
                          {" "}
                          <Button
                            className="mb-menu-btn"
                            buttonText="Sign up"
                            onClick={() => this.props.history.push("/signup")}
                          />
                        </li>
                      </React.Fragment>
                    )}{" "}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </NavbarWrapper>
    );
  }
}

// export default withRouter(Navbar);
const mapStateTeProps = state => {
  return {
    isCartLoading: state.Cart.loading,
    isFetching: state.Cart.isFetching,
    isSuccess: state.Cart.isSuccess,
    isDeleting: state.Cart.isDeleting,
    hasDeleted: state.Cart.hasDeleted,
    cart: state.Cart.cart
  };
};

export default connect(mapStateTeProps, { fetchCart })(Navbar);

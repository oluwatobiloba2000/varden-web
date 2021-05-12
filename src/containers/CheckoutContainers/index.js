/* eslint-disable use-isnan */
import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import Footer from "../../components/Footer/generalfooter";
import Button from "../../components/Button";
import Navbar from "../../components/Header/Navbar";

import { addToCart, fetchCart, updateCartQuantity } from "../../actions/cart";

import { Wrapper, CartWrapper } from "./checkout.styles";
import CartPanel from "../../components/CartPanel";
import Modal from "../../components/Modal";
import { IncrementerWrapper } from "../SingleProductView/index.styles";

class Checkout extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      carts: [],
      quantities: undefined,
      isErrorModalVisible: false,
      isCartVisible: false,
      cartItems: {},
      cartCount: 0,
      onChangeQuantityStatus: false,
      isUpdatingCart: false
    };
  }

  setDeliveryMethod = method => {
    this.setState({ deliveryMethod: method });
  };

  onChange = e => {
    console.log(e.target.value);
  };

  onPaymentChange = e => {
    this.setState(
      {
        cardDetails: {
          ...this.state.cardDetails,
          [e.target.name]: e.target.value
        }
      },
      () => console.log(this.state.cardDetails)
    );
  };

  componentDidMount() {
    const user = JSON.parse(window.localStorage.getItem("current_user"));
    if (!user) {
      if (!this.state.token) {
        return this.setState({ isErrorModalVisible: true });
      }
    } 
    if (user.hasOwnProperty("role")) {
      console.log("it has role property");
    } else {
      this.setState({ token: user.token });
      console.log("it has no role property");
    }
    if (user && user.token) {
      const cartItems = JSON.parse(window.localStorage.getItem('cartItems'));
      this.setState({carts :cartItems});
    } else {
      window.location.replace('/cart');
    }
  }

  getArrayOfQuantity = () => {
    const { cart } = this.props;
    const carts = cart && cart.carts;
    const quantities = carts && carts.reduce((acc, item) => {
      acc.push(item.quantity)
      return acc;
    }, []);
    console.log(quantities);
    this.setState({quantities});
  }

  updateDBCart = () => {
    const cartItems = JSON.parse(window.localStorage.getItem('cartItems'));
    const produceIds = cartItems && (cartItems.map((item) => {
      return item._id;
    }) || []);

    console.log(produceIds);

    const payloadObject = {}
    for (let i = 0; i < produceIds.length; i++) {
      const id = produceIds[i];
      const quantity = payloadObject[id] && payloadObject[id]["quantity"];
  
      console.log("quantity", quantity, isNaN(quantity), quantity !== NaN, quantity);
      payloadObject[id] = {
        quantity: !isNaN(quantity) && quantity !== NaN && quantity ? quantity + 1 : 1,
        produceID: id
      }
    }

    console.log(payloadObject);

    const payload = Object.values(payloadObject);
    if (payload && payload.length > 0) {
      this.props.addToCart(payload)
    } else {
      this.props.fetchCart()
    }
  }

  async componentDidUpdate(prevProps, prevState) {
    this.setState({cartCount: JSON.parse(window.localStorage.getItem('cartItems'))?.length || 0 })
    
    if (this.props.isSuccess && this.props.hasDeleted) {
      window.location.reload();
    }
    if (this.props.isFetching !== prevProps.isFetching) {
      await this.getArrayOfQuantity();
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.onChangeQuantityStatus) {
      this.setState({onChangeQuantityStatus: false})
      return true;
    }
    if (nextState.quantities && !this.state.quantities) {
      return true;
    }
    if (this.props.isFetching !== nextProps.isFetching) {
      this.setState({onChangeQuantityStatus: false})
      return true;
    }
    if (this.state.isUpdatingCart !== nextState.isUpdatingCart) {
      return true;
    }
    return false;
  }

  incrementQuantity = (i, e) => {
    const quantities = this.state.quantities;
    quantities[i] += 1;
    this.setState({ quantities, onChangeQuantityStatus: true });
  }

  decrementQuantity = (i, e) => {
    if (this.state.quantities[i] > 1) {
      const quantities = this.state.quantities
      quantities[i] -= 1;
      this.setState({ quantities, onChangeQuantityStatus: true });
    }
  }

  onChangeQuantity = (i, e) => {
    e.preventDefault();
    if (e.target.value >= 1 && e.target.value && typeof parseInt(e.target.value) == 'number') {
      const { quantities } = this.state;
      quantities[i] = e.target.value;
      this.setState({ quantities, onChangeQuantityStatus: true });
    }
  }

  convertCartItemsToObjects = () => {
    const cartItems = JSON.parse(window.localStorage.getItem('cartItems'));
    var result={}
    for(var i=0;i<cartItems.length;i++){
      const item = cartItems[i];
      console.log(item._id);
      if (!result[item._id]) {
        result[item._id] = {};
        result[item._id]["data"] = item;
        result[item._id]["count"] = 1; 
      } else {
        result[item._id]["count"] += 1; 
      }
    }
    this.setState({cartItems: result});
  }

  updateCart = async() => {
    await this.setState({isUpdatingCart: true});
    const { cart } = this.props;
    const cartItems = cart && cart.carts && (cart.carts || []);
    const { quantities } = this.state;

    for (let i = 0; i < cartItems.length; i++) {
      const data = cartItems[i];
      const temp = quantities && quantities[i];
      await this.props.updateCartQuantity(data._id, temp);
    }
    await this.setState({isUpdatingCart: false})
    if (this.props.updatingError) {
      alert('Cart failed to update, please try again');
    } else {
      window.location.reload();
    }
  }

  proceedToPayment = () => {
    const cartItems = JSON.parse(window.localStorage.getItem('cartItems'));
    const produceIds = cartItems && cartItems.map((item) => {
      return item._id;
    })
    this.props.addToCart(produceIds)
    window.location.replace('/checkout/payment');
  }



  render() {
    const { cart } = this.props;
    // const totalPrice = cart && cart.totalPrice;
    let { quantities } = this.state;
    console.log(quantities);
    
    const totalPrice = this.state.carts && (this.state.carts.reduce((acc, item) => {
      acc += item.total_price;
      return acc;
    }, 0) || 0);
    
    return (
      <Wrapper>
        <Navbar cartItemsCount={this.state.cartCount} white />
        <div className="container">
          <div className="row padding-tb_sm justify-content-center">
            <div className="col-12">
              <h1>Order Summary</h1>
            </div>
            <div className="col-sm-12 d-flex justify-content-between misc">
              <div className="r d-flex">
                <Link to="/shop" className="back_link">
                  <img
                    src={require("../../assets/left-arrow.svg")}
                    alt=""
                    style={{ width: 10, height: 10 }}
                  />
                  Continue shopping
                </Link>
              </div>
              <Button
                buttonText="Proceed to payment"
                className="pay_btn"
                onClick={() => this.props.history.push("/checkout/payment")}
              />
            </div>
            <div className="col-sm-12" style={{ backgroundColor: "#fff" }}>
              <div className="styling">
                <div className="row align-items-center">
                  <div className="col-sm-2">
                    <h6>Your cart</h6>
                  </div>
                  <div className="col-sm-7">
                    <h6>Details</h6>
                  </div>
                  <div className="col-sm-3 item_price">
                    <h6>Quantity</h6>
                    <h6>Total</h6>
                  </div>
                </div>
              </div>
              <CartWrapper>
                <div className="row">
                  <div className="col-sm-12">
                    {cart && cart.carts && cart.carts.length > 0 && !this.props.isFetching ? cart.carts.map((item, i) => {
                        const data = item.item;
                        // const count = item.quantity;
                        const tempQuantity = quantities && (quantities[i] || 0);
                        console.log("tempQuantity", tempQuantity)
                        return (
                          <div
                            className="cart_list-item"
                            key={data._id}
                            style={{ marginTop: 20 }}
                          >
                            <div className="row">
                              <div className="col-sm-2 item_image">
                                <img src={data.images[0]} alt="" />
                              </div>
                              <div className="col-sm-4 item_details">
                                <h5>{data.name}</h5>
                                {/* <p>{data && data.description.slice(0, 60)}...</p> */}
                                <p>Type: {data.type} <br/> Category:{data.categoryID.categoryName}</p>
                              </div>
                              <div className="col-sm-3 item_prices">
                                {
                                  !this.props.isFetching 
                                    ? <IncrementerWrapper>
                                        <div className="input-group mb-3">
                                          <div className="input-group-prepend">
                                            <button className="btns btn-outline-secondary" onClick={this.decrementQuantity.bind(this, i)} type="button" id="button-addon1"> <i className="mdi mdi-minus" /> </button>
                                          </div>
                                          <input type="text" onChange={this.onChangeQuantity.bind(this, i)} className="form-control" value={tempQuantity} aria-label="Example text with button addon" aria-describedby="button-addon1" />
                                          <div className="input-group-append">
                                            <button className="btns btn-outline-secondary" onClick={this.incrementQuantity.bind(this, i)} type="button" id="button-addon2"> <i className="mdi mdi-plus" /> </button>
                                          </div>
                                        </div>
                                      </IncrementerWrapper>
                                    : ''
                                }
                              </div>
                              <div className="col-sm-3 item_price">
                                <p>{tempQuantity} @ {data.price}</p>
                                <p>N{tempQuantity * data.price}</p>
                              </div>
                            </div>
                          </div>
                        );
                      }) : this.props.isFetching ? 'Loading...' : 'No items in the cart anymore'
                    }
                  </div>
                </div>
                <div className="col-sm-12 text-right">
                    <h3>
                      Subtotal: N
                      {totalPrice}
                    </h3>
                  </div>
                <div className="row margin-top_sm">
                  {/* <div className="col-sm-4">
                    {
                      !this.state.isUpdatingCart 
                      ? <Button
                          buttonText="Update Cart"
                          className="update_cart"
                          onClick={
                            this.updateCart
                          }
                        /> 
                      : 'Loading..'
                    }
                  </div> */}
                  <div className="col-sm-8 text-right">
                  <Button
                      buttonText="Proceed to payment"
                      className="payment_btn"
                      onClick={
                        this.proceedToPayment
                        // this.props.history.push("/checkout/payment")
                      }
                    />
                  </div>
                </div>
              </CartWrapper>
            </div>
          </div>
        </div>
        <Modal
          show={this.state.isErrorModalVisible}
          onClose={() => this.setState({ isErrorModalVisible: false })}
        >
          <div className="container">
            <div className="row">
              <div className="col-12 text-center">
                <h4>You are not logged in</h4>
                <p>You need to log in to checkout your items in cart</p>

                <Button
                  className="btn btn_green"
                  buttonText="Login"
                  onClick={() => window.location.replace("/login")}
                />
              </div>
            </div>
          </div>
        </Modal>
        <CartPanel
          isVisible={false}
          onClose={() => this.setState({ isCartVisible: false })}
        />
        <Footer />
      </Wrapper>
    );
  }
}

const mapStateTeProps = state => {
  return {
    isFetching: state.Cart.isFetching,
    isSuccess: state.Cart.isSuccess,
    isDeleting: state.Cart.isDeleting,
    hasDeleted: state.Cart.hasDeleted,
    updatingError: state.Cart.updatingError,
    cart: state.Cart.cart
  };
};

export default connect(mapStateTeProps, { addToCart, fetchCart, updateCartQuantity })(Checkout);

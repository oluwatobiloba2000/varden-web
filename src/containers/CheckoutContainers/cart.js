import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import Footer from "../../components/Footer/generalfooter";
import { Button } from "@chakra-ui/react"
// import Button from "../../components/Button";
import Navbar from "../../components/Header/Navbar";

import { addToCart, fetchCart } from "../../actions/cart";

import { Wrapper, CartWrapper } from "./checkout.styles";
import CartPanel from "../../components/CartPanel";
import NumberFormat from 'react-number-format';

class Cart extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      carts: [],
      isCartVisible: false,
      cartItems: {},
      cartCount: 0
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
    if (!user) return;
    if (user.hasOwnProperty("role")) {
      console.log("it has role property");
    } else {
      this.setState({ token: user.token });
      console.log("it has no role property");
    }
    if (user && user.token) {
      this.convertCartItemsToObjects()
      // window.location.replace('/checkout');
    }
    // this.updateDBCart();
  }

  updateDBCart = () => {
    const cartItems = JSON.parse(window.localStorage.getItem('cartItems'));
    const produceIds = cartItems && cartItems.map((item) => {
      return item._id;
    })
    if (produceIds && produceIds.length > 0) {
      this.props.addToCart(produceIds)
    } else {
      this.props.fetchCart()
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.isSuccess && nextProps.hasDeleted) {
      window.location.reload();
    }
  }

  removeProduct = (order_id)=>{
    console.log({order_id})
    const indexFromCart = this.state.carts.findIndex((product)=> product.order_id === order_id);
    // console.log("🚀 ~ file: cart.js ~ line 82 ~ Cart ~ index", index)
    if(indexFromCart >= 0){
      const newCart = this.state.carts.filter((product, index)=> indexFromCart !== index);
      this.setState({carts: newCart })
      localStorage.setItem("cartItems", JSON.stringify(newCart))
    }
    
  }

  convertCartItemsToObjects = () => {
    const cartItems = JSON.parse(window.localStorage.getItem('cartItems'));
    // var result={}
    // for(var i=0;i<cartItems.length;i++){
    //   const item = cartItems[i];
    //   console.log(item._id);
    //   if (!result[item._id]) {
    //     result[item._id] = {};
    //     result[item._id]["data"] = item;
    //     result[item._id]["count"] = 1; 
    //   } else {
    //     result[item._id]["count"] += 1; 
    //   }
    // }
    this.setState({carts: cartItems});
  }

  proceedToPayment = () => {
    // const cartItems = JSON.parse(window.localStorage.getItem('cartItems'));
    // const produceIds = cartItems && cartItems.map((item) => {
    //   return item._id;
    // })
    // this.props.addToCart(produceIds)
    window.location.replace('/checkout/payment');
  }

  componentDidUpdate(){
    this.setState({cartCount: JSON.parse(window.localStorage.getItem('cartItems'))?.length || 0 })
  }

  render() {
    // const cartItems = JSON.parse(window.localStorage.getItem('cartItems'));
    // var cart= {}
    // for(var i=0; i < cartItems && cartItems.length; i++) {
    //     if(!cart[JSON.stringify(cartItems[i])]){
    //       cart[JSON.stringify(cartItems[i])]=1;
    //     } else {
    //       cart[JSON.stringify(cartItems[i])]=cart[JSON.stringify(cartItems[i])]+1;
    //     }
    // }
    const totalPrice = this.state.carts && (this.state.carts.reduce((acc, item) => {
      acc += item.total_price;
      return acc;
    }, 0) || 0);
    return (
      <Wrapper>
        <Navbar white cartItemsCount={this.state.cartCount}/>
        <div className="container">
          <div className="row padding-tb_sm justify-content-center">
            <div className="col-12">
              <h1>Cart Items</h1>
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
                  className="payment_btn"
                  _hover={{
                    backgroundColor: 'green',
                    color: 'white'
                  }}
                  isDisabled={this.state.carts.length >= 1 ? false : true}
                onClick={() => this.props.history.push("/checkout/payment")}
              >Proceed to payment</Button>
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
                    {this.state.carts && this.state.carts.length >= 1 ? this.state.carts.map(item => {
                        const data = item;
                        return (
                          <div
                            className="cart_list-item"
                            key={data._id}
                            style={{ marginTop: 20 }}
                          >
                            <div className="row">
                              <div className="col-sm-2 item_image">
                                <img src={data.images[0].image_url} alt="" />
                              </div>
                              <div className="col-sm-7 item_details">
                                <h5>{data.title}</h5>
                                {/* <p>{data && data.description.slice(0, 60)}...</p> */}
                                {/* <p>Type: {data.type} <br/> Category:{data.categoryID.categoryName}</p> */}
                              </div>
                              <div className="col-sm-3 item_price">
                                <p>x{data.quantity_ordered} @ {data.total_price}</p>
                                <NumberFormat value={data.total_price} displayType={'text'} thousandSeparator={true} prefix={'₦'} renderText={(value, props) => <p {...props}>{value}</p>} />
                                {/* <p>{data.total_price}</p> */}
                              </div>
                                <Button colorScheme="red" onClick={()=> this.removeProduct(data.order_id)}>Remove product</Button>
                            </div>
                          </div>
                        );
                      }) : 'No items in the cart anymore'
                    }
                  </div>
                </div>
                <div className="row margin-top_sm">
                  <div className="col-sm-4">
                    <Button
                      className="payment_btn"
                      _hover={{
                        backgroundColor: 'green'
                      }}
                      isDisabled={this.state.carts.length >= 1 ? false : true}
                      onClick={
                        this.proceedToPayment
                        // this.props.history.push("/checkout/payment")
                      }
                    >Proceed to payment</Button>
                  </div>
                  <div className="col-sm-8 text-right">
                    <h3>
                      Subtotal:
                       <NumberFormat value={totalPrice} displayType={'text'} thousandSeparator={true} prefix={'₦'} renderText={(value, props) => <p {...props}>{value}</p>} />
                    </h3>
                  </div>
                </div>
              </CartWrapper>
            </div>
          </div>
        </div>
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
    cart: state.Cart.cart
  };
};

export default connect(mapStateTeProps, { addToCart, fetchCart })(Cart);

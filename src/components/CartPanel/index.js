import React, { PureComponent } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import { Wrapper, Cart, CardListItem } from "./cart.styles.js";
import EmptyState from "../EmptyState";
import Button from "../Button/index.js";
import Modal from "../Modal";

import { deleteCartItem, fetchCart, updateCartQuantity } from "../../actions/cart";

/**
 * @param {Boolean} isVisible: boolean value to show the cart panel
 * @param {Function} onClose: a callback function to close the cart panel
 */
class CartPanel extends PureComponent {
  state = {
    isCartModalVisible: false,
    cart: {}
  };

  _onHandleChange = (e, id) => {
    e.preventDefault();
    let selectedItemId;
    let carts= this.state.cart.carts;
    let newCarts = carts.map(cart => {
      if(cart._id === id){
        selectedItemId = cart._id;
        return {
          ...cart,
          quantity: parseInt(e.target.value)
        }
      }

      return cart;
    })
    this.setState({
      cart: {
        ...this.state.cart,
        carts: newCarts
      }
    })
    this._updateCart(selectedItemId);
  };

  _onDeleteCartItem = id => {
    this.setState({ isCartModalVisible: true });
    this.props.deleteCartItem(id);
  };

  _updateCart = (id) => {
    let carts = this.state.cart.carts;
    const quantity = carts.filter(cart => {
      if(cart._id === id){
       return cart.quantity;
      }
      return cart.quantity
    })
    this.props.updateCartQuantity(id, quantity)
  }

  _getCartItem = () => {
    
    let cart = JSON.parse(window.localStorage.getItem("cart"));
    if (!cart || cart === undefined || cart.carts.length === 0) {
      this.setState({ cart: {} });
    } else {
      this.setState({
        cart: cart
      });
    }
  };
  

  onHandleCheckout = () => {
    //change the prevLink name, this enables what payment form to show in the payment page
    window.localStorage.setItem("prevLink", "");
    this.props.history.push("/checkout")
  }

  componentDidMount() {
    console.log('i just mounted')
    let cart = JSON.parse(window.localStorage.getItem("cart"));
    if (!cart) {
      this.props.fetchCart();
    }
    this._getCartItem();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.success) {
      setTimeout(() => {
        this.setState({ isCartModalVisible: false });
        window.location.reload();
      }, 2000);
      this.props.fetchCart();
    }
  }

  render() {
    const { loading, success, error } = this.props;
    const { isVisible } = this.props;
    const cart = this.state.cart;

    return (
      <Wrapper className={isVisible ? "" : "hidden"}>
        <div className="container-fluid no-padding">
          <div className="row justify-content-end">
            <Cart>
              <div className="cart-header">
                <span>Shopping cart</span>
                <span
                  onClick={() => this.props.onClose()}
                  style={{ display: "flex", alignItems: "center" }}
                >
                  close
                  <img
                    src={require("../../assets/error.png")}
                    alt=""
                    onClick={() => this.props.onClose()}
                    style={{ marginLeft: 5 }}
                  />
                </span>
              </div>
              <div className="cart-list">
                {cart && cart.carts && cart.carts.length === 0 ? (
                  <div className="col-sm-12 no-padding-lr">
                    <EmptyState
                      img={require("../../assets/error.png")}
                      title="Cart is empty"
                      body="You have not added anything to cart yet, visit the farms page to add items to cart"
                      buttonText="Go to farms"
                      onClick={() => window.location.replace("/shop")}
                    />
                  </div>
                ) : (
                  cart && cart.carts &&
                  cart.carts.map(item => {
                    return (
                      <React.Fragment key={item._id}>
                        <div className="col-sm-12 no-padding-lr" key={item._id}>
                          <CardListItem>
                            <div className="item-image">
                              <img src={item.item.images[0]} alt="" />
                            </div>
                            <div className="item-details">
                              <h5>{item.item.name}</h5>
                              <span className="block">Type: {item.type}</span>
                              <div className="cart-values">
                                <input
                                  type="text"
                                  value={item.quantity}
                                  onChange={e =>
                                    this._onHandleChange(e, item._id)
                                  }
                                />
                                <div className="price">
                                  <span>@</span>
                                  <span>{item.item.price}</span>
                                </div>
                              </div>
                            </div>
                            <div className="item-image-delete">
                              <img
                                src={require("../../assets/error.png")}
                                alt=""
                                onClick={() => this._onDeleteCartItem(item._id)}
                              />
                            </div>
                          </CardListItem>
                        </div>
                        <div className="cart-footer">
                          <div className="subtotal">
                            <span>Subtotal </span>
                            <span>N{!cart ? "" : cart.totalPrice}</span>
                          </div>
                          {this.props.match.path === "/checkout" ? (
                            <Button
                              buttonText="Proceed to payment"
                              onClick={() =>
                                this.props.history.push("/checkout/payment")
                              }
                              className="checkout_btn"
                            />
                          ) : (
                            <React.Fragment>
                              <Button
                              buttonText="Checkout"
                              onClick={this.onHandleCheckout}
                              className="checkout_btn"
                            />
                            <Button
                              buttonText="Continue shopping"
                              onClick={() =>
                                this.props.history.push("/checkout")
                              }
                              className="shopping_btn"
                            />
                            </React.Fragment>
                            
                          )}
                        </div>
                      </React.Fragment>
                    );
                  })
                )}
              </div>
            </Cart>
            {/* <Modal 
                show={true}
              >
                <h1>Testing</h1>
            </Modal> */}
          </div>
        </div>
        <Modal
          show={this.state.isCartModalVisible}
          onClose={() => this.setState({ isCartModalVisible: false })}
        >
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-sm-12 text-center" style={{ padding: 50 }}>
                {loading ? (
                  <React.Fragment>
                    <h5>Deleting item from Cart...</h5>
                    <img
                      src={require("../../assets/main-color-loader.svg")}
                      alt=""
                    />
                  </React.Fragment>
                ) : !loading && !success ? (
                  <React.Fragment>
                    <h5>Couldn't Delete item from cart</h5>
                    <p>This was caused because {error}</p>
                  </React.Fragment>
                ) : (
                  <React.Fragment>
                    <h5>Item deleted successfully</h5>
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
    loading: state.Cart.isDeleting,
    success: state.Cart.hasDeleted,
    error: state.Cart.isDeleteError
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    { deleteCartItem, fetchCart, updateCartQuantity }
  )(CartPanel)
);

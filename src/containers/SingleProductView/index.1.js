import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Swiper from "react-id-swiper";

import { MainWrapper } from "./index.styles";
import Navbar from "../../components/Header/Navbar";
import Footer from "../../components/Footer/generalfooter";
import Button from "../../components/Button";
import EmptyState from "../../components/EmptyState";
import CartPanel from "../../components/CartPanel";

import { SingleFarmProduce } from "../../actions/produce";
import { addToCart } from "../../actions/cart";
import Modal from "../../components/Modal";

class SingleProductView extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isCartPanelVisible: false,
      isModalVisible: false,
      token: ""
    };
  }
  componentDidMount() {
    const params = this.props.match.params.id;
    this.props.SingleFarmProduce(params);

    const user = JSON.parse(window.localStorage.getItem("current_user"));
    if (!user) return;
    if (user.hasOwnProperty("role")) {
      console.log("it has role property");
    } else {
      this.setState({ token: user.token });
      console.log("it has no role property");
    }
  }

  _onHandleChange = e => {
    e.preventDefault();
  };

  _onAddToCart = () => {
    if (!this.state.token) {
      return this.setState({ isErrorModalVisible: true });
    }
    this.setState({ isModalVisible: true });
    this.props.addToCart(this.props.match.params.id);
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.isCartAdded) {
      setTimeout(() => {
        this.setState({ isModalVisible: false, isCartPanelVisible: true });
      }, 2000);
    }
    if (nextProps.isCartAddingFailed) {
      setTimeout(() => {
        this.setState({ isModalVisible: false });
      }, 2000);
    }
  }
  render() {
    const param = {
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      spaceBetween: 30
    };
    const params = this.props.match.params.id;
    const {
      loading,
      error,
      produce,
      isCartAdded,
      isCartAdding,
      isCartAddingFailed
    } = this.props;
    return (
      <MainWrapper>
        <Navbar
          showCart={() => this.setState({ isCartPanelVisible: true })}
          white
        />
        <main className="content">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 d-flex justify-content-between misc">
                <div className="margin_bottom-sm">
                  <Link to="/shop" className="back_link">
                    <img
                      src={require("../../assets/left-arrow.svg")}
                      alt=""
                      style={{ width: 10, height: 10 }}
                    />
                    Continue shopping
                  </Link>
                </div>
              </div>
              {loading ? (
                <div className="col-sm-12 text-center align-self-center">
                  <img
                    src={require("../../assets/main-color-loader.svg")}
                    alt=""
                  />
                  <h6 style={{ marginTop: 20 }}>
                    Fetching product information...
                  </h6>
                </div>
              ) : (
                <React.Fragment>
                  {!loading && error ? (
                    <div className="col-sm-12 align-self-center card">
                      <div className="row align-items-center justify-content-center">
                        <div className="col-sm-6">
                          <EmptyState
                            img={require("../../assets/error.png")}
                            title="There was an error fetching details"
                            body={`This could either be a network error or error from the database, please check your network connection and refresh the page`}
                            buttonText="Refresh page"
                            onClick={() => this.props.SingleFarmProduce(params)}
                          />
                        </div>
                      </div>
                    </div>
                  ) : (
                    <React.Fragment>
                      <div className="col-sm-6 col-md-6 col-lg-6">
                        <Swiper {...param}>
                          {produce &&
                            produce.images &&
                            produce.images.map(img => {
                              return (
                                <img
                                  src={img}
                                  alt=""
                                  className="img-fit"
                                  key={img}
                                />
                              );
                            })}
                        </Swiper>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-6 product-details">
                        <h1>{produce.name}</h1>
                        <div className="description">
                          <h5>Description:</h5>
                          <p>{produce.description}</p>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                          <h5>Quantity left: {produce.quantityLeft}</h5>
                          <h5>Category: {produce.type}</h5>
                        </div>
                        <h4 className="price">N{produce.price}</h4>
                        <div className="row">
                          {/* <div className="col-sm-3">
                            <Input
                              placeholder="0"
                              type="number"
                              value="1"
                              onChange={this._onHandleChange}
                            />
                          </div> */}
                          <div className="col-sm-5" style={{ marginTop: 50 }}>
                            <Button
                              buttonText="Add to Cart"
                              className="btn btn_green"
                              onClick={this._onAddToCart}
                            />
                          </div>
                          {/* <div className="col-sm-4">
                            <Button
                              buttonText="Buy now"
                              className="btn btn_orange"
                            />
                          </div> */}
                        </div>
                      </div>
                    </React.Fragment>
                  )}
                </React.Fragment>
              )}
            </div>
            <div classsName="row">
              <div className="col-sm-12">
                <h5>All Reviews</h5>
              </div>
            </div>
          </div>
        </main>
        <CartPanel
          isVisible={false}
          onClose={() => this.setState({ isCartPanelVisible: false })}
        />
        <Modal
          show={this.state.isModalVisible}
          onClose={() => this.setState({ isModalVisible: false })}
        >
          <div className="container">
            <div className="row">
              <div className="col-12 text-center">
                {isCartAdding ? (
                  <React.Fragment>
                    <h5>Adding item to Cart...</h5>
                    <img
                      src={require("../../assets/main-color-loader.svg")}
                      alt=""
                    />
                  </React.Fragment>
                ) : !isCartAdding && !isCartAdded ? (
                  <React.Fragment>
                    <h5>Couldn't add item to cart</h5>
                    <p>This was caused because {isCartAddingFailed}</p>
                  </React.Fragment>
                ) : (
                  <React.Fragment>
                    <h5>Item Added successfully</h5>
                    <div className="">
                      <Link to="/shop" className="back_link">
                        <img
                          src={require("../../assets/left-arrow.svg")}
                          alt=""
                          style={{ width: 10, height: 10 }}
                        />
                        Continue shopping
                      </Link>
                      <Button 
                        buttonText="Checkout"
                      />
                    </div>
                  </React.Fragment>
                )}
              </div>
            </div>
          </div>
        </Modal>
        <Modal
          show={this.state.isErrorModalVisible}
          onClose={() => this.setState({ isErrorModalVisible: false })}
        >
          <div className="container">
            <div className="row">
              <div className="col-12 text-center">
                <h4>You are not logged in</h4>
                <p>You need to log in to add any item to cart</p>

                <Button
                  className="btn btn_green"
                  buttonText="Login"
                  onClick={() => window.location.replace("/login")}
                />
              </div>
            </div>
          </div>
        </Modal>
        <Footer />
      </MainWrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.Produces.isSingleLoading,
    error: state.Produces.isSingleFailed,
    produce: state.Produces.produce,
    isCartAdding: state.Cart.loading,
    isCartAdded: state.Cart.success,
    isCartAddingFailed: state.Cart.error
  };
};
export default connect(
  mapStateToProps,
  { SingleFarmProduce, addToCart }
)(SingleProductView);

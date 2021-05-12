/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Swiper from "react-id-swiper";

import { MainWrapper, IncrementerWrapper } from "./index.styles";
import Navbar from "../../components/Header/Navbar";
import Footer from "../../components/Footer/generalfooter";
import Button from "../../components/Button";
import EmptyState from "../../components/EmptyState";
import CartPanel from "../../components/CartPanel";

import { SingleFarmProduce } from "../../actions/produce";
import { addToCart, fetchCart } from "../../actions/cart";
import Modal from "../../components/Modal";
import Card from "../../components/Card";
import { filterByType } from "../../actions/filter";
import { Spinner } from "@chakra-ui/spinner";
import leftArrowSvg from '../../assets/left-arrow.svg';
import { v4 as uuidv4 } from 'uuid';
import NumberFormat from 'react-number-format';


const ReviewsPane = (props) => {
  const { produce } = props;
  const reviews = produce && (produce.reviews || []);
  const rating = reviews.reduce((acc, item) => {
    acc += item.rating;
    return acc;
  }, 0);
  return (
    <div className="row review-list mt-4">
      <div className="col-md-12 mb-3 rating">
        <h6 className="text-center">All reviews ({reviews.length})</h6>
        {
          reviews && reviews.length
            ? <React.Fragment>
              <h1 className="text-center">{rating / reviews.length} </h1>
              <p className="text-center mb-4">
                <span>
                  {
                    Array(Math.round(rating / reviews.length)).fill(1).map((item, i) => {
                      return <i className="mdi mdi-star orange" />
                    })
                  }
                </span>
              </p>
            </React.Fragment>
            : ''
        }
      </div>
      {
        reviews && reviews.length > 0 ? reviews.map((item, i) => {
          return (
            <div className="col-md-6">
              <div className="review-list-item">
                <h6>{`${item.userID.firstname} ${item.userID.lastname}`}</h6>
                <span>
                  {
                    Array(Math.round(item.rating)).fill(1).map((item, i) => {
                      return <i className="mdi mdi-star orange" />
                    })
                  }
                </span>
                <p className="title">{item.title}</p>
                <p className="body">{item.body}</p>
              </div>
            </div>
          )
        }) :
          <div className="col-md-12 text-center mt-4 mb-4">
            No feedback reviews added yet
        </div>
      }
    </div>
  );
}

const Recommendations = (props) => {
  const { data, produce } = props;
  const recommendations = data && data.filter((item) => item._id !== produce._id);
  return (
    <div className="row pb-4">
      {
        recommendations && recommendations.length > 0 ? recommendations.map((item, i) => {
          return (
            <Card
              key={i}
              title={item.name}
              price={item.price}
              onCardClick={() =>
                window.location.replace(`/products/${item._id}`)
              }
              quantityLeft={2}
              image={item.images[0]}
            />
          );
        }) :
          <div className="col-md-12 mt-4 mb-4">
            No related products
        </div>
      }
    </div>
  );
}

class SingleProductView extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isCartPanelVisible: false,
      selectedPane: 0,
      isModalVisible: false,
      token: "",
      quantity: 1,
      currentSelectedProduct: {},
      cartCount: 0
    };
  }
  componentDidMount() {
    // this.props.fetchCart();
    const params = this.props.match.params.id;
    this.props.SingleFarmProduce(params)

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

  _onAddToCart = (produce) => {
    this.setState({ isModalVisible: true });
    const formerCartItems = JSON.parse(window.localStorage.getItem('cartItems')) || [];
    // for (let i = 0; i < this.state.quantity; i++) {
    //   cartItems.push(this.props.produce);
    // }
    const newCartItems = [...formerCartItems, produce];
    window.localStorage.setItem('cartItems', JSON.stringify(newCartItems));
  };

  incrementQuantity = (e) => {
    this.setState({quantity: this.state.quantity + 1})
  }

  decrementQuantity = (e) => {
    if (this.state.quantity > 1) {
      this.setState({quantity: this.state.quantity - 1})
    }
  }

  onChangeQuantity = (e) => {
    e.preventDefault();
    console.log(e.target.value, typeof e.target.value)
    if (e.target.value >= 1 && e.target.value && typeof parseInt(e.target.value) == 'number') {
      this.setState({quantity: e.target.value})
    }
  }

  componentDidUpdate(){
      this.setState({cartCount: JSON.parse(window.localStorage.getItem('cartItems'))?.length || 0 })
  }


  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.isCartAdded) {
  //     setTimeout(() => {
  //       this.setState({ isModalVisible: false, isCartPanelVisible: true });
  //     }, 2000);
  //   }
  //   if (nextProps.isCartAddingFailed) {
  //     setTimeout(() => {
  //       this.setState({ isModalVisible: false });
  //     }, 2000);
  //   }
  //   console.log(nextProps.produce)
  //   let filterOptions = {
  //     type: nextProps.produce && (nextProps.produce.type || ''),
  //     category: '',
  //     price: ''
  //   }
  //   console.log(nextProps, nextProps.produce, nextProps.produce.isFiltered)
  //   if (filterOptions.type && !nextProps.isFiltered) {
  //     this.props.filterByType(filterOptions);
  //   }
  // }
  render() {
    const param = {
      navigation: {
        // nextEl: ".swiper-button-next",
        // prevEl: ".swiper-button-prev"
      },
      spaceBetween: 30
    };
    const params = this.props.match.params.id;
    const { selectedPane } = this.state;
    const {
      loading,
      error,
      produce,
      produces,
      // isFiltered,
      // isCartAdded,
      // isCartAdding,
      // isCartAddingFailed
    } = this.props;
    return (
      <MainWrapper>
        <Navbar
        cartCount={this.state.cartCount}
          // showCart={() => this.setState({ isCartPanelVisible: true })}
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
                  <Spinner size="xl" />
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
                        <div className="col-md-12">
                          <div className="row align-items-center">
                            <div className="col-sm-6 col-md-6 col-lg-6">
                              <Swiper {...param}>
                                {produce &&
                                  produce.images &&
                                  produce.images.map(img => {
                                    return (
                                      <img
                                        src={img.image_url}
                                        alt=""
                                        className="img-fit"
                                        key={img.image_url}
                                      />
                                    );
                                  })}
                              </Swiper>
                            </div>
                            <div className="col-sm-6 col-md-6 col-lg-6 product-details">
                              <h1>{produce.name} </h1>
                              <div className="description">
                                <h5>Description:</h5>
                                <p>{produce.description}</p>
                              </div>
                              {/* <span className="price mb-2"><i className="mdi mdi-cards-variants orange" /> <span className="orange">Category:</span> {produce.type}</span><br /> */}
                              {/* <span className="price mb-2"><i className="mdi mdi-cards-variants orange" /> <span className="orange">Preparation Time:</span> {produce.preparationTime || 0} mins</span><br /> */}
                              <span className="price mb-2"><i className="mdi mdi-cards-variants orange" /> <span className="orange">Quantity left:</span> {produce.count} {produce.measurement || "qty"}</span>
                              <h3 className="price"><i className="mdi mdi-debit-card orange" /> <span className="orange">Price:</span><NumberFormat value={(produce.price * this.state.quantity)} displayType={'text'} thousandSeparator={true} prefix={'₦'} renderText={(value, props) => <p {...props}>{value}</p>} /></h3><br />
                              <div className="row">
                                <div className="col-sm-5" style={{ marginTop: 50 }}>
                                  <IncrementerWrapper>
                                    <div className="input-group mb-3">
                                      <div className="input-group-prepend">
                                        <button className="btns btn-outline-secondary" onClick={this.decrementQuantity} type="button" id="button-addon1"> <i className="mdi mdi-minus" /> </button>
                                      </div>
                                      <input type="text" onChange={this.onChangeQuantity} className="form-control" placeholder="" value={this.state.quantity} aria-label="Example text with button addon" aria-describedby="button-addon1" />
                                      <div className="input-group-append">
                                        <button className="btns btn-outline-secondary" onClick={this.incrementQuantity} type="button" id="button-addon2"> <i className="mdi mdi-plus" /> </button>
                                      </div>
                                    </div>
                                  </IncrementerWrapper>
                                </div>
                                <div className="col-sm-8">
                                  <Button
                                    buttonText="Add to Cart"
                                    className="btn btn_green"
                                    onClick={()=> this._onAddToCart({
                                      ...this.props.produce,
                                      order_id: uuidv4(),
                                      quantity_ordered: this.state.quantity,
                                      total_price: (this.state.quantity * produce.price)
                                    })}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                  </React.Fragment>
                )}
            </div>
          </div>
        </main>
        <section className="other-info">
          <div className="container">
            <div classsName="row">
              <div className="col-sm-12 mt-4" style={{ padding: 0 }}>
                <ul className="nav other-info-navigation">
                  <li className="nav-item" onClick={(e) => { e.preventDefault(); this.setState({ selectedPane: 0 }) }}>
                    <a className={selectedPane === 0 ? "nav-link active" : "nav-link"} href="#">Feedbacks</a>
                  </li>
                  <li className="nav-item" onClick={(e) => { e.preventDefault(); this.setState({ selectedPane: 1 }) }}>
                    <a className={selectedPane === 1 ? "nav-link active" : "nav-link"} href="#">Related Products</a>
                  </li>
                </ul>
                {
                  selectedPane === 0
                    ? <ReviewsPane produce={produce} />
                    : this.state.selectedPane === 1
                      ? <Recommendations data={produces} produce={produce} />
                      : ''
                }
              </div>
            </div>
          </div>
        </section>
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
                <React.Fragment>
                  <div className="">
                    <Link to="/shop" className="back_link">
                      <img
                        src={leftArrowSvg}
                        alt=""
                        style={{ width: 10, height: 10 }}
                      />
                      Continue shopping
                      </Link>
                      <h5 className="mt-4 mb-4">Item Added successfully</h5>
                    <a href="/cart"><Button
                      buttonText="Proceed to Cart"
                      className="btn-checkout"
                    />
                    </a>
                  </div>
                </React.Fragment>
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
    produces: state.Produces.produces,
    isFiltered: state.Produces.isFiltered,
    isCartAdding: state.Cart.loading,
    isCartAdded: state.Cart.success,
    isCartAddingFailed: state.Cart.error
  };
};
export default connect(
  mapStateToProps,
  { SingleFarmProduce, addToCart, fetchCart, filterByType }
)(SingleProductView);

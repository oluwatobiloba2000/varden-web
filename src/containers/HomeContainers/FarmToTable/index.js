import React, { PureComponent } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import InputRange from "react-input-range";
import { HomeWrapper } from "../home.styles.js";

import Navbar from "../../../components/Header/Navbar";
import Card from "../../../components/Card";
import Footer from "../../../components/Footer/generalfooter";
import EmptyState from "../../../components/EmptyState";
import CartPanel from "../../../components/CartPanel/index.js";
import Button from "../../../components/Button";

import { AllFarmProduce } from "../../../actions/produce";
import { addToCart } from "../../../actions/cart";
import { filterByType } from "../../../actions/filter";

import Modal from "../../../components/Modal/index.js";
import CategoryContext from "../../../utils/categoryContext";
import mainColorLoader from '../../../assets/main-color-loader.svg'

import "react-input-range/lib/css/index.css";

class FarmToTable extends PureComponent {
  state = {
    isModalVisible: false,
    isCartVisible: false,
    isCartModalVisible: false,
    types: [],
    value: { min: 500, max: 2000 },
    filter: {
      types: "",
      category: "",
      value: ""
    },
    selectedType: '',
    selectedCategory: ""
  };

  componentDidMount() {
    this.props.AllFarmProduce();
  }

  toggleCartDisplay = () => {
    this.setState({
      isCartVisible: !this.state.isCartVisible
    });
  };

  _onHandleQuantityChange = e => {
    e.preventDefault();
    this.setState({
      cartItem: {
        ...this.state.cartItem,
        quantity: e.target.value
      }
    });
  };

  _addItemToCart = productId => {
    this.setState({ isModalVisible: true });
    this.props.addToCart(productId);
  };

  _onBuyNow = productId => {
    this.setState({ isModalVisible: true });
    this.props.addToCart(productId);
  };

  _getTypeFilterValue = e => {
    this.setState({
      selectedType: e.target.value
    })
  };

  _getCategoryFilterValue = e => {
    this.setState({
      selectedCategory: e.target.value
    });
  };

  _getPriceRange = value => {
    console.log(value);
    this.setState({ value }, () =>
      this.setState({
        filter: {
          ...this.state.filter,
          value
        }
      })
    );
  };

  _applyFilter = () => {
    let filterOptions = {
      type: this.state.selectedType,
      category: this.state.selectedCategory,
      price: !this.state.filter.value ? '' : this.state.filter.value,
    }
    console.log(filterOptions)
    this.props.filterByType(filterOptions);
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.isCartAdded) {
      setTimeout(() => {
        this.setState({ isModalVisible: false, isCartVisible: true });
      }, 2000);
    } else if (nextProps.isCartAddingFailed) {
      setTimeout(() => {
        this.setState({ isModalVisible: false });
      }, 4000);
    }
  }
  render() {
    const {
      loading,
      produces,
      error,
      isCartAdding,
      isCartAdded,
      isCartAddingFailed
    } = this.props;
    return (
      <HomeWrapper>
        <Navbar showCart={() => this.setState({ isCartVisible: true })} white />

        <div className="container">
          <main className="content">
            <div className="row">
              <div className="col-sm-12">
                <div className="filter row">
                  <div className="col-md-12">
                  </div>
                  <div className="col-md-4">
                    <h6>Filter products by Type</h6>
                    <select className="filter-select" onChange={this._getTypeFilterValue}>
                      <option value="">Select type</option>
                      <option value="Processed">Processed</option>
                      <option value="Raw">Raw</option>
                    </select>
                  </div>
                  <div className="col-md-4">
                    <h6>Filter products by category</h6>
                    <select className="filter-select" onChange={this._getCategoryFilterValue}>
                      <option value="">Select category</option>
                      <CategoryContext.Consumer>
                        {data =>
                          data
                            .filter(item => item.categoryName !== "love meals")
                            .map(datum => {
                              return (
                                <option>{datum.categoryName}</option>
                              );
                            })
                        }
                      </CategoryContext.Consumer>
                    </select>
                  </div>
                  <div className="col-md-4">
                    <h6 style={{ marginBottom: 20 }}>Filter products by Price</h6>
                    <div style={{ padding: 15}}>
                      <InputRange
                        maxValue={2000}
                        minValue={500}
                        value={this.state.value}
                        onChange={this._getPriceRange}
                      />
                    </div>
                  </div>
                  <div className="col-md-12 mt-4">
                    <Button
                      className="float-right col-md-2"
                      buttonText="Apply filter"
                      onClick={this._applyFilter}
                      width="100%"
                      height="40px"
                    />
                  </div>
                </div>
              </div>
              <div className="col-sm-12">
                <div className="row" style={{margin: 0}}>
                  {loading ? (
                    <div style={{ textAlign: "center", width: "100%", paddingBottom: 50, paddingTop: 50 }}>
                      <img
                        src={mainColorLoader}
                        alt=""
                      />
                      <h5 style={{ marginTop: 30 }}>Fetching All Produce...</h5>
                    </div>
                  ) : (!loading && error) || produces === null ? (
                    <div
                      className="col-sm-12 align-self-center card"
                      style={{ marginTop: 20 }}
                    >
                      <EmptyState
                        img={require("../../../assets/error.png")}
                        title="There was an error fetching your produces"
                        body={`This was caused by ${error}`}
                        buttonText="Refresh page"
                        onClick={() => window.location.reload()}
                      />
                    </div>
                  ) : !loading && !error && produces.length === 0 ? (
                    <div className="col-sm-12 align-self-center card">
                      <EmptyState
                        img={require("../../../assets/groceries.svg")}
                        title="We currently don't have this produce"
                        body="Our farmers are working tirelessly to making sure you have the best"
                        buttonText="View all produces"
                        onClick={() => this.props.AllFarmProduce()}
                      />
                    </div>
                  ) : (
                          <React.Fragment>
                            {produces
                              .filter(
                                item => item.categoryID.categoryName === "farm to table"
                              )
                              .map((item, i) => (
                                <Card
                                  key={i}
                                  title={item.name}
                                  price={item.price}
                                  onCardClick={() =>
                                    this.props.history.push(`/products/${item._id}`)
                                  }
                                  quantityLeft={item.quantityLeft}
                                  image={item.images[0]}
                                />
                              ))}
                          </React.Fragment>
                        )}
                </div>
              </div>
            </div>
          </main>
        </div>
        <Footer />
        <Modal
          show={this.state.isModalVisible}
          onClose={() => this.setState({ isModalVisible: false })}
        >
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-sm-12 text-center" style={{ padding: 50 }}>
                {isCartAdding ? (
                  <React.Fragment>
                    <h5>Adding item to Cart...</h5>
                    <img
                      src={require("../../../assets/main-color-loader.svg")}
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
                      </React.Fragment>
                    )}
              </div>
            </div>
          </div>
        </Modal>

        <CartPanel
          isVisible={false}
          onClose={() => this.setState({ isCartVisible: false })}
        />
      </HomeWrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.Produces.loading,
    produces: state.Produces.produces,
    error: state.Produces.error,
    isCartAdding: state.Cart.loading,
    isCartAdded: state.Cart.success,
    isCartAddingFailed: state.Cart.error
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    { AllFarmProduce, addToCart, filterByType }
  )(FarmToTable)
);

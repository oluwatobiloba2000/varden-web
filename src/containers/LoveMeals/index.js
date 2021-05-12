import React, { PureComponent } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import { AllFarmProduce } from "../../actions/produce";

import Button from "../../components/Button";
import GpFooter from "../../components/Footer/generalfooter";
import Navbar from "../../components/Header/Navbar";
import EmptyState from "../../components/EmptyState";


import { Wrapper, Masthead } from "./index.styles";
import Modal from "../../components/Modal";

class LoveMeals extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      visible: false,
      selected: "",
      quantity: "1",
      totalPrice: "",
      userInfo: {}
    };
  }

  showModal = item => {

    this.setState({ visible: true, selected: item, totalPrice: item.price });
  };

  verifyInfo = e => {
    e.preventDefault();
    console.log(this.state.userInfo);
    window.localStorage.setItem("totalPrice", this.state.totalPrice);
    window.location.replace("/checkout/payment");
  };

  onChange = e => {
    this.setState({
      userInfo: {
        ...this.state.userInfo,
        [e.target.name]: e.target.value,
        quantity: this.state.quantity
      }
    });
  };

  handleQuantityChange = e => {
    let totalPrice = e.target.value * this.state.totalPrice;
    this.setState({
      quantity: e.target.value,
      totalPrice,
      userInfo: {
        ...this.state.userInfo,
        quantity: e.target.value,
        totalPrice
      }
    });
  };

  saveCurrentLink = () => {
    let urlName = this.props.match.url;
    let link = urlName.slice(1, urlName.length);
    window.localStorage.setItem("prevLink", link);
  };

  componentDidMount() {
    this.props.AllFarmProduce("get");
    this.saveCurrentLink();
  }

  render() {
    const {userInfo } = this.state;
    const { loading, produces, error } = this.props;
    return (
      <Wrapper>
        <Navbar white />
        <Masthead>
          <div className="container">
            <div className="row margin-top">
              <div className="col-sm-4 d-flex justify-content-between align-items-center mb-top-margin">
                <div className="workings">
                  <h5 className="is_underlined underlined">Place your order</h5>
                  <p>
                    Select love meals that you would love to send to your loved
                    ones
                  </p>
                </div>
              </div>
              <div className="col-sm-4 d-flex justify-content-between align-items-center mb-top-margin">
                <div className="workings">
                  <h5 className="is_underlined underlined">
                    Add Love note and contact details
                  </h5>
                  <p>
                    Add love notes and provide contact information for delivery
                    and make payments
                  </p>
                </div>
              </div>
              <div className="col-sm-4 d-flex justify-content-between align-items-center mb-top-margin">
                <div className="workings">
                  <h5 className="is_underlined underlined">
                    We package and deliver
                  </h5>
                  <p>
                    Once order is confirmed, we would package and deliver the
                    love.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Masthead>

        <section className="love-meals">
          <div className="container">
            <div className="row">
              {/* {data.map(datum => {
                return (
                  <div
                    className="col-sm-4 col-md-4 top-margin-xs"
                    key={datum.id}
                  >
                    <div className="meal-item">
                      <img src={datum.image} alt="" />
                      <div className="price">
                        <span>N{datum.price}</span>
                      </div>
                    </div>
                    <h5>{datum.name}</h5>
                    <div className="action">
                      <Button
                        buttonText="Send as Love meal"
                        className="love-meal-btn"
                        onClick={() => this.showModal(datum.id)}
                      />
                    </div>
                  </div>
                );
              })} */}

              {loading ? (
                <div style={{ textAlign: "center", width: "100%" }}>
                  <img
                    src={require("../../assets/main-color-loader.svg")}
                    alt=""
                  />
                  <h5 style={{ marginTop: 20 }}>Fetching All Produce...</h5>
                </div>
              ) : (!loading && error) || produces === null ? (
                <div
                  className="col-sm-12 align-self-center card"
                  style={{ marginTop: 20 }}
                >
                  <EmptyState
                    img={require("../../assets/error.png")}
                    title="There was an error fetching your produces"
                    body={`This was caused by ${error}`}
                    buttonText="Refresh page"
                    onClick={() => window.location.reload()}
                  />
                </div>
              ) : !loading && !error && produces.length === 0 ? (
                <div className="col-sm-12 align-self-center card">
                  <EmptyState
                    img={require("../../assets/groceries.svg")}
                    title="We currently don't have this produce"
                    body="Our farmers are working tirelessly to making sure you have the best"
                    buttonText="View all produces"
                    onClick={() => this.props.AllFarmProduce()}
                  />
                </div>
              ) : (
                <React.Fragment>
                  {produces
                    .filter(item => {
                      return item.categoryID.categoryName === "love meals";
                    })
                    .map((item, i) => (
                      <div
                        className="col-sm-4 col-md-4 top-margin-xs"
                        key={item._id}
                      >
                        <div className="meal-item">
                          <img src={item.images[0]} alt="" />
                          <div className="price">
                            <span>N{item.price}</span>
                          </div>
                        </div>
                        <h5>{item.name}</h5>
                        <div className="action">
                          <Button
                            buttonText="Send as Love meal"
                            className="love-meal-btn"
                            onClick={() => this.showModal(item)}
                          />
                        </div>
                      </div>
                    ))}
                </React.Fragment>
              )}
            </div>
          </div>
        </section>
        {/* <Rodal
          visible={this.state.visible}
          onClose={() => this.setState({ visible: false })}
          height="600"
        >
          <h5>
            Love meal: {this.state.selected && this.state.selected[0].name}
          </h5>
         
        </Rodal> */}
        <GpFooter />
        <Modal
          show={this.state.visible}
          onClose={() => this.setState({ visible: false })}
        >
          <div className="love-modal">
            <h5>
              Love meal: {this.state.selected && this.state.selected.name}
            </h5>
            <form onSubmit={this.verifyInfo}>
              <div className="row">
                <div className="col-sm-6 love-meal-margin">
                  <label>Sender:</label>
                  <input
                    type="text"
                    name="sender"
                    onChange={this.onChange}
                    required
                  />
                </div>
                <div className="col-sm-6 love-meal-margin">
                  <label>Recipient Name:</label>
                  <input
                    type="text"
                    name="receiver"
                    onChange={this.onChange}
                    required
                  />
                </div>
                <div className="col-sm-12 love-meal-margin">
                  <label>Recipient's Phone:</label>
                  <input
                    type="text"
                    name="receiver-phone"
                    onChange={this.onChange}
                    required
                  />
                </div>
                <div className="col-sm-12 love-meal-margin">
                  <label>Recipient's Address:</label>
                  <input
                    type="text"
                    name="address"
                    onChange={this.onChange}
                    required
                  />
                </div>
                <div className="col-sm-12 love-meal-margin">
                  <label>Love note message</label>
                  <textarea name="note" onChange={this.onChange} required />
                </div>
                <div className="col-sm-12 love-meal-margin">
                  <label>Any other thing we should know</label>
                  <textarea name="other-info" onChange={this.onChange} />
                </div>
              </div>
              <div className="row">
                <div className="col-sm-8 love-meal-margin">
                  <select
                    value={this.state.value}
                    onChange={this.handleQuantityChange}
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                </div>
                <div className="col-sm-4 love-meal-margin">
                  <p>@ {this.state.totalPrice}</p>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12 love-meal-margin">
                  <Button
                    buttonText={`Send love meal to ${
                      userInfo.receiver ? userInfo.receiver : ""
                    }`}
                    className="love-meal-btn"
                    onClick={this.verifyInfo}
                  />
                </div>
              </div>
            </form>
          </div>
        </Modal>
      </Wrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.Produces.loading,
    produces: state.Produces.produces,
    error: state.Produces.error
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    { AllFarmProduce }
  )(LoveMeals)
);

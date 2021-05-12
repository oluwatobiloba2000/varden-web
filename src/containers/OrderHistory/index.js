import React, { PureComponent } from "react";
import { connect } from "react-redux";

import OrderListItem from "./components/orderListItem";
import Table from "../../components/Table";
import EmptyState from "../../components/EmptyState";

import { fetchOrderHistory } from "../../actions/orderHistory";
import {addReviews} from "./../../actions/reviews";

import { Wrapper, ProcessOrder, OrderSummary } from "./order.styles";
import Button from "../../components/Button";
import moment from "moment";
import { NotificationPanel } from "../Dashboard/dashboard.styles";

class OrderHistory extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      displaySummary: false,
      currentOrders: [],
      orderNum: "",
      selectedOrderSummary: {},
      isAddReviewsVisible: false,
      review: {
        title: '',
        description: '',
        rating: 1,
        produceID: ""
      }
    };
  }

  onChangeReviewText = (propertyName, e) => {
    const review = this.state.review;
    review[propertyName] = e.target.value;
    this.setState({ review });
  }

  _addReviews = (e) => {
    e.preventDefault();
    const { review } = this.state;
    const { selectedOrderSummary } = this.state;
    review['produceID'] = selectedOrderSummary && selectedOrderSummary[0] && selectedOrderSummary[0].produce[0]; 
    for (let key in review) {
      if (!review[key]) return alert("Fill in all the information");
    }
    this.props.addReviews(review);
    if (this.props.isReviewAdded) {
      alert('Review feedback added');
      this.setState({isAddReviewsVisible: false});
    }
  }

  toggleDisplaySummary = orderNum => {
    console.log(orderNum);
    this.fetchSelectedOderSummary(orderNum);
    this.setState({ displaySummary: !this.state.displaySummary, orderNum });
  };

  fetchSelectedOderSummary = orderNum => {
    let newObj = {};
    const orderHistory = this.props.orders;
    const selectedOrderSummary = orderHistory.filter(order => {
      console.log(order)
      return order.orderNumber === orderNum;
    });
    for (let key in selectedOrderSummary) {
      newObj[key] = selectedOrderSummary[key];
    }
    this.setState({ selectedOrderSummary });
  };

  componentDidMount() {
    this.props.fetchOrderHistory();
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps)
    if (nextProps.orders) {
      let pendingOrders = nextProps.orders.map(orderItem => {
        if (orderItem.status === "pending") {
          return orderItem;
        }
        return orderItem;
      });
      this.setState({ currentOrders: pendingOrders });
    }
  }
  render() {
    const { currentOrders, selectedOrderSummary } = this.state;
    const { orders, loading, error } = this.props;
    return (
      <Wrapper>
        <div className="container">
          {loading ? (
            <div className="row">
              <div className="col-sm-12 justify-content-center align-itesm-center">
                <img
                  src={require("../../assets/main-color-loader.svg")}
                  alt=""
                />
                <p>Please wait, fetching your orders</p>
              </div>
            </div>
          ) : !loading && error ? (
            <EmptyState
              img={require("../../assets/receipt.svg")}
              title="There was an error!"
              body="There was an error fetching your payment history"
              buttonText="Reload"
              onClick={() => this.props.fetchOrderHistory()}
            />
          ) : !loading &&
            !error &&
            orders &&
            this.props.orders &&
            orders.length === 0 ? (
                  <EmptyState
                    img={require("../../assets/receipt.svg")}
                    title="You currently don't have any orders!"
                    body="You have not ordered anything yet, go do some shopping"
                    buttonText="Go do some shopping"
                    onClick={() => this.props.history.push("/shop")}
                  />
                ) : (
                  <div>
                    <React.Fragment>
                      <div className="row">
                        <div className="col-12" style={{ marginBottom: 20, marginTop: 15 }}>
                          <h4 className="header-title"><i className="mdi mdi-cart" /> Order History</h4>
                        </div>
                        <div className="col-sm-4 col-md-4 col-lg-4">
                          <ProcessOrder>
                            {currentOrders && currentOrders.map(order => {
                              return (
                                <OrderListItem
                                  _id={order._id}
                                  orderNumber={order.orderNumber}
                                  name={order.produce.name}
                                  price={order.total}
                                  date={moment(order.createdAt).format('LL')}
                                  items={order.items}
                                  key={order.orderNumber}
                                  path={this.props.history}
                                  toggleDisplaySummary={this.toggleDisplaySummary}
                                />
                              );
                            })}
                          </ProcessOrder>
                        </div>
                        <div className="col-sm-8 col-md-8 col-lg-8">
                          <div className="order-table">
                            <Table
                              produce={orders && this.props.orders}
                              tableHeader={[
                                "Name",
                                "Date",
                                "Order Number",
                                "Price",
                                "Status",
                                // "Action"
                              ]}
                              openSummary={this.toggleDisplaySummary}
                            />
                          </div>
                        </div>
                      </div>
                      <OrderSummary
                        className={this.state.displaySummary ? "" : "hidden"}
                      >
                        <div className="summary-header">
                          <span>Order summary</span>
                          <span
                            onClick={this.toggleDisplaySummary}
                            style={{ display: "flex", alignItems: "center" }}
                          >
                            close
                      <img
                              src={require("../../assets/error.png")}
                              alt=""
                              onClick={this.toggleDisplaySummary}
                              style={{ marginLeft: 5 }}
                            />
                          </span>
                        </div>
                        <div className="col-sm-12">
                          <div className="summary-details">
                            <div className="d-flex justify-content-between margin-top-xs">
                              <p>Order number</p>
                              <p className="grey-font">
                                #
                          {selectedOrderSummary &&
                                  selectedOrderSummary[0] &&
                                  selectedOrderSummary[0].orderNumber}
                              </p>
                            </div>
                            <div className="d-flex justify-content-between">
                              <p>Sub Total</p>
                              <p className="grey-font">
                                #
                          {selectedOrderSummary &&
                                  selectedOrderSummary[0] &&
                                  selectedOrderSummary[0].total}
                              </p>
                            </div>
                            <div className="d-flex justify-content-between">
                              <p>Date</p>
                              <p className="grey-font">
                                #
                          {selectedOrderSummary &&
                                  selectedOrderSummary[0] &&
                                  moment(selectedOrderSummary[0].createdAt).format('LL')}
                              </p>
                            </div>
                            <div className="items-list">
                              <p style={{ marginBottom: 20 }}>
                                Items contained in order
                        </p>
                              {selectedOrderSummary &&
                                selectedOrderSummary[0] &&
                                selectedOrderSummary[0].produce.map((item, i) => {
                                  return (
                                    <div
                                      className="d-flex justify-content-between"
                                      key={i}
                                    >
                                      <p>{item.name}</p>
                                      <p className="grey-font">
                                        {item.quantity} @ N{item.price}
                                      </p>
                                    </div>
                                  );
                                })}
                            </div>
                            <div className="delivery-details margin-top-xs">
                              <p style={{ marginBottom: 20 }}>Delivery Details</p>
                              <div className="d-flex justify-content-between">
                                <p>Delivery address</p>
                                <p className="grey-font">
                                  {selectedOrderSummary &&
                                    selectedOrderSummary[0] &&
                                    selectedOrderSummary[0].deliveryAddress
                                    ? selectedOrderSummary[0].deliveryAddress
                                    : "None"}
                                </p>
                              </div>

                              <div className="d-flex justify-content-between">
                                <p>Dispatch rider</p>
                                <p className="grey-font">
                                  {selectedOrderSummary &&
                                    selectedOrderSummary[0] &&
                                    selectedOrderSummary[0].deliveryAddress
                                    ? selectedOrderSummary[0].deliveryAddress
                                    : "None"}
                                </p>
                              </div>

                              <div className="d-flex justify-content-between">
                                <p>Delivery Status</p>
                                <p className="grey-font">
                                  {selectedOrderSummary &&
                                    selectedOrderSummary[0] &&
                                    selectedOrderSummary[0].status}
                                </p>
                              </div>
                            </div>
                            <div className="margin-top-xs">
                              {selectedOrderSummary &&
                                selectedOrderSummary[0] &&
                                selectedOrderSummary[0].status === "pending" ? (
                                  <Button
                                    buttonText="Track order"
                                    onClick={() =>
                                      this.props.history.push(
                                        `tracking-order/${selectedOrderSummary &&
                                        selectedOrderSummary[0] &&
                                        selectedOrderSummary[0].orderNumber}`
                                      )
                                    }
                                    className="track-btn"
                                  />
                                ) : null}
                            </div>
                            <div className="margin-top-xs">
                              {selectedOrderSummary &&
                                selectedOrderSummary[0] &&
                                selectedOrderSummary[0].status === "approved" ? (
                                  <Button
                                    buttonText="Add Review"
                                    onClick={() =>
                                      this.setState({isAddReviewsVisible: true})
                                    }
                                    className="track-btn"
                                  />
                                ) : null}
                            </div>
                          </div>
                        </div>
                      </OrderSummary>
                    </React.Fragment>
                  </div>
                )}
        </div>
        <NotificationPanel
          className={this.state.isAddReviewsVisible ? "" : "hidden"}
        >
          <div className="notification-header">
            <span>Add Reviews</span>
            <span
              onClick={() => this.setState({ isAddReviewsVisible: false })}
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer"
              }}
            >
              close
              <img
                src={require("../../assets/error.png")}
                alt=""
                onClick={() => this.setState({ isAddReviewsVisible: false })}
                style={{ marginLeft: 5 }}
              />
            </span>
          </div>
          <div className="notification-details">
            <div className="col-sm-12 no-padding-lr">
              <form className="mt-4">
                <div className="form-group">
                  <label>Rating</label>
                  <select className="form-control" onChange={this.onChangeReviewText.bind(this, "rating")}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Title</label>
                  <input type="text" onChange={this.onChangeReviewText.bind(this, "title")} placeholder="E.g. Great Food or Delivery" />
                </div>
                <div className="form-group">
                  <label>Body</label>
                  <textarea type="text" onChange={this.onChangeReviewText.bind(this, "description")} placeholder="More description about the food, delivery or customer service" />
                </div>
                <div className="form-group">
                  {
                    this.props.isAddingReview
                    ? <Button
                        buttonText="Adding Review...."
                        className="btn btn_green btn-block"
                      />
                    : <Button
                        buttonText="Submit Feedback Review"
                        className="btn btn_green btn-block"
                        onClick={this._addReviews}
                      />
                  }
                </div>
              </form>
            </div>
          </div>
        </NotificationPanel>
      </Wrapper>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.OrderHistory.loading,
  orders: state.OrderHistory.orderHistory,
  error: state.OrderHistory.error,
  isAddingReview: state.Reviews.loading,
  isReviewAdded: state.Reviews.isReviewAdded
});

export default connect(
  mapStateToProps,
  { fetchOrderHistory, addReviews }
)(OrderHistory);

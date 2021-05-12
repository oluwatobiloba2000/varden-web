import React, { PureComponent } from "react";
import { connect } from "react-redux";

import {
  Wrapper,
  ProfileDetailsCard,
  OrderDetails,
  Card
} from "./index.styles";
import Button from "../../components/Button";
import Table from "../../components/Table";


import { fetchOrderHistory } from "../../actions/orderHistory";
import { fetchPaymentHistory } from "../../actions/payment";
import { getUser } from "../../actions/user";
import EmptyState from "../../components/EmptyState";

class OverviewPage extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isMobile: window.innerWidth < 480,
      user: {},
      orderHistory: [],
      pendingOrders: '',
    };
  }

  componentDidMount() {
    this.props.getUser();
    this._fetchUserFromStorage();
    this.props.fetchOrderHistory();
    this.props.fetchPaymentHistory();
    window.addEventListener("resize", () => {
      this.setState({ isMobile: window.innerWidth < 480 });
    });
  }

  _fetchUserFromStorage = () => {
    const user = JSON.parse(window.localStorage.getItem('current_user'));
    if(!user){
      return window.location.replace("/login");
    }
    this.setState({user}, () => console.log(this.state.user))
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.fetchingOrdersSuccess){
      const pendingOrders = this.props.orderHistory.filter(order => {
        if(order.status === 'pending'){
          return order
        }
        return order
      })
      this.setState({orderHistory: this.props.orderHistory, pendingOrders: pendingOrders.length})
    
    }
  }

  render() {
    const {
      fetchingOrders,
      fetchingOrdersFailed,
      orderHistory,
    } = this.props;
    const { firstname, lastname,  phone, address, email } = this.props.user;
    return (
      <Wrapper>
        <main className="">
          <ProfileDetailsCard>
            <div className="container">
              <div className="row align-items-center">
                <div className="col-sm-2">
                  <img src={require("../../assets/user.svg")} alt="" />
                </div>
                <div className="col-sm-8">
                  <p>Name: {`${firstname} ${lastname}`}</p>
                  <p>Email: {email}</p>
                  <p>
                    Address: {address}
                  </p>
                  <p>Phone: {phone}</p>
                </div>
                <div className="col-sm-2">
                  <Button
                    buttonText="Edit profile"
                    className="edit_btn"
                    onClick={() =>
                      this.props.history.push("/dashboard/profile")
                    }
                  />
                </div>
              </div>
            </div>
          </ProfileDetailsCard>
          <OrderDetails>
            <div className="container">
              <div className="row">
                {fetchingOrders ? (
                  <div className="col-sm-12 ">
                    <div
                      className="row align-items-center justify-content-center"
                      style={{ marginTop: 100 }}
                    >
                      <div className="col-sm-12 text-center">
                        <img
                          src={require("../../assets/main-color-loader.svg")}
                          alt=""
                        />
                        <h5 style={{ marginTop: 20 }}>
                          Fetching user details...
                        </h5>
                      </div>
                    </div>
                  </div>
                ) : (
                  <React.Fragment>
                    {!fetchingOrders && fetchingOrdersFailed ? (
                      <div className="col-sm-12 card">
                        <div className="row align-items-center justify-content-center">
                          <div className="col-sm-6">
                            <EmptyState
                              img={require("../../assets/error.png")}
                              title="There was an error fetching details"
                              body={`This could either be a network error or error from the database, please check your network connection and refresh the page`}
                              buttonText="Refresh page"
                              onClick={() => this.props.getUser()}
                            />
                          </div>
                        </div>
                      </div>
                    ) : (
                      <React.Fragment>
                        {!fetchingOrders &&
                        !fetchingOrdersFailed && orderHistory
                        && orderHistory.length === 0 ? (
                          <EmptyState
                            img={require("../../assets/error.png")}
                            title="There are no orders yet"
                            body={`You haven't made any orders on varden foods, order for some goods now`}
                            buttonText="Refresh page"
                            onClick={() => this.props.history.push("/shop")}
                          />
                        ) : (
                          <React.Fragment>
                            <div className="col-sm-2 text-center">
                              <Card>
                                <p className="mt-2">Pending orders</p>
                                <h2>{this.state.pendingOrders}</h2>
                              </Card>
                            </div>
                            <div className="col-sm-10">
                              <div className="order-table">
                                <Table
                                  produce={
                                    orderHistory && orderHistory  && this.props.orderHistory
                                  }
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
                          </React.Fragment>
                        )}
                      </React.Fragment>
                    )}
                  </React.Fragment>
                )}
              </div>
            </div>
          </OrderDetails>
        </main>
      </Wrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.User.user.user,
    fetchingOrders: state.OrderHistory.loading,
    fetchingOrdersSuccess: state.OrderHistory.success,
    fetchingOrdersFailed: state.OrderHistory.error,
    orderHistory: state.OrderHistory.orderHistory,
    fetchingPaymentHistory: state.PaymentHistory.loading,
    fetchingPaymentFailed: state.PaymentHistory.error,
    fetchingPaymentSuccess: state.PaymentHistory.success,
    paymentHistory: state.PaymentHistory.paymentHistory
  };
};
export default connect(
  mapStateToProps,
  { fetchOrderHistory, fetchPaymentHistory, getUser }
)(OverviewPage);

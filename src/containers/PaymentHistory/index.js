import React, { PureComponent } from "react";
import { connect } from "react-redux";

import Table from "./Table";

import {
  Wrapper,
  ProfileCard,
  PayHistoryCard,
  PaymentSummary
} from "./payment.styles";

import { CloseIcon } from "../../components/Icons";
import EmptyState from "../../components/EmptyState";

import { fetchPaymentHistory } from "../../actions/payment";

import { getUser,
  //  updateUser 
  } from "../../actions/user";

class PaymentHistory extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      displaySummary: false
    };
  }

  componentDidMount() {
    this.props.getUser();
    this.props.fetchPaymentHistory();
  }

  toggleDisplaySummary = () => {
    this.setState({ displaySummary: !this.state.displaySummary });
  };

  render() {
    const { history, loading, error } = this.props;
    const data = this.props.user && this.props.user.user;
    return (
      <Wrapper>
        <div className="container">
          <div className="col-12" style={{ marginTop: 60, marginBottom: 30, padding: 0 }}>
            <h4 className="header-title"><i className="mdi mdi-credit-card" /> Payment History</h4>
          </div>
          <div className="row">
            <div className="col-md-4">
              <ProfileCard>
                <div className="user-details">
                  <img
                    className="mb-3"
                    src={require("../../assets/user.svg")}
                    alt=""
                  />
                  <h4>{data && data.firstname} {data && data.lastname}</h4>
                  <h5>{data && data.email}</h5>
                  <h5>{data && data.phone}</h5>
                </div>
              </ProfileCard>
            </div>
            <div className="col-md-8">
              {loading ? (
                <div className="row">
                  <div className="col-sm-12 justify-content-center align-itesm-center">
                    <img
                      src={require("../../assets/main-color-loader.svg")}
                      alt=""
                    />
                    <p>Please wait, fetching your payment history</p>
                  </div>
                </div>
              ) : !loading && error ? (
                <EmptyState
                  img={require("../../assets/receipt.svg")}
                  title="There was an error!"
                  body="There was an error fetching your payment history"
                  buttonText="Reload"
                  onClick={() => this.props.fetchPaymentHistory()}
                />
              ) : !loading &&
                !error &&
                history &&
                this.props.history &&
                history.length === 0 ? (
                      <EmptyState
                        img={require("../../assets/receipt.svg")}
                        title="You currently haven't made any payments yet!"
                        body="Go do some shopping and make some payments"
                        buttonText="Go do some shopping"
                        onClick={() => this.props.history.push("/shop")}
                      />
                    ) : (
                      <PayHistoryCard>
                        {/* <div className="d-flex flex-row justify-content-between">
                    <div className="mb-5 form-inline">
                      <label className="mr-2">Sort by</label>
                      <select className="form-control form-control-sm">
                        <option>Amount paid</option>
                        <option>lowest - highest</option>
                        <option>highest - lowest</option>
                      </select>
                    </div>
                    <div>
                      <select className="form-control form-control-sm">
                        <option>Status</option>
                        <option>pending</option>
                        <option>in progress</option>
                        <option>completed</option>
                      </select>
                    </div>
                  </div> */}
                        <div>
                          <Table
                            produce={history}
                            tableHeader={[
                              "Date",
                              "Order Number",
                              "Payment Reference",
                              "Amount"
                            ]}
                          />
                        </div>
                      </PayHistoryCard>
                    )}
            </div>
          </div>
        </div>
        <PaymentSummary className={this.state.displaySummary ? "" : "hidden"}>
          <div className="container">
            <div className="close-tag my-4">
              <CloseIcon
                width="31"
                height="30"
                onClick={this.toggleDisplaySummary}
              />
            </div>
            <div>
              <h4>Payment Summary</h4>
            </div>
          </div>
        </PaymentSummary>
      </Wrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.User.user,
    loading: state.PaymentHistory.loading,
    error: state.PaymentHistory.error,
    history: state.PaymentHistory.paymentHistory
  };
};
export default connect(
  mapStateToProps,
  { fetchPaymentHistory, getUser }
)(PaymentHistory);

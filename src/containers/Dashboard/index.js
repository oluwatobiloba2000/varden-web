import React, { PureComponent } from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Rodal from "rodal";
import "rodal/lib/rodal.css";
import Header from "../../components/Admin/Header";
import Footer from "../../components/Footer/generalfooter";
import EmptyState from "../../components/EmptyState";

import { DashWrapper, NotificationPanel } from "./dashboard.styles.js";
import * as LoadableRoutes from "../../routes";
import Button from "../../components/Button";

import {addReviews} from "./../../actions/reviews";
import moment from "moment";

// const firebase = require("firebase");
// // Required for side-effects
// require("firebase/firestore");

// firebase.initializeApp({
//     apiKey: "AIzaSyAGDA-PsT7a9fzYo1KPxjb6la3MvZceqXY",
//     authDomain: "varden-foods.firebaseapp.com",
//     projectId: "varden-foods",
// });

class Dashboard extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false,
      isNotificationVisible: false,
      isAddReviewsVisible: false,
      notifications: [],
      review: {
        title: '',
        description: '',
        rating: 1,
        produceID: "5d1089ab6d7d5700178fe219"
      }
    };
    // this.db = firebase.firestore();
  }

  // componentDidMount() {
  //   const user = JSON.parse(window.localStorage.getItem("current_user"));
  //   this.db.collection('notifications').where('recipient_id', '==', user._id)
  //     .onSnapshot((querySnapshot) => {
  //         var notifications = [];
  //         querySnapshot.forEach((doc) => {
  //             notifications.push(doc.data());
  //         });

  //         this.setState({notifications});
  //     });
  // }

  onChangeReviewText = (propertyName, e) => {
    const review = this.state.review;
    review[propertyName] = e.target.value;
    this.setState({review});
  }

  _addReviews = (e) => {
    e.preventDefault();
    const { review } = this.state;
    for (let key in review) {
      if (!review[key]) return alert("Fill in all the information");
    }
    this.props.addReviews(review);
  }

  render() {
    const path = this.props.match.path;
    return (
      <DashWrapper>
        <Header
          showModal={() => this.setState({ isModalVisible: true })}
          toggleNotification={() =>
            this.setState({ isNotificationVisible: true })
          }
        />
        <main className="content">
          <Route
            render={({ location }) => (
              <TransitionGroup>
                <CSSTransition
                  key={location.key}
                  classNames="fade"
                  timeout={1000}
                >
                  <Switch>
                    <Route
                      exact
                      path={`${path}/tracking-order/:orderId`}
                      component={LoadableRoutes.Tracking}
                    />
                    <Route
                      exact
                      path={`${path}`}
                      component={LoadableRoutes.OverviewPage}
                    />
                    <Route
                      exact
                      path={`${path}/profile`}
                      component={LoadableRoutes.Profile}
                    />
                    <Route
                      exact
                      path={`${path}/order-history`}
                      component={LoadableRoutes.OrderHistory}
                    />
                    <Route
                      exact
                      path={`${path}/payment-history`}
                      component={LoadableRoutes.PaymentHistory}
                    />
                    <Route
                      exact
                      path={`${path}/notifications`}
                      component={LoadableRoutes.Notifications}
                    />
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            )}
          />
        </main>
        <Rodal
          visible={this.state.isModalVisible}
          onClose={() => this.setState({ isModalVisible: false })}
        />
        <NotificationPanel
          className={this.state.isNotificationVisible ? "" : "hidden"}
        >
          <div className="notification-header">
            <span>Notifications</span>
            <span
              onClick={() => this.setState({ isNotificationVisible: false })}
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
                onClick={() => this.setState({ isNotificationVisible: false })}
                style={{ marginLeft: 5 }}
              />
            </span>
          </div>
          <div className="notification-details">
            <div className="col-sm-12 no-padding-lr notifications-list">
              {
                this.state.notifications && this.state.notifications.length > 0
                ? this.state.notifications.map((item, i) => {
                  return (
                    <div className="notifications-list-item">
                      <img src={require('./../../assets/bell.svg')} alt="" className="img-fluid" />
                      <small className="float-right">{moment(item.timestamp).fromNow()}</small>
                      <h6>{item.payload.title}</h6>
                      <p>{item.payload.message}</p>
                    </div>
                  )
                })
                : <EmptyState
                    img={require("../../assets/error.png")}
                    title="No notifications"
                    body="You currently have no notifications, you can buy or make payment for your orders to get notifications"
                    buttonText="Go to farms"
                    onClick={() => window.location.replace("/shop")}
                  />
              }
            </div>
          </div>
        </NotificationPanel>
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
                  <input type="text" onChange={this.onChangeReviewText.bind(this, "title")} placeholder="Title" />
                </div>
                <div className="form-group">
                  <label>Body</label>
                  <textarea type="text" onChange={this.onChangeReviewText.bind(this, "description")} placeholder="Body" />
                </div>
                <div className="form-group">
                  <Button
                    buttonText="Submit Feedback Review"
                    className="btn btn_green btn-block"
                    onClick={this._addReviews}
                  />
                </div>
              </form>
            </div>
          </div>
        </NotificationPanel>
        <Footer />
      </DashWrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    // loading: state.Login.loading,
    // success: state.Login.success,
    // error: state.Login.error
  };
};

export default connect(
  mapStateToProps,
  { addReviews }
)(Dashboard);

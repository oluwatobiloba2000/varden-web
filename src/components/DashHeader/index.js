import React, { PureComponent } from "react";

import { Wrapper } from "./index.styles";

import {
  NotificationIcon,
  OverviewIcon,
  UserIcon,
  HistoryIcon,
  TrackIcon,
  OrderHistoryIcon,
  NextIcon
} from "../../components/Icons";

export default class DashHeader extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isMobile: window.innerWidth < 480
    };
  }

  componentDidMount() {
    window.addEventListener("resize", () => {
      this.setState({ isMobile: window.innerWidth < 480 });
    });
  }

  render() {
    const { isMobile } = this.state;
    return (
      <Wrapper>
        <header>
          <div className="top-nav pt-3">
            <nav className="d-none d-md-flex container justify-content-between align-items-center">
              <img class="logo" src={require("../../assets/varden-logo.png")} />
              <ul>
                <li>Farm store</li>
                <li>Feedback</li>
                <li>
                  <NotificationIcon />{" "}
                </li>
                <li>
                  {" "}
                  <img
                    src={require("../../assets/avatar.png")}
                    className="avatar"
                    width="50"
                  />{" "}
                </li>
              </ul>
            </nav>
            <nav className="mobile-nav d-flex d-md-none container justify-content-between">
              <img class="logo" src={require("../../assets/varden-logo.png")} />
              <ul>
                <li>
                  <NotificationIcon width={isMobile ? "1.25rem" : ""} />{" "}
                </li>
                <li>
                  {" "}
                  <img
                    src={require("../../assets/avatar.png")}
                    className="avatar"
                    width="25"
                  />
                </li>
              </ul>
            </nav>
          </div>
          <div class={`bottom-nav ${isMobile ? "pt-1" : "pt-3"}`}>
            <nav class="container">
              <ul class="d-flex flex-row align-items-center">
                <li>
                  <OverviewIcon
                    width={isMobile ? "1rem" : ""}
                    height={isMobile ? "1rem" : ""}
                  />{" "}
                  <span className="ml-1">Overview</span>
                </li>
                <li>
                  <UserIcon
                    width={isMobile ? "1rem" : ""}
                    height={isMobile ? "1rem" : ""}
                  />{" "}
                  <span className="ml-1"> Profile</span>
                </li>
                <li>
                  <HistoryIcon
                    width={isMobile ? "1rem" : ""}
                    height={isMobile ? "1rem" : ""}
                  />{" "}
                  <span className="ml-1"> Payment History</span>
                </li>
                <li>
                  <TrackIcon
                    width={isMobile ? "1rem" : ""}
                    height={isMobile ? "1rem" : ""}
                  />{" "}
                  <span className="ml-1"> Track Current Order</span>
                </li>
                <li>
                  <OrderHistoryIcon
                    width={isMobile ? "1rem" : ""}
                    height={isMobile ? "1rem" : ""}
                  />{" "}
                  <span className="ml-1"> Order History</span>
                </li>
              </ul>
            </nav>
          </div>
        </header>
      </Wrapper>
    );
  }
}

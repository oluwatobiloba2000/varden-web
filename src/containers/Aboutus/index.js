import React, { PureComponent } from "react";

import { Wrapper, Masthead } from "./about.styles.js";
import Navbar from "../../components/Header/Navbar/index.js";
import Footer from "../../components/Footer/generalfooter.js";
import Button from "../../components/Button/index.js";

class About extends PureComponent {
  render() {
    return (
      <Wrapper>
        <Navbar white />
        <Masthead>
          <div className="container">
            <div className="row">
              <div className="col-12 top-margin text-center">
                <h1>The Varden foods' story</h1>
                <p>Learn about our story, our vision and mission</p>
              </div>
            </div>
          </div>
        </Masthead>
        <div className="unique organics">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-sm-6">
                <h1>What is Varden foods?</h1>
                <p className="mt-3">
                  Varden Foods is an organic food company specialized in the
                  processing and distribution of high quality fresh farm produce
                  for consumption in and around Nigeria. We are driven by the
                  need to refute the common impression that consuming healthy,
                  fresh food and maintaining a healthy diet is expensive. Our
                  commitment to providing you quality at affordable prices, with
                  the goal of being your leading food processing company, as
                  engineered our excellent customer service delivery. We know
                  the world has gotten so busy, with Varden you have
                  flexibility.
                </p>
              </div>
              <div className="col-sm-6">
                <div className="organic-text">
                  <h1>100%</h1>
                  <h3>Organic</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="how">
          <div className="container-fluid no-left-padding">
            <div className="row align-items-center">
              <div className="col-sm-6">
                <img
                  src={require("../../assets/pexels-photo-1640777.jpeg")}
                  alt=""
                />
              </div>
              <div className="col-sm-5 pl-4 pr-4">
                <div className="row">
                  <div className="col-sm-12">
                    <h3>Our vision</h3>
                    <p>
                      Our vision is to be the premier brand of healthy organic
                      Foods and dairy products by providing high quality
                      products to our customers.
                    </p>
                  </div>
                  <div className="col-sm-12 top">
                    <h3>Our is Mission is achievable</h3>
                    <p>
                      Our mission is to produce quality, fresh, healthy and high
                      nutritional value Foods at the best prices.
                    </p>
                  </div>
                  <div className="col-sm-12 top">
                    <h3>With a basic Goal</h3>
                    <p>
                      To being one of the leading food processing company in
                      Nigeria and subsequently Africa in a span of 5 years, by
                      producing and processing nutritional and organic farm
                      produce with an excellent customer service delivery
                      regime.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="call-to-action">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 text-center">
                <h2>Ready to do some shopping?</h2>
                <Button
                  onClick={() => window.location.replace("/shop")}
                  buttonText="Visit farm store"
                  className="buy-btn"
                />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </Wrapper>
    );
  }
}

export default About;

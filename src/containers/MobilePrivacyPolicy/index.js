import React, { PureComponent } from "react";

import { Wrapper, Masthead } from "./index.styles.js";
import Navbar from "../../components/Header/Navbar/index.js";
import Footer from "../../components/Footer/generalfooter.js";
import Button from "../../components/Button/index.js";
import { useOfInformation, willShareInfo, willShareInfo2 } from "./constants";

class MobilePrivacyPolicy extends PureComponent {
  render() {
    return (
      <Wrapper>
        <Navbar white />
        <Masthead>
          <div className="container">
            <div className="row">
              <div className="col-12 top-margin text-center">
                <h1>Privacy Policy</h1>
                <p>Learn how we collect and manage your data</p>
              </div>
            </div>
          </div>
        </Masthead>
        <div className="unique organics">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-sm-12">
                <p className="mt-3">
                  Thank you for choosing to be part of our community at  Appetite
                  foods Limited (“Company”, “we”, “us”, “our”). We are committed
                  to protecting your personal information and your right to
                  privacy. If you have any questions or concerns about this
                  privacy notice, or our practices with regards to your personal
                  information, please contact us at enquiry@appetite.com.ng
                </p>
                <p className="mt-3">
                  When you use our mobile application, as the case may be (the
                  “app”) and more generally, use any of our services (the
                  “services”, which include the “App”), we appreciate that you
                  are trusting us with your personal information. We take your
                  privacy very seriously. In this privacy notice, we seek to
                  explain to you in the clearest way possible what information
                  we collect, how we use it and what rights you have in relation
                  to it. We hope you take some time to read it carefully, as it
                  is important. If there are terms in this privacy notice that
                  you do not agree with, please discontinue use of our Services
                  immediately.
                </p>
                <p className="mt-3">
                  The privacy notice applies to all information collected
                  through our Services (which, as described above, includes our
                  App), as well as, any related services, sales, marketing or
                  events.
                </p>
                <p className="mt-3" style={{ fontWeight: "bold" }}>
                  Please read this privacy notice carefully as it will help you
                  to understand what we do with the information that we collect.
                </p>
              </div>

              <div className="col-sm-12 mt-3">
                <h3>1. USER RESPONSIBILITIES</h3>
                <>
                  <p className="mt-3" style={{ fontWeight: "bold" }}>
                    Personal information you disclose to us
                  </p>
                  <p className="mt-3">
                    We collect personal information that you provide to us when
                    you register on the App, express and interest in obtaining
                    information about us or our products and Services, when you
                    participate in activities on the App or otherwise when you
                    contact us.
                  </p>
                  <p className="mt-3">
                    The personal information that we collect depends on the
                    context of your interactions with us and the App, the
                    choices you make and the products and features you use. The
                    personal information we may collect may include the
                    following:
                  </p>
                  <p className="mt-3">
                    <span style={{ fontWeight: "bold" }}>Payment Data.</span> We
                    may collect data necessary to process your payment if you
                    make purchases, such as your payment instrument number (such
                    as a credit card number), and the security code associated
                    with your payment instrument. All payment data is managed by
                    Paystack. You may find their privacy notice link(s) here:{" "}
                    <a href="https://paystack.com/terms">Paystack</a>
                  </p>
                  <p className="mt-3">
                    All personal information that you provide to us must be
                    true, complete and accurate, and you must notify us of any
                    changes to such personal information.
                  </p>
                </>
                <>
                  <p className="mt-3" style={{ fontWeight: "bold" }}>
                    Information collected through our App
                  </p>
                  <p className="mt-3">
                    If you use our App, we also collect the following
                    information:
                  </p>
                  <ul className="row col-sm-12 ml-5">
                    <li>
                      Push Notifications. We may request to send you push
                      notifications regarding your account or certain features
                      on the App. If you wish to opt-out from receiving these
                      types of communications, you may turn them off in your
                      device’s settings.
                    </li>
                  </ul>
                  <p className="mt-3">
                    This information is primarily needed to maintain the
                    security and operation of our App, for troubleshooting and
                    for our internal analytics and reporting purposes.
                  </p>
                </>
              </div>

              <div className="col-sm-12 mt-3">
                <h3>2. HOW DO WE USE YOUR INFORMATION?</h3>
                <p className="mt-3">
                  We use personal information collected via our App for a
                  variety of business purposes described below. We process your
                  personal information for these purposes in reliance on our
                  legitimate business interests, in order to enter into or
                  perform a contract with you, with your consent, and/or for
                  compliance with our legal obligations. We indicate the
                  specific processing grounds we rely on next to each purpose
                  listed below.
                </p>
                <p className="mt-3">
                  We use the information we collect or receive:
                </p>
                <ul className="row col-sm-12 ml-5">
                  {useOfInformation.map(({ toBold, content }) => (
                    <li>
                      <span style={{ fontWeight: "bold" }}>{toBold} </span>
                      {content}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="col-sm-12 mt-3">
                <h3>3. WILL YOUR INFORMATION BE SHARED WITH ANYONE?</h3>
                <p className="mt-3">
                  We may process or share your data that we hold based on the
                  following legal basis:
                </p>
                <ul className="row col-sm-12 ml-5">
                  {willShareInfo.map(({ toBold, content }) => (
                    <li>
                      <span style={{ fontWeight: "bold" }}>{toBold} </span>
                      {content}
                    </li>
                  ))}
                </ul>

                <p className="mt-3">
                  More specifically, we may need to process your data or share
                  your personal information in the following situations:
                </p>

                <ul className="row col-sm-12 ml-5">
                  {willShareInfo2.map(({ toBold, content }) => (
                    <li>
                      <span style={{ fontWeight: "bold" }}>{toBold} </span>
                      {content}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="col-sm-12 mt-3">
                <h3>4. HOW LONG DO WE KEEP YOUR INFORMATION?</h3>
                <p className="mt-3">
                  We will only keep your personal information for as long as it
                  is necessary for the purposes set out in this privacy notice,
                  unless a longer retention period is required or permitted by
                  law (such as tax
                </p>
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

export default MobilePrivacyPolicy;

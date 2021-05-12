import React, { PureComponent } from "react";

import { Wrapper, Masthead } from "./index.styles.js";
import Navbar from "../../components/Header/Navbar/index.js";
import Footer from "../../components/Footer/generalfooter.js";
import Button from "../../components/Button/index.js";
import {
  termsDefinition,
  userRes21,
  otherUserRes,
  interlectProp,
  ownershipContentUse,
  confidentiality,
  confidentiality22,
  privacyPolicy,
  indemnification,
  suspendService,
  terminateServiceByYou,
  governingLaw,
} from "./constants";

class MobileTermsAndCondition extends PureComponent {
  render() {
    return (
      <Wrapper>
        <Navbar white />
        <Masthead>
          <div className="container">
            <div className="row">
              <div className="col-12 top-margin text-center">
                <h1>Terms And condition</h1>
                <p>Helpful insight into some important agreements</p>
              </div>
            </div>
          </div>
        </Masthead>
        <div className="unique organics">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-sm-12">
                <h1 className="text-center">TERMS AND CONDITIONS OF USE</h1>
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
              <div className="col-sm-12 mt-3">
                <h3>1. DEFINITIONS AND INTERPRETATIONS</h3>

                <div className="row col-sm-12">
                  <p className="col-sm-1">1.1</p>
                  <p className="col-sm-11">
                    In these T&Cs, the following terms have the following
                    interpretations set opposite them save the context
                    determines otherwise:
                  </p>
                </div>

                {termsDefinition.map(({ name, definition }) => (
                  <div className="row col-sm-12">
                    <p className="col-sm-3">{name}</p>
                    <p className="col-sm-9">{definition}</p>
                  </div>
                ))}
              </div>
              <div className="col-sm-12 mt-3">
                <h3>2. USER RESPONSIBILITIES</h3>
                <p className="mt-3">
                  In these T&Cs, the following terms have the following
                  interpretations set opposite them save the context determines
                  otherwise:
                </p>
                <div className="row col-sm-12">
                  <p className="col-sm-1">2.1</p>
                  <p className="col-sm-11">
                    You shall not use the Services or permit the Services to be
                    used:
                  </p>
                </div>

                {userRes21.map(({ definition }, index) => (
                  <div className="row col-sm-12 ml-5">
                    <p className="col-sm-1">2.1.{index + 1}</p>
                    <p className="col-sm-11">{definition}</p>
                  </div>
                ))}

                {otherUserRes.map(({ definition }, index) => (
                  <div className="row col-sm-12">
                    <p className="col-sm-1">2.{index + 2}</p>
                    <p className="col-sm-11">{definition}</p>
                  </div>
                ))}
              </div>
              <div className="col-sm-12 mt-3">
                <h3>3. INTELLECTUAL PROPERTY</h3>

                {interlectProp.map((definition, index) => (
                  <div className="row col-sm-12">
                    <p className="col-sm-1">3.{index + 1}</p>
                    <p className="col-sm-11">{definition}</p>
                  </div>
                ))}
              </div>
              <div className="col-sm-12 mt-3">
                <h3>4. OWNERSHIP AND USE OF CONTENT</h3>

                {ownershipContentUse.map((definition, index) => (
                  <div className="row col-sm-12">
                    <p className="col-sm-1">4.{index + 1}</p>
                    <p className="col-sm-11">{definition}</p>
                  </div>
                ))}
              </div>
              <div className="col-sm-12 mt-3">
                <h3>5. CONFIDENTIALITY</h3>

                {confidentiality.map((definition, index) => (
                  <div className="row col-sm-12">
                    <p className="col-sm-1">5.{index + 1}</p>
                    <p className="col-sm-11">{definition}</p>
                  </div>
                ))}
                {confidentiality22.map((definition, index) => (
                  <div className="row col-sm-12 ml-5">
                    <p className="col-sm-1">5.2.{index + 1}</p>
                    <p className="col-sm-11">{definition}</p>
                  </div>
                ))}
              </div>
              <div className="col-sm-12 mt-3">
                <h3>6. PRIVACY POLICY</h3>

                {privacyPolicy.map((definition, index) => (
                  <div className="row col-sm-12">
                    <p className="col-sm-1">6.{index + 1}</p>
                    <p className="col-sm-11">{definition}</p>
                  </div>
                ))}
              </div>
              <div className="col-sm-12 mt-3">
                <h3>7. LIMITATIONS OF LIABILITY</h3>

                <div className="row col-sm-12">
                  <p className="col-sm-1">7.1</p>
                  <p className="col-sm-11">
                    We are also not responsible or liable for unsolicited
                    content which is accessed or received by you through your
                    subscription to the Services.
                  </p>
                </div>
              </div>
              <div className="col-sm-12 mt-3">
                <h3>8. DISCLAIMER OF WARRANTIES</h3>

                <div className="row col-sm-12">
                  <p className="col-sm-1">8.1</p>
                  <p className="col-sm-11">
                    TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, EXCEPT AS
                    EXPRESSLY PROVIDED FOR IN THIS AGREEMENT, the Company MAKES
                    NO OTHER WARRANTY OF ANY KIND, WHETHER EXPRESS, IMPLIED,
                    STATUTORY OR OTHERWISE, INCLUDING WITHOUT LIMITATION
                    WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR USE
                    AND NON-INFRINGEMENT.
                  </p>
                </div>
              </div>
              <div className="col-sm-12 mt-3">
                <h3>9. LIMITATION OF LIABILITY</h3>

                <div className="row col-sm-12">
                  <p className="col-sm-1">8.1</p>
                  <p className="col-sm-11">
                    TO THE FULL EXTENT PERMITTED BY APPLICABLE LAW, the Company
                    WILL NOT BE LIABLE FOR YOUR LOST REVENUES OR INDIRECT,
                    SPECIAL, INCIDENTAL, CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE
                    DAMAGES, EVEN IF the Company OR ITS SUBSIDIARIES AND
                    AFFILIATES HAVE BEEN ADVISED OF, KNEW OR SHOULD HAVE KNOWN
                    THAT SUCH DAMAGES WERE POSSIBLE AND EVEN IF DIRECT DAMAGES
                    DO NOT SATISFY A REMEDY.
                  </p>
                </div>
              </div>
              <div className="col-sm-12 mt-3">
                <h3>10. INDEMNIFICATION</h3>

                <div className="row col-sm-12">
                  <p className="col-sm-1">10.1</p>
                  <p className="col-sm-11">
                    You agree to indemnify and defend us, our directors,
                    officers, employees, agents and their successors, against
                    all third-party claims for damages, losses, liabilities or
                    expenses, including reasonable attorneys’ fees, arising out
                    of:
                  </p>
                </div>

                {indemnification.map((definition, index) => (
                  <div className="row col-sm-12 ml-5">
                    <p className="col-sm-1">10.1.{index + 1}</p>
                    <p className="col-sm-11">{definition}</p>
                  </div>
                ))}
              </div>
              <div className="col-sm-12 mt-3">
                <h3>
                  11. SUSPENSION AND TERMINATION OF SERVICES INITIATED BY US
                </h3>

                <div className="row col-sm-12">
                  <p className="col-sm-1">11.1</p>
                  <p className="col-sm-11">
                    We may upon issuance of adequate notice (without any
                    obligation do so) suspend the Services in whole or in part
                    at any time (without being liable to compensate you in any
                    way) if:
                  </p>
                </div>

                {suspendService.map((definition, index) => (
                  <div className="row col-sm-12 ml-5">
                    <p className="col-sm-1">11.1.{index + 1}</p>
                    <p className="col-sm-11">{definition}</p>
                  </div>
                ))}

                <div className="row col-sm-12">
                  <p className="col-sm-1">11.2</p>
                  <p className="col-sm-11">
                    You shall continue to be liable for outstanding Charges
                    during the period of suspension.
                  </p>
                </div>
              </div>
              <div className="col-sm-12 mt-3">
                <h3>12. TERMINATION OF SERVICES INITIATED BY YOU</h3>

                {terminateServiceByYou.map((definition, index) => (
                  <div className="row col-sm-12">
                    <p className="col-sm-1">12.{index + 1}</p>
                    <p className="col-sm-11">{definition}</p>
                  </div>
                ))}
              </div>
              <div className="col-sm-12 mt-3">
                <h3>13. DELIVERY</h3>

                <p className="mt-3 ml-5">
                  We make every effort to deliver goods within the estimated
                  timescales set out on our Site; however delays are
                  occasionally inevitable due to unforeseen factors. We shall be
                  under no liability for any delay or failure to deliver the
                  products within the estimated timescales especially where they
                  did not occur due to our fault or negligence. You agree not to
                  hold the Service Provider liable for any delay or failure to
                  deliver products.
                </p>
              </div>
              <div className="col-sm-12 mt-3">
                <h3>14. SEVERABILITY</h3>

                <p className="mt-3 ml-5">
                  If any portion of these Terms or Conditions of Sale is held by
                  any court or tribunal to be invalid or unenforceable, either
                  in whole or in part, then that part shall be severed from
                  these Terms and Conditions of Sale and shall not affect the
                  validity or enforceability of any other section listed in this
                  document.
                </p>
              </div>
              <div className="col-sm-12 mt-3">
                <h3>15. MISCELLANEOUS PROVISIONS</h3>

                <p className="mt-3 ml-5">
                  You agree that all agreements, notices, disclosures and other
                  communications that we provide to you electronically satisfy
                  any legal requirement that such communications be in writing.
                  Assigning or sub-contracting any of your rights or obligations
                  under these Terms and Conditions of Sale to any third party is
                  prohibited unless agreed upon in writing by the seller. We
                  reserve the right to transfer, assign or sub-contract the
                  benefit of the whole or part of any rights or obligations
                  under these Terms and Conditions of Sale to any third party.
                </p>
              </div>
              <div className="col-sm-12 mt-3">
                <h3>16. GOVERNING LAW AND DISPUTE RESOLUTION</h3>

                {governingLaw.map((definition, index) => (
                  <div className="row col-sm-12">
                    <p className="col-sm-1">16.{index + 1}</p>
                    <p className="col-sm-11">{definition}</p>
                  </div>
                ))}
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

export default MobileTermsAndCondition;

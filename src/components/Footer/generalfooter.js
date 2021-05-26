import React from "react";
import { NavLink } from "react-router-dom";
import logoImg from "../../assets/appetite-logo.jpeg"
import { Wrapper } from "./generalfooter.styles";
const Footer = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="row just">
          <div className="col-sm-12 col-md-4 col-lg-4">
            <img src={logoImg} alt="" style={{width: '75%'}} className="logo"/>
            <p>
              To meet the huge demand gaps and create wealth through agriculture
              by producing different types of agricultural products and thus 
              meeting the increasing demand for fresh organic 
              farm produce while generating returns for our shareholders. 
            </p>
          </div>
          <div className="col-sm-6 col-md-3 col-lg-3">
            <div className="links">
              <h6>Social</h6>
              <a href="https://web.facebook.com/vardenfoods/">Facebook</a>
              <a href="https://www.instagram.com/vardenfoods/">Instagram</a>
            </div>
          </div>
          <div className="col-sm-6 col-md-3 col-lg-3">
            <div className="links">
              <h6>resources</h6>
              <NavLink to="/about">About</NavLink>
              <NavLink to="/delivery-partners">Deliver for us</NavLink>
            </div>
          </div>
          <div className="col-sm-6 col-md-2 col-lg-2">
            <div className="links">
              <h6>using Appetite</h6>
              <NavLink to="/privacy">Privacy</NavLink>
              <NavLink to="/terms">Terms of service</NavLink>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Footer;

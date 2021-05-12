import React from "react";

// import {
//   FacebookShareButton,
//   GooglePlusShareButton,
//   LinkedinShareButton,
//   TwitterShareButton,
//   TelegramShareButton,
//   WhatsappShareButton,
//   EmailShareButton,
//   TwitterIcon
// } from "react-share";

import { Wrapper } from "./thanks.styles";
const Thanks = () => {
  return (
    <Wrapper>
      <div className="row">
        <div className="col-sm-12 text-center">
          <img src={require("../../../../assets/succes.png")} alt="" />
          <h5>Registration successfuly</h5>
          <p>Thank you for registering, we would get back to you shortly</p>
          {/* <p>Please share varden with friends and families</p> */}
          {/* <FacebookShareButton url={"https://wwww.facebook.com/vardenfoods"} /> */}
        </div>
      </div>
    </Wrapper>
  );
};

export default Thanks;

import React, { PureComponent } from "react";
import { withRouter } from "react-router-dom";

import { HeaderWrapper } from "./header.styles";

import CustomSwiper from "./CustomSwiper";
import Navbar from "./Navbar"

// const images = [
//   {
//     src: headerImage1
//   },
//   {
//     src: headerImage2
//   }
// ];

class Header extends PureComponent {
  render() {
    const {isSingleProductView, images} = this.props
    return (
      <HeaderWrapper>
        <CustomSwiper isSingleProductView={isSingleProductView} images={images} />
        <Navbar />
      </HeaderWrapper>
    );
  }
}

export default withRouter(Header);

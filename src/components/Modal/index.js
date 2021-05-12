import React, { PureComponent } from "react";

import { BackdropWrapper } from "./modal.styles";
import cancelSvg from '../../assets/cancel.png';

/**
 * @param {Boolean} show: boolean to show if modal should be rendered or not
 * @param {Node} children:
 * @param {Function} onClose: the callback function to close modal
 */

export default class Modal extends PureComponent {
  handleClose = e => {
    this.props.onClose();
  };

  render() {
    if (!this.props.show) {
      return null;
    }

    return (
      <BackdropWrapper>
        <div className="custom-modal d-flex justify-content-center">
          <img
            src={cancelSvg}
            alt=""
            className="close"
            onClick={this.handleClose}
          />

          {this.props.children}
        </div>
      </BackdropWrapper>
    );
  }
}

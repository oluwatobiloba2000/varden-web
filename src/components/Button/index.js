import React, { PureComponent } from "react";

import { ButtonWrapper } from "./button.styles";

/**
 * @param {String} buttonText: the value of the button,
 * @param {String} className: styling for the button background color and text color
 * @param {Function} onClick: a callback function
 * @param {String} height:a custom height for the button
 * @param {String} width: a custom width for the button
 *  @param {Boolean} isLoading: a boolean value to show a spinner in the button
 * @param {Boolean} main: A boolean value that gives the button the main button styles
 */
class Button extends PureComponent {
  render() {
    const {
      onClick,
      buttonText,
      isLoading,
      height,
      width,
      className
    } = this.props;
    return (
      <ButtonWrapper
        height={height}
        onClick={onClick}
        className={className}
        width={width}
      >
        {isLoading ? (
          <img
            src={require("../../assets/loading.svg")}
            className="loader"
            alt=""
          />
        ) : (
          buttonText
        )}
      </ButtonWrapper>
    );
  }
}

export default Button;

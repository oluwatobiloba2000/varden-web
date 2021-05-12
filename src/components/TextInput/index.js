import React, { PureComponent } from "react";

import {InputWrapper } from "./input.styles";

/**
 * @param {String} placeholder: the placeholder for the input
 * @param {String} type: The input type, any of ['select', 'text', 'date', 'number', 'tel']
 * @param {String} height: The height of the input
 * @param {String} name: The name value for the input. Not needed input of type select
 * @param {Function} onChange: the callback function to collect the value from the input field while users types
 */

class Input extends PureComponent {
  render() {
    const { placeholder, type, height, name, value, onChange, className, required} = this.props;
    return (
      <InputWrapper
        placeholder={placeholder}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        height={height}
        className={className}
      />
    );
  }
}


export default Input;
import React from 'react';
import PropTypes from 'prop-types'

import Button from "../Button";
import { Wrapper } from "./emptystate.styles";

/**
 * 
 * @param {String} img: img url to show the state of the error
 * @param {String} title: the title of the empty state, to let the user know what is wrong
 * @param {String} body: the body of the empty state, explaining what went wrong 
 * @param {String} buttonText: the text of the button
 * @param {Function} onPress: a callback function to show the user what action to perform
 */
const EmptyState = ({img, title, body, onClick, buttonText}) => {
  return(
    <Wrapper>
      <img src={img} alt=""/>
      <h4>{title}</h4>
      <p>{body}</p>
      <Button 
        buttonText={buttonText}
        className="btn"
        onClick={onClick}
      />
    </Wrapper>
  )
}

EmptyState.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired
}

export default EmptyState;
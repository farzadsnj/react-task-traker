import React from "react";
import PropTypes from 'prop-types'

const Button = ({ btname }) => {
  return <button className="btn">{btname}</button>;
};

Button.defaultProps = {
    text: 'Add'
}

Button.prototype = {
    btname: PropTypes.string
}

export default Button;

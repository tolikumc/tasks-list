import React from 'react';
import './index.scss';
import PropTypes from 'prop-types';

const Card = ({ text }) => {
  return <div className="card">{text}</div>;
};

Card.propTypes = { text: PropTypes.string.isRequired };

export default Card;

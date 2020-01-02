import React from 'react';
import './index.scss';
import PropTypes from 'prop-types';

const Card = ({ children }) => {
  return <div className="card">{children}</div>;
};

Card.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired
};

export default Card;

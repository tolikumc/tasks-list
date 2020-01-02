import React from 'react';
import './index.scss';
import PropTypes from 'prop-types';

const Panel = ({ children }) => {
  return <div className="panel">{children}</div>;
};

Panel.propTypes = { children: PropTypes.string.isRequired };

export default Panel;

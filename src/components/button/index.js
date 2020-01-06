import React from 'react';
import './index.scss';

const Button = ({ children, click }) => {
  return (
    <button className="button" onClick={() => click()}>
      {children}
    </button>
  );
};

export default Button;

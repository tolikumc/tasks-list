import React from 'react';
import './index.scss';
import Card from '../card';
import addIcon from '../../static/img/plus.svg';

const Panel = ({ items }) => {
  return (
    <div className="panel">
      <div className="panel__items">
        {items.map(item => (
          <Card text={item.text} />
        ))}
      </div>
      <div className="panel__button">
        <div className="panel__button-add-btn">
          <img src={addIcon} alt="plus" />
          <span>Add new task</span>
        </div>
      </div>
    </div>
  );
};

export default Panel;

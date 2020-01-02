import React from 'react';
import './index.scss';
import Card from '../card';
import { AddForm } from '../add-form';

const Panel = ({ items }) => {
  return (
    <div className="panel">
      <div className="panel__items">
        {items.map(item => (
          <Card text={item.text} key={item.text} />
        ))}
        <AddForm />
      </div>
    </div>
  );
};

export default Panel;

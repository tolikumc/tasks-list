import React from 'react';
import './index.scss';
import Card from '../card';
import { AddForm } from '../add-form';
import classNames from 'classnames';

const Panel = ({ items }) => {
  return (
    <div className={classNames('panel', { 'panel--empty': !items })}>
      {items && (
        <div className="panel__items">
          {items.map((item, index) => (
            <Card key={index}>{item.text}</Card>
          ))}
        </div>
      )}
      <AddForm />
    </div>
  );
};

export default Panel;

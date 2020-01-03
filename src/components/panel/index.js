import React from 'react';
import './index.scss';
import Card from '../card';
import { AddForm } from '../add-form';
import classNames from 'classnames';

const Panel = ({ title, cards }) => {
  return (
    <div className={classNames('panel', { 'panel--empty': !cards })}>
      {title && (
        <div className="panel__title">
          <b>{title}</b>
        </div>
      )}
      {cards && (
        <div className="panel__items">
          {cards.map((item, index) => (
            <Card key={index}>{item}</Card>
          ))}
        </div>
      )}
      <AddForm isEmptyPanel={cards} />
    </div>
  );
};

export default Panel;

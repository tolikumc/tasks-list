import React from 'react';
import './index.scss';
import Card from '../card';
import { AddForm } from '../add-form';
import deleteImg from '../../static/img/wrong.svg';
import classNames from 'classnames';

const Panel = ({ title, cards, onAddCard, onAddPanel, panelIdx }) => {
  return (
    <div className={classNames('panel', { 'panel--empty': !cards })}>
      {title && (
        <div className="panel__title">
          <b>{title}</b>
          <img src={deleteImg} alt="delete" />
        </div>
      )}
      {cards && (
        <div className="panel__items">
          {cards.map((item, index) => (
            <Card key={index}>{item}</Card>
          ))}
        </div>
      )}
      <AddForm
        isEmptyPanel={cards}
        panelIdx={panelIdx}
        onAddPanel={onAddPanel}
        onAddCard={onAddCard}
      />
    </div>
  );
};

export default Panel;

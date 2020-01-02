import React from 'react';
import './index.scss';
import Card from '../card';
import Button from '../button';
import wrong from '../../static/img/wrong.svg';
import addIcon from '../../static/img/plus.svg';

export const AddForm = () => {
  return (
    <>
      <div className="add-form">
        <div className="add-form_input">
          <Card>
            <textarea rows="3" />
          </Card>
          <div className="add-form__bottom">
            <Button>Add new task</Button>
            <img src={wrong} alt="wrong" />
          </div>
        </div>
      </div>
      <div className="panel__button">
        <div className="panel__button-add-btn">
          <img src={addIcon} alt="plus" />
          <span>Add new task</span>
        </div>
      </div>
    </>
  );
};

import React, { useState, useRef, useEffect } from 'react';
import './index.scss';
import Card from '../card';
import Button from '../button';
import wrong from '../../static/img/wrong.svg';
import addIcon from '../../static/img/plus.svg';

export const AddForm = () => {
  const [show, setShow] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [show]);

  return (
    <>
      {show ? (
        <div className="add-form">
          <div className="add-form__input">
            <Card>
              <textarea rows="3" ref={inputRef} />
            </Card>
            <div className="add-form__bottom">
              <Button>Add new task</Button>
              <img
                src={wrong}
                className="add-form__bottom-wrong"
                alt="wrong"
                onClick={() => setShow(false)}
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="add-form__button">
          <div
            className="add-form__button-add-btn"
            onClick={() => setShow(true)}
          >
            <img src={addIcon} alt="plus" />
            <span>Add new task</span>
          </div>
        </div>
      )}
    </>
  );
};

import React, { useState, useRef, useEffect } from 'react';
import './index.scss';
import Card from '../card';
import Button from '../button';
import wrong from '../../static/img/wrong.svg';
import addIcon from '../../static/img/plus.svg';

export const AddForm = ({ isEmptyPanel, onAddPanel, onAddCard, panelIdx }) => {
  const [show, setShow] = useState(false);
  const [value, setValue] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [show]);

  const onAdd = () => {
    if (isEmptyPanel) {
      onAddPanel(value);
    } else {
      onAddCard(panelIdx, value);
    }
    setValue('');
    setShow(false);
  };

  return (
    <>
      {show ? (
        <div className="add-form">
          <div className="add-form__input">
            <Card>
              <textarea
                value={value}
                onChange={e => setValue(e.target.value)}
                rows="3"
                ref={inputRef}
                placeholder={
                  isEmptyPanel ? 'Enter panel name' : 'Enter task name'
                }
              />
            </Card>
            <div className="add-form__bottom">
              <Button click={onAdd}>
                {isEmptyPanel ? 'Enter panel name' : 'Enter task name'}
              </Button>
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
            <span>{isEmptyPanel ? 'Enter panel name' : 'Enter task name'}</span>
          </div>
        </div>
      )}
    </>
  );
};

import React from 'react';
import './index.scss';
import Card from '../card';
import { AddForm } from '../add-form';
import deleteImg from '../../static/img/wrong.svg';
import classNames from 'classnames';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const Panel = ({
  title,
  cards,
  onAddCard,
  onAddPanel,
  panelIdx,
  isEmptyPanel,
  onRemove,
  reorderCard
}) => {
  const onDragEnd = ({ source, destination }) => {
    if (!destination) {
      return;
    }
    reorderCard({
      panelIdx,
      sourceIndex: source.index,
      destinationIndex: destination.index
    });
  };
  return (
    <div className={classNames('panel', { 'panel--empty': !cards })}>
      {title && (
        <div className="panel__title">
          <b>{title}</b>
          <img
            src={deleteImg}
            alt="delete"
            onClick={() => onRemove(panelIdx)}
          />
        </div>
      )}
      {cards && (
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId={`droppable-${panelIdx}`}>
            {provided => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                {cards.map((item, index) => (
                  <Draggable
                    key={item}
                    draggableId={`card${index}`}
                    index={index}
                  >
                    {provided => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className="panel__items"
                      >
                        <Card key={index}>{item}</Card>
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>

        // <div className="panel__items">
        // </div>
      )}
      <AddForm
        isEmptyPanel={isEmptyPanel}
        panelIdx={panelIdx}
        onAddPanel={onAddPanel}
        onAddCard={onAddCard}
      />
    </div>
  );
};

export default Panel;

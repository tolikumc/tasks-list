import React from 'react';
import Panel from './index';
import { connect } from 'react-redux';
import {
  addCardAC,
  addPanelAC,
  deletePanelAC
} from '../../redux/pannel-reducer';

const Panels = ({ panel, addPanel, addCard, deletePanel }) => {
  const onRemove = pannelIdx => {
    if (global.confirm('Are you sure?')) {
      deletePanel(pannelIdx);
    }
  };
  return (
    <>
      {panel.map((item, idx) => (
        <Panel
          title={item.title}
          panelIdx={idx}
          key={idx}
          cards={item.cards}
          onAddCard={addCard}
          onAddPanel={addPanel}
          isEmptyPanel={false}
          onRemove={onRemove}
        />
      ))}
      <Panel
        onAddPanel={addPanel}
        onAddCard={addCard}
        isEmptyPanel={true}
        deletePanel={deletePanel}
      />
    </>
  );
};

const mapDispatchToProps = dispatch => ({
  addPanel: name => {
    dispatch(addPanelAC(name));
  },
  addCard: (panelIdx, text) => {
    dispatch(addCardAC(panelIdx, text));
  },
  deletePanel: panelIdx => {
    dispatch(deletePanelAC(panelIdx));
  }
});

export default connect(({ panel }) => panel, mapDispatchToProps)(Panels);

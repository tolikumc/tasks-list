import React from 'react';
import Panel from './index';
import { connect } from 'react-redux';
import {
  addCardAC,
  addPanelAC,
  deletePanelAC,
  reorderCardAC
} from '../../redux/pannel-reducer';

const Panels = ({ panel, addPanel, addCard, deletePanel, reorderCard }) => {
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
          reorderCard={reorderCard}
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
  },
  reorderCard: (panelIdx, sourceIndex, destinationIndex) => {
    dispatch(reorderCardAC(panelIdx, sourceIndex, destinationIndex));
  }
});

export default connect(({ panel }) => panel, mapDispatchToProps)(Panels);

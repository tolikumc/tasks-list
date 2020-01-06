import React from 'react';
import Panel from './index';
import { connect } from 'react-redux';
import { addCardAC, addPanelAC } from '../../redux/pannel-reducer';

const Panels = ({ panel, addPanel, addCard }) => {
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
        />
      ))}
      <Panel onAddPanel={addPanel} onAddCard={addCard} />
    </>
  );
};

const mapDispatchToProps = dispatch => ({
  addPanel: name => {
    dispatch(addPanelAC(name));
  },
  addCard: (panelIdx, text) => {
    dispatch(addCardAC(panelIdx, text));
  }
});

export default connect(({ panel }) => panel, mapDispatchToProps)(Panels);

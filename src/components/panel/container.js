import React from 'react';
import Panel from './index';
import { connect } from 'react-redux';

const Panels = ({ panel }) => (
  <>
    {panel.map((item, idx) => (
      <Panel title={item.title} key={idx} cards={item.cards} />
    ))}
    <Panel />
  </>
);

export default connect(({ panel }) => panel)(Panels);

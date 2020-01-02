import React from 'react';
import './App.scss';
import Card from './components/card';
import Panel from './components/panel';

function App() {
  return (
    <div className="App">
      <Panel>
        <Card text={'Hello'} />
      </Panel>
    </div>
  );
}

export default App;

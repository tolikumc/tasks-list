import React from 'react';
import './App.scss';
import Panel from './components/panel';

function App() {
  return (
    <div className="App">
      <Panel
        items={[
          { text: 'Learn React.js' },
          { text: 'Cancel appointment' },
          { text: 'Find designer' }
        ]}
      />
    </div>
  );
}

export default App;

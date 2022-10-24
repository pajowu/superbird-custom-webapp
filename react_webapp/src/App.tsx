import './App.css';
import { useTime } from './hooks/useTime';
import React from 'react';

function App(): JSX.Element {
  const time = useTime();

  return (
    <div className="App">
      <header className="App-header">
        <p>Congratulations on running a custom webapp on your car thing</p>
        <p>{time}</p>
      </header>
    </div>
  );
}

export default App;

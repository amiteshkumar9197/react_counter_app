import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="counter-title">React Counter App</h1>
        <div className="counter-display" aria-live="polite" aria-atomic="true">
          Count: {count}
        </div>
        <div className="counter-buttons">
          <button className="counter-button" onClick={() => setCount(count + 1)}>
            Increment
          </button>
          <button className="counter-button" onClick={() => setCount(count - 1)}>
            Decrement
          </button>
          <button className="counter-button" onClick={() => setCount(0)}>
            Reset
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;

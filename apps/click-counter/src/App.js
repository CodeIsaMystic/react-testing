import React from 'react'
import './App.css';

function App() {
  const [ count, setCount ] = React.useState(0);

  return (
    <div 
      data-test="component-app" 
      className="container">
      <h1>Click Counter</h1>
      <h3 data-test="counter-display">
        The Counter is currently &nbsp;
        <span data-test="count">{count}</span>
      </h3>
      <button 
        data-test="increment-button" 
        onClick={() => setCount(count + 1)} 
        className="btn-incr">
        Increment Counter
      </button>
    </div>
  );
}

export default App;
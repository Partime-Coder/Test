import React, { useState } from 'react'

function App() {
  const [count, setCount] = useState(0);
  const add = () => {
    setCount(count + 1);
  };
  const sub = () => {
    setCount(count - 1);
  };
  const zero = () => {
    setCount(0);
  };
 
  return (
    
      <div className="counterbox">
        <div className="counterdisplay">{count}</div>
        <div className="btn-section">
          <button onClick={sub} className="btn">-Minus</button>
          <button onClick={zero} className="btn">Reset</button>
          <button onClick={add} className="btn">+Plus</button>
        </div>
      </div>
    
  )
}

export default App
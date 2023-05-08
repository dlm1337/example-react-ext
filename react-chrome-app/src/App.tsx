import { useState } from 'react';
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Sample React SPA</h1>
      <p>Count: {count}</p>
      <button className="button" onClick={incrementCount}>Increment Count</button>
    </div>
  );
}

export default App;
/*
useRef() is used to store a mutable value of the previous render
*/


import { useState, useRef } from "react";


function App() {
  const [count, setCount] = useState(60);

  const timerID = useRef();

  const startHandler = () => {
    timerID.current = setInterval(() => {
      setCount(prevCount => prevCount - 1);
    }, 1000);
  }

  const stopHandler = () => {
    clearInterval(timerID.current);
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={startHandler}>Start</button>
      <button onClick={stopHandler}>Stop</button>
    </div>
  );
}

export default App;
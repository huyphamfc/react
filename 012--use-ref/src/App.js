/*
useRef() is used to store a mutable value of the previous render
*/


import { useState, useRef, useEffect } from "react";


function App() {
  const [count, setCount] = useState(60);

  const timerID = useRef();
  const prevCount = useRef();

  useEffect(() => {
    prevCount.current = count;
  }, [count]);

  const startHandler = () => {
    timerID.current = setInterval(() => {
      setCount(prevCount => prevCount - 1);
    }, 1000);
  }

  const stopHandler = () => {
    clearInterval(timerID.current);
  }

  console.log(prevCount.current, count);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={startHandler}>Start</button>
      <button onClick={stopHandler}>Stop</button>
    </div>
  );
}

export default App;
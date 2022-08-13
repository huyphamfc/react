import { useState, useRef, useEffect } from "react";


function App() {
  const [count, setCount] = useState(0);

  const previousValue = useRef('not found');
  // previousValue.current = 'not found'

  useEffect(() => {
    previousValue.current = count;
  }, [count]);

  return (<>
    <h1>{count}</h1>
    <button onClick={() => setCount(count + 1)}>+</button>
    <p>The previous value is {previousValue.current}.</p>
  </>);
}

export default App;
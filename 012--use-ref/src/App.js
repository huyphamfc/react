import { useState, useRef, useEffect } from "react";


function App() {
  const [status, setStatus] = useState('ON');

  const reRenderingCount = useRef(0);

  useEffect(() => { reRenderingCount.current++ });

  const toggleHandler = () => {
    setStatus(status === 'ON' ? 'OFF' : 'ON');
  }

  return (<>
    <h1>Status is {status}</h1>
    <button onClick={toggleHandler}>Toggle</button>
    <p>UI re-rendered {reRenderingCount.current} time(s).</p>
  </>);
}

export default App;
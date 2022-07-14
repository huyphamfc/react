import { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(1);

  const increasingHandler = () => {
    // setCounter(counter + 1);
    // setCounter(counter + 1);

    setCounter(currentCounter => ++currentCounter);
    setCounter(currentCounter => ++currentCounter);
  }

  return (
    <div className="App">
      <h1>{counter}</h1>
      <button onClick={increasingHandler}>
        +
      </button>
    </div>
  );
}

export default App;

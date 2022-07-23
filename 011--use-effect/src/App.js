import { useState } from "react";
import Count from "./Count";

function App() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <button
        onClick={() => setShow(!show)}
      >
        Toggle
      </button>
      {show && <Count />}
    </div>
  );
}

export default App;
import { useState } from "react";
import Component from "./Component";

function App() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <button
        onClick={() => setShow(!show)}
      >
        Toggle
      </button>
      {show && <Component />}
    </div>
  );
}

export default App;
import { useState } from "react";
import Countdown from "./Countdown";

function App() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <button
        onClick={() => setShow(!show)}
      >
        Toggle
      </button>
      {show && <Countdown />}
    </div>
  );
}

export default App;
import { useState } from "react";
import Avatar from "./Avatar";

function App() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <button
        onClick={() => setShow(!show)}
      >
        Toggle
      </button>
      {show && <Avatar />}
    </div>
  );
}

export default App;
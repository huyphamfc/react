import { useRef } from "react";


function App() {
  const ref = useRef();

  return (<>
    <input ref={ref} />
    <button onClick={() => ref.current.focus()}>
      Focus Input
    </button>
  </>);
}

export default App;
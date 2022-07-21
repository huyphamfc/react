import ReactDOM from 'react-dom/client';


let state = [];

const root = ReactDOM.createRoot(document.getElementById('root'));

function renderUI() {
  root.render(<App />);
}

function useState(initialValue) {
  function setValue(newValue) {
    state[0] = newValue;
    renderUI();
  }
  if (state.length) return state;
  return state = [initialValue, setValue];
}

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>
        +
      </button>
    </div>
  )
}

renderUI();
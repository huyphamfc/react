import { useState } from 'react';

function App() {
  const [name, setName] = useState('');

  return (
    <div>
      <input value={name} onChange={e => setName(e.target.value)} />
      <button onClick={() => setName('Web Developer')}>
        Change
      </button>
    </div >
  )
}

export default App;
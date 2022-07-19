import { useState } from 'react';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [todo, setTodo] = useState(() =>
    JSON.parse(localStorage.getItem('todo')) ?? []
  );
  const clickHandler = () => {
    if (!inputValue) return;
    const todoUpdate = [...todo, inputValue];
    const todoStorage = JSON.stringify(todoUpdate);
    localStorage.setItem('todo', todoStorage);
    setTodo(todoUpdate);
    setInputValue('');
  }

  return (
    <div>
      <input
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
      />
      <button onClick={clickHandler}>Add</button>
      <ul>
        {
          todo.map(
            (item, index) =>
              <li key={index}>{item}</li>
          )
        }
      </ul>
    </div>
  )
}

export default App;
import { useState } from 'react';
import Content from './Content';

function App() {
  const [color, setColor] = useState();

  const clickHandler = () => {
    const colors = ['red', 'green', 'blue'];
    setColor(colors[Math.floor(Math.random() * colors.length)]);
  }

  console.log('Render: App');

  return (
    <div>
      <h1 style={{ color: color }}>Hello World</h1>
      <Content />
      <button onClick={clickHandler}>Click Me!</button>
    </div>
  );
}

export default App;
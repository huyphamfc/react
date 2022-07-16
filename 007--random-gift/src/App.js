import { useState } from 'react';

const gifts = [
  'CPU i9',
  'RAM 32GB',
  'Keyboard RGB'
];

function App() {
  const [gift, setGift] = useState();

  const clickHandler = () => {
    setGift(gifts[Math.trunc(Math.random() * gifts.length)]);
  }

  return (
    <div>
      <h1>{gift || 'Do not have any gift'}</h1>
      <button onClick={clickHandler}>Click Me</button>
    </div>
  )
}

export default App;
import { useState } from 'react';

import GoalForm from './components/Goals/GoalForm/GoalForm';
import GoalList from './components/Goals/GoalList/GoalList';
import './App.css';


function App() {
  const [list, setList] = useState([
    { text: 'Do all exercises!', id: 'g1' },
    { text: 'Finish the course!', id: 'g2' }
  ]);

  const [inputValue, setInputValue] = useState('');

  const inputHandler = e =>
    setInputValue(e.target.value);

  const addHandler = e => {
    e.preventDefault();
    if (!inputValue) return;
    setList(prevList => {
      prevList.unshift({ text: inputValue });
      return prevList;
    });
    setInputValue('');
  }

  const deleteHandler = id =>
    setList(prevList =>
      prevList.filter((_, index) => index !== id));

  let content = list.length > 0 ?
    <GoalList
      list={list}
      deleteHandler={deleteHandler}
    /> :
    <p>No course goals found. Maybe add one?</p>

  return (
    <div>
      <section className='goal-form'>
        <GoalForm
          inputValue={inputValue}
          inputHandler={inputHandler}
          addHandler={addHandler}
        />
      </section>
      <section className='goals'>
        {content}
      </section>
    </div>
  );
}

export default App;
import { useState } from 'react';

const courses = [
  {
    id: 1,
    name: 'HTML, CSS'
  },
  {
    id: 2,
    name: 'JavaScript'
  },
  {
    id: 3,
    name: 'ReactJS'
  }
];

function App() {
  const [checked, setChecked] = useState([]);
  // console.log(checked);
  const checkHandler = id => {
    setChecked(prev => {
      const isChecked = checked.includes(id);
      if (isChecked) {
        return checked.filter(item => item !== id);
      }
      return [...prev, id];
    });
  }

  const submitHandler = () => {
    console.log({ ids: checked });
  }

  return (
    <div>
      {
        courses.map(course => (
          <div key={course.id}>
            <input
              type='checkbox'
              checked={checked.includes(course.id)}
              onChange={() => checkHandler(course.id)}
            />
            {course.name}
          </div>
        ))
      }
      < button onClick={submitHandler}>Register</button>
    </div >
  )
}

export default App;
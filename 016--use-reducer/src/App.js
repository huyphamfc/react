import { useReducer, useRef } from 'react';


const initialState = {
    task: '',
    tasks: []
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'input': return {
            task: action.content,
            tasks: state.tasks
        }
        case 'add': return {
            task: state.task,
            tasks: [...state.tasks, action.content]
        }
        case 'remove':
            state.tasks.splice(action.index, 1);
            return {
                task: state.task,
                tasks: [...state.tasks]
            }
        default: throw new Error('Invalid Action');
    }
}

function App() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const ref = useRef();

    const inputHandler = e => {
        dispatch({
            type: 'input',
            content: e.target.value
        });
    }

    const addHandler = e => {
        e.preventDefault();
        if (!state.task) return;
        dispatch({
            type: 'add',
            content: state.task
        });
        dispatch({ type: 'input', content: '' });
        ref.current.focus();
    }

    const removeHandler = index => {
        dispatch({ type: 'remove', index });
    }

    return (
        <div>
            <h1>Todo Management</h1>
            <form>
                <input
                    ref={ref}
                    value={state.task}
                    onChange={e => inputHandler(e)}
                />
                <button onClick={e => addHandler(e)}>Add</button>
            </form>
            <ul>
                {
                    state.tasks.map((item, index) =>
                        <li
                            key={index}
                            onClick={() => removeHandler(index)}
                        >
                            {item}
                        </li>)
                }
            </ul>
        </div >
    );
}

export default App;
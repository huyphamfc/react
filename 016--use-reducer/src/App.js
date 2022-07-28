import { useState, useReducer, useRef } from 'react';


const initialData = [];

const reducer = (data, { action, item, index }) => {
    switch (action) {
        case 'add': return [...data, item];
        case 'remove':
            data.splice(index, 1);
            return [...data];
        default: throw new Error('Invalid action');
    }
}

function App() {
    const [data, dispatch] = useReducer(reducer, initialData);

    const [content, setContent] = useState('');

    const ref = useRef();

    return (
        <div>
            <h1>Todo Management</h1>
            <form>
                <input
                    ref={ref}
                    value={content}
                    onChange={e => setContent(e.target.value)}
                />
                <button
                    onClick={e => {
                        e.preventDefault();
                        if (content) {
                            dispatch({ action: 'add', item: content });
                            setContent('');
                            ref.current.focus();
                        }
                    }}
                >
                    Add
                </button>
            </form>
            <ul>
                {
                    data.map((item, index) =>
                        <li
                            key={index}
                            onClick={() =>
                                dispatch({ action: 'remove', index: index })
                            }
                        >
                            {item}
                        </li>
                    )
                }
            </ul>
        </div>
    );
}

export default App;
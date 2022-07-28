/*
- useReducer is similar to the useState
- use for complex logic
*/


import { useReducer } from 'react';


const initialState = 0;

const reducer = (state, action) => {
    switch (action) {
        case 'up': return state + 1;
        case 'down': return state - 1;
        default: throw new Error('Invalid action');
    }
}

function App() {
    const [count, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <h1>{count}</h1>
            <button
                onClick={() => dispatch('down')}>
                Down
            </button>
            <button
                onClick={() => dispatch('up')}
            >
                Up
            </button>
        </div>
    );
}

export default App;
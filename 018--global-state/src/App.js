import { useStore, actions } from "./store";


export default function App() {
    const [state, dispatch] = useStore();

    const addHandler = () => {
        dispatch(actions.addTodo(state.todoInput));
    }

    return (
        <div>
            <h1>Todo List</h1>
            <input
                value={state.todoInput}
                placeholder='Enter todo ...'
                onChange={e => {
                    dispatch(actions.setTodoInput(e.target.value));
                }}
            />
            <button onClick={addHandler}>Add</button>
            <ul>
                {
                    state.todo.map((todo, index) => <li key={index}>{todo}</li>)
                }
            </ul>
        </div>
    );
}
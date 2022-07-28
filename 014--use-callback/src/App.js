/*
ParentComponent passes a callback function to ChildComponent via props
- whenever ParentComponent re-render, ChildComponent automatically re-render because the props have changed (every render, ParentComponent creates a new execution context --> create a reference to the callback function)
- useCallback memorize the reference to the callback function, only change if one of dependencies has changed => prevent ChildComponent from re-render unnecessarily
- useCallback works with React.memo
*/


import { useState, useCallback } from "react";
import Content from "./Content";


function App() {
    const [count, setCount] = useState(0);

    const clickHandler = useCallback(() => {
        setCount(prevCount => prevCount + 1);
    }, []);

    console.log('Render App Component');

    return (
        <div>
            <Content onIncrease={clickHandler} />
            <h2>{count}</h2>
        </div>
    );
}

export default App;
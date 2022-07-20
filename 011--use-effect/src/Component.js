/*
Case 1: the callback is called 
            + after the component was mounted
              (the component added elements to DOM)
            + whenever the component was re-render
*/

import {
    useState,
    useEffect
} from "react";

function Component() {
    const [title, setTitle] = useState('');

    useEffect(
        () => {
            console.log('Re-render');
            document.title = title;
        }
    )

    return (
        <div>
            <h1>Hello, World!</h1>
            <input
                value={title}
                onChange={e => setTitle(e.target.value)}
            />
            {console.log('Render')}
        </div>
    );
}

export default Component;
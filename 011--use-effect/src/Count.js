/*
    The cleanup is called before the callback was called
*/

import { useState, useLayoutEffect } from "react";

function Count() {
    const [count, setCount] = useState(1);

    useLayoutEffect(
        () => {
            if (count > 3) setCount(0);
        },
        [count]
    );

    return (
        <div>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>
                Click me!
            </button>
        </div>
    );
}

export default Count;
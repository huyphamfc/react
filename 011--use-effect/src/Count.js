/*
    The cleanup is called before the callback was called
*/

import { useState, useEffect } from "react";

function Count() {
    const [count, setCount] = useState(1);

    useEffect(
        () => {
            console.log(`Mount/Render ${count} time(s)`);

            return () => console.log(`Cleanup ${count} time(s)`);
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
import { useState, useEffect } from 'react';


function BackwardCounter() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const timer = setInterval(() =>
            setCount(prevCount => prevCount - 1),
            1000);
        return () => clearInterval(timer);
    }, []);

    return <p>{count}</p>
}

export default BackwardCounter;
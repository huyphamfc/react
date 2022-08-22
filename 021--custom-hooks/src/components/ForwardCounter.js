import { useState, useEffect } from 'react';


function ForwardCounter() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const timer = setInterval(() =>
            setCount(prevCount => prevCount + 1),
            1000);
        return () => clearInterval(timer);
    }, []);

    return <p>{count}</p>
}

export default ForwardCounter;
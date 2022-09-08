import { useState, useEffect } from 'react';


function useCounter(updateCount) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const timer = setInterval(
            () => setCount(
                prevCount => updateCount(prevCount)
            ),
            1000
        );
        return () => clearInterval(timer);
    }, [updateCount]);

    return count;
}

export default useCounter;
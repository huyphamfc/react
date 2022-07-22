import { useState, useEffect } from "react";

function Countdown() {
    const [remainingTime, setRemainingTime] = useState(10);

    useEffect(
        () => {
            const counter = setInterval(
                () => {
                    setRemainingTime(remainingTime => {
                        if (remainingTime === 0) {
                            clearInterval(counter);
                            setRemainingTime(0);
                        }
                        return --remainingTime;
                    });
                    console.log('Counting ...');
                },
                1000
            );
            return () => clearInterval(counter);
        },
        []
    );

    return (
        <h1>{remainingTime}</h1>
    );
}

export default Countdown;
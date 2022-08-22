import useCounter from '../hook/use-counter';


function BackwardCounter() {
    const count = useCounter(
        prevCount => prevCount - 1
    );

    return <p>{count}</p>
}

export default BackwardCounter;
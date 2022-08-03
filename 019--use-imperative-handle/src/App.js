import { useRef } from 'react';
import Video from './Video';

function App() {
    const videoRef = useRef();

    const playHandler = () => {
        videoRef.current.play();
    }

    const pauseHandler = () => {
        videoRef.current.pause();
    }

    return (
        <div>
            <Video ref={videoRef} />
            <button onClick={playHandler}>Play</button>
            <button onClick={pauseHandler}>Pause</button>
        </div>
    );
}

export default App;
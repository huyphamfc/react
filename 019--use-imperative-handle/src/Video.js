import { forwardRef, useImperativeHandle, useRef } from 'react';
import video from './videos/tiktok.mp4';


function Video(props, ref) {
    const videoRef = useRef();

    useImperativeHandle(ref, () => ({
        play() {
            videoRef.current.play();
        },
        pause() {
            videoRef.current.pause();
        }
    }));

    return (
        <video
            ref={videoRef}
            src={video}
            width={240}
        />
    );
}

export default forwardRef(Video);
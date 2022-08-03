import { forwardRef } from 'react';
import video from './videos/tiktok.mp4';


function Video(props, ref) {
    return (
        <video
            ref={ref}
            src={video}
            width={240}
        />
    );
}

export default forwardRef(Video);
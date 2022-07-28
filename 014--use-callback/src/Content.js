import React, { memo } from 'react';


function Content({ onIncrease }) {
    console.log('Render Content Component');

    return (
        <React.Fragment>
            <h1>Hello, React!</h1>
            <button onClick={onIncrease}>Click Me!</button>
        </React.Fragment>
    );
}

export default memo(Content);
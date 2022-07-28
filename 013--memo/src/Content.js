/*
React.memo
- higher order component (HOC)
- only re-render the component if its props have changed
=> optimize performance

*/


import { memo } from 'react';

function Content() {
    console.log('Render: Content');

    return (
        <div>This is content</div>
    )
}

export default memo(Content);
import React from 'react';

function Comment({
    userName = 'Not Found',
    content = 'Not Found'
}) {
    return (
        <React.Fragment>
            <h2>{userName}</h2>
            <p>{content}</p>
        </React.Fragment>
    )
}

export default Comment;
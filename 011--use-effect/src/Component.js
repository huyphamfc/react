/*
Case 1: the callback is called 
            + after the component was mounted
              (the component added elements to DOM)
            + whenever the component was re-render

Case 2: the callback is called only once after the component was mounted
*/

import {
    useState,
    useEffect
} from "react";

function Component() {
    const [title, setTitle] = useState('');
    const [posts, setPosts] = useState([]);

    useEffect(
        () => {
            fetch(`https://jsonplaceholder.typicode.com/posts`)
                .then(res => res.json())
                .then(data => setPosts(data));
        },
        []
    );

    return (
        <div>
            <h1>Hello, World!</h1>
            <input
                value={title}
                onChange={e => setTitle(e.target.value)}
            />
            <ul>
                {
                    posts.map(post =>
                        <li key={post.id}>
                            {post.title}
                        </li>
                    )
                }
            </ul>
        </div>
    );
}

export default Component;
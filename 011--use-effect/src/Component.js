/*
Case 1: the callback is called 
            + after the component was mounted
              (the component added elements to DOM)
            + whenever the component was re-render

Case 2: the callback is called only once after the component was mounted

Case 3: the callback will be called when the dependencies changed
*/

import {
    useState,
    useEffect
} from "react";

const tabs = ['posts', 'comments', 'albums'];

function Component() {
    const [title, setTitle] = useState('');
    const [posts, setPosts] = useState([]);
    const [tab, setTab] = useState('posts');

    useEffect(
        () => {
            fetch(`https://jsonplaceholder.typicode.com/${tab}`)
                .then(res => res.json())
                .then(data => setPosts(data));
        },
        [tab]
    );

    return (
        <div>
            <h1>Hello, World!</h1>
            <input
                value={title}
                onChange={e => setTitle(e.target.value)}
            />
            <div>
                {
                    tabs.map(
                        item => (
                            <button
                                key={item}
                                style={
                                    item === tab ?
                                        {
                                            color: '#fff',
                                            background: '#333'
                                        } :
                                        {}
                                }
                                onClick={() => setTab(item)}
                            >
                                {item}
                            </button>
                        )
                    )
                }
            </div>
            <ul>
                {
                    posts.map(post =>
                        <li key={post.id}>
                            {post.title || post.name}
                        </li>
                    )
                }
            </ul>
        </div>
    );
}

export default Component;
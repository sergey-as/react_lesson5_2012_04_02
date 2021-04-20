import React, {useState, useEffect} from 'react';

function Posts() {
    console.log();
    const [posts, setPosts] = useState([]);

    const fetchData = async () => {
        const resp = await fetch('https://jsonplaceholder.typicode.com/posts');
        const json = await resp.json();

        setPosts(json);
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div>
            <ul>
                {posts.map(el => <li>{el.tittle} - {el.id}</li>)}
            </ul>
        </div>
    );
}

export default Posts;
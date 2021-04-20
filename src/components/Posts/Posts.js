import React, {useEffect, useState} from "react";

function Posts(props) {
    console.log(props);
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
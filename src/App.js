import React, {useEffect, useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useParams, useRouteMatch, useLocation, useHistory
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/posts">Posts</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/" component={Home} exact/>

          {/*<Route path="/posts" exact>*/}
          <Route path="/posts">
            <Posts/>
          </Route>

          {/*<Route path="/posts/:id">*/}
          {/*  <PostsDetails/>*/}
          {/*</Route>*/}

          <Route>
            <h1>PAGE NOT FOUND</h1>
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

function Home(props) {
  // console.log(props);
  return <h2>Home</h2>;
}

function Posts(props) {
  // console.log(props);
  const [posts, setPosts] = useState([]);

  const fetchData = async () => {
    const resp = await fetch('https://jsonplaceholder.typicode.com/posts');
    const json = await resp.json();

    setPosts(json)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (<div>
    <Switch>
      <Route path="/posts/:id" exact>
        <PostsDetails />
      </Route>

      <Route>
        <Redirect to="/posts"/>
      </Route>
    </Switch>

    <ul>
      {posts.map(el => <Link to={`/posts/${el.id}`}><li>{el.title} - {el.id}</li></Link>)}
    </ul>
  </div>);
}

function PostsDetails(props) {
  // console.log(props);
  const [post, setPost] = useState();
  // console.log(props);

  // const params = useParams();
  const {id} = useParams();
  const match = useRouteMatch();
  const location = useLocation();
  const history = useHistory();
  // console.log({match, params, location});


  const fetchData = async () => {
    const resp = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const json = await resp.json();

    setPost(json)
  }

  useEffect(() => {
    fetchData()
  }, [id])

  return (<div>
    <h1>post details</h1>
    {post && (<> <h3>{post.id} - {post.title}</h3> <p>{post.body}</p> </>)}

    <button onClick={() => history.push(`/posts/${+id + 1}`)}>go to next post</button>
  </div>);
}


// export default function App()
// {
//     return (
//         <Router>
//             <div>
//                 <nav>
//                     <ul>
//                         <li>
//                             <Link to="/">Home</Link>
//                         </li>
//                         <li>
//                             <Link to="/about">About</Link>
//                         </li>
//                         <li>
//                             <Link to="/users">Users</Link>
//                         </li>
//                         <li>
//                             <Link to="/test-route">test-route</Link>
//                         </li>
//                     </ul>
//                 </nav>
//
//                 {/* A <Switch> looks through its children <Route>s and
//             renders the first one that matches the current URL. */}
//                 <Switch>
//                     {/*<Route path="/" exact>*/}
//                     {/*  <Home />*/}
//                     {/*</Route>*/}
//                     <Route path="/" component={Home} exact/>
//
//                     {/*<Route path="/about">*/}
//                     {/*  <About />*/}
//                     {/*</Route>*/}
//                     <Route path="/about" component={About}/>
//
//                     {/*<Route path="/users">*/}
//                     {/*  <Users />*/}
//                     {/*</Route>*/}
//                     <Route path="/users" render={(args) => {
//                         console.log(args);
//                         return <Users/>
//                     }}/>
//
//                     {/*<Route path="/test-route">*/}
//                     {/*  <Testroute />*/}
//                     {/*</Route>*/}
//                     <Route path="/test-route">
//                         {Testroute}
//                     </Route>
//
//                     {/*<Route path="/">*/}
//                     {/*  <Home />*/}
//                     {/*</Route>*/}
//
//                     <Route>
//                         <Redirect to="/about"/>
//                     </Route>
//
//                     {/*<Route>*/}
//                     {/*    <h1>PAGE NOT FOUND</h1>*/}
//                     {/*</Route>*/}
//
//                 </Switch>
//             </div>
//         </Router>
//     );
// }
//
// function Home(props) {
//   console.log(props);
//   return <h2>Home</h2>;
// }
//
// function About() {
//     return <h2>About</h2>;
// }
//
// function Users() {
//   return <h2>Users</h2>;
// }
//
// function Testroute(props) {
//   console.log(props);
//   return <h3>Test-route</h3>;
// }

//https://www.youtube.com/watch?v=oaAVZZypdRU&list=PLY1sAemBLA5xCCp5XcNlPkoyPks72Q7b0&index=57
// 53:10
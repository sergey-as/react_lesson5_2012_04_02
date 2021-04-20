import React from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
} from "react-router-dom";
import Posts from "./components/Posts/Posts";

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

                    <Route path="/posts">
                        {Posts}
                    </Route>

                    <Route>
                        <h1>PAGE NOT FOUND</h1>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

function Home(props) {
    console.log(props);
    return <h2>Home</h2>;
}


// export default function App() {
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
// 48:50
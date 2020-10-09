import React from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";
import Home from './pages/Home';
import Post from './pages/Post';



const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/post/:postId" component={Post} />
      </Switch>
    </div>
  );
}

export default App;

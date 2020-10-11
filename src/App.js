import React from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";
import Header from "./components/Header";
import Home from './pages/Home';
import Post from './pages/Post';
import Footer from "./components/Footer";



const App = () => {



  return (
    <div className="wrapper">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/post/:postId" component={Post} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;

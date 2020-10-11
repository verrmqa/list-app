import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home/index";
import Post from "./pages/Post/index";
import Footer from "./components/Footer";
import "./App.css";

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
};

export default App;

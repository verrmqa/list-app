import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(posts => this.setState({ posts: posts }))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {this.state.posts.map(posts => (
          <div key={posts.id}>
              <h1>{posts.title}</h1>
              <p>{posts.body}</p>
          </div>
          ))}
        </header>
      </div>
    );
  }

}


export default App;

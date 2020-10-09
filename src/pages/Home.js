import React, {Component} from 'react';
import logo from '../logo.svg';
import axios from 'axios';
import {
  Link,
} from "react-router-dom";
import '../App.css';



class Home extends Component {
  constructor() {
    super();
    this.state = {
      posts: []
    };
  }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => this.setState({ posts: response.data }))
    }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
            {this.state.posts.map(post => (
              <div key={post.id}>
                <Link to={`/post/${post.id}`}>
                    <h1>{post.title}</h1>
                    <p>{post.body}</p>
                </Link>
              </div>
            ))}
        </header>
      </div>
    );
  }

}
export default Home
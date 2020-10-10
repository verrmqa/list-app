import React, {Component} from 'react';
import logo from '../logo.svg';
import axios from 'axios';
import { Button, Intent, Spinner } from "@blueprintjs/core";


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
          <Spinner intent={Intent.PRIMARY} />
          <img src={logo} className="App-logo" alt="logo" />
            {this.state.posts.map(post => (
              <div key={post.id}>
                    <h1>{post.title}</h1>
                    <p>{post.body}</p>
                    <Button onClick={() => this.props.history.push(`/post/${post.id}`)} intent={ Intent.SUCCESS } >View Post</Button>
              </div>
            ))}
        </header>
      </div>
    );
  }

}
export default Home
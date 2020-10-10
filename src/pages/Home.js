import React, { useState, useEffect, Component} from 'react';
import logo from '../logo.svg';
import axios from 'axios';
import { Button, Intent, FormGroup, InputGroup } from "@blueprintjs/core";


/* class Home extends Component {
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

} */

const Home = (props) => {
    const [posts, setPosts] = useState([])
    const [post, setPost] = useState(null)
    const [searchQuery, setQuery] = useState('')

    useEffect(() => {
    async function getPost() {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        const posts = response.data
        setPosts(posts)
      } catch (error) {
        console.error(error);
      }
    }
    getPost()
    }, [post])

/*     useEffect(() => {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?id=${searchQuery}`)
        const responsePost = response.data
        setPost(responsePost)

    }, []) */



return (
  <div className="App">
    { post ? (
      <header className="App-header">
      {/* <FormGroup
        helperText="Helper text with details..."
        label="Label A"
        labelFor="text-input"
        labelInfo="(required)"
      >
        <InputGroup id="text-input" placeholder="Placeholder text" />
      </FormGroup>
        <img src={logo} className="App-logo" alt="logo" />
          {this.state.posts.map(post => (
            <div key={post.id}>
                  <h1>{post.title}</h1>
                  <p>{post.body}</p>
                  <Button onClick={() => this.props.history.push(`/post/${post.id}`)} intent={ Intent.SUCCESS } >View Post</Button>
            </div>
          ))} */}
                  <p>NO data</p>
      </header>
    ) : (
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <FormGroup
        helperText="Search post..."
        label="Search"
        labelFor="text-input"
      >
        <InputGroup id="text-input" placeholder="lorem ipsum" />
      </FormGroup>
          {posts.map(post => (
            <div key={post.id}>
                  <h1>{post.title}</h1>
                  <p>{post.body}</p>
                  <Button onClick={() => props.history.push(`/post/${post.id}`)} intent={ Intent.SUCCESS } >View Post</Button>
            </div>
          ))}
      </header>
    ) }
  </div>
)

          }

export default Home
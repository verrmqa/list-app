import React, { useState, useEffect, Component} from 'react';
import logo from '../logo.svg';
import axios from 'axios';
import { Button, Intent, FormGroup, InputGroup } from "@blueprintjs/core";

const Home = (props) => {

    const [posts, setPosts] = useState([])
  
    const [post, setPost] = useState(false)
    const [searchQuery, setQuery] = useState('')

    useEffect(() => {
    async function getPosts() {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        const posts = response.data
        setPosts(posts)
        console.log("post",post)
      } catch (error) {
        console.error(error);
      }
    }
    getPosts()
    }, [])


      useEffect(() => {
        const searchPosts = (searchQuery) => {
          const searchResult = posts.filter(post => post.title.includes(searchQuery)||post.body.includes(searchQuery))
          setPost(searchResult)
        }
        searchPosts(searchQuery)
      }, [searchQuery])

return (
  <div className="App">
  <header className="App-header">
  <img src={logo} className="App-logo" alt="logo" />
  <FormGroup
    helperText="Search post..."
    label="Search"
    labelFor="text-input"
  >
    <InputGroup 
    id="text-input" 
    placeholder="lorem ipsum"
    value={searchQuery}
    onChange={event => setQuery(event.target.value)}
    />
  </FormGroup>
      </header>
    { post==false ? (
      <div>
          {posts.map(post => (
            <div key={post.id}>
                  <h1>{post.title}</h1>
                  <p>{post.body}</p>
                  <Button onClick={() => props.history.push(`/post/${post.id}`)} intent={ Intent.SUCCESS } >View Post</Button>
                  </div>
          ))}
          </div>
    ) : (
      <div>
          {post.map(post => (
            <div key={post.id}>
                  <h1>{post.title}</h1>
                  <p>{post.body}</p>
                  <Button onClick={() => props.history.push(`/post/${post.id}`)} intent={ Intent.SUCCESS } >View Post</Button>
            </div>
          ))}
          </div>
    ) }
  </div>
)


          }

export default Home
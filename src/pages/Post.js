import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Intent, Spinner, Button } from "@blueprintjs/core";
import logo from '../logo.svg';
import '../App.css';

const Post = (props) => {

  const [responseState, setResponse] = useState(null)
  const [responseCondition, setCondition] = useState(false)
  
  useEffect(() => {
  async function getPost() {
    try {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?id=${props.match.params.postId}`);
      const responsePost = response.data
      setResponse(responsePost)
      setCondition(true)
    } catch (error) {
      console.error(error);
    }
  }

  getPost()
}, [responseCondition])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        { responseCondition ? (
          <div>
            <p>{responseState[0].title}</p>
            <span>{responseState[0].body}</span>
            <Button onClick={() => props.history.push('/')} intent={ Intent.DANGER } >Main page</Button>
          </div>
        ) : (
          <Spinner intent={Intent.PRIMARY} />
        ) }
      </header>
    </div>
  );
}
export default Post
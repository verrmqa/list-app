import React from 'react';
import logo from '../logo.svg';
import '../App.css';

const Post = (props) => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{props.match.params.postId}</p>
      </header>
    </div>
  );
}
export default Post
import React from 'react';
import { Button, Intent } from "@blueprintjs/core";
import { Link } from 'react-router-dom';

const Post = ({title, body, id}) => {
  return (
          <div>
                <h1>{title}</h1>
                <p>{body}</p>
                <Link to={`/post/${id}`}><Button intent={ Intent.SUCCESS } >View Post</Button></Link>
          </div>
  );
};

export default Post;
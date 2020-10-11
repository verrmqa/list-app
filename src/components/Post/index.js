import React from "react";
import { Button, Intent } from "@blueprintjs/core";
import { Link } from "react-router-dom";

const Post = ({ title, body, to, text }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{body}</p>
      <Link to={to}>
        <Button intent={Intent.SUCCESS}>{text}</Button>
      </Link>
    </div>
  );
};

export default Post;

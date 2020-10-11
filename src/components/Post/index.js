import React from "react";
import { Button, Card } from "@blueprintjs/core";
import { Link } from "react-router-dom";

const Post = ({ title, body, to, text }) => {
  return (
    <Card interactive={false} className="card" >
      <h1 className="title--post">{title}</h1>
      <p className="text--post">{body}</p>
      <Link className="link--post" to={to}>
        <Button className="button--post">{text}</Button>
      </Link>
    </Card>
  );
};

export default Post;

import React, { useState, useEffect } from "react";
import axios from "axios";
import Post from "../../components/Post";
import { Spinner, Intent } from "@blueprintjs/core";
import "./style.css";
import "./tablet.css";
import "./mobile.css";

const PostPage = (props) => {
  const [post, setPost] = useState(null);
  const [responseCondition, setCondition] = useState(false);

  const getPost = () => {
    axios
      .get(
        `https://jsonplaceholder.typicode.com/posts?id=${props.match.params.postId}`
      )
      .then((response) => {
        setPost(response.data);
        setCondition(true);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getPost();
  }, [responseCondition]);

  return (
    <main className="post">
      <div className="container">
      {responseCondition ? (
        <div className="post__box">
          <p>
            Post №{post[0].id} from user №{post[0].userId}
          </p>
          <Post
            title={post[0].title}
            body={post[0].body}
            to={`/`}
            text="Go back"
          />
        </div>
      ) : (
        <Spinner className="spinner" intent={Intent.PRIMARY} />
      )}
      </div>
    </main>
  );
};
export default PostPage;

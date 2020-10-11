import React, { useState, useEffect } from "react";
import axios from "axios";
import Post from "../../components/Post";
import { Spinner, Intent } from "@blueprintjs/core";
import "./style.css";
import "./tablet.css";
import "./mobile.css";

const PostPage = ({match}) => {
  const [post, setPost] = useState(null);
  const [responseCondition, setCondition] = useState(false);

  useEffect(() => {
    axios
      .get(
        `https://jsonplaceholder.typicode.com/posts?id=${match.params.postId}`
      )
      .then((response) => {
        setPost(response.data);
        setCondition(true);
      })
      .catch((error) => console.error(error));
      // eslint-disable-next-line react-hooks/exhaustive-deps
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

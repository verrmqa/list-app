import React, { useState, useEffect } from "react";
import axios from "axios";
import Post from "../components/Post";
import Header from "../components/Header";
import "../App.css";
import { Spinner, Intent } from "@blueprintjs/core";

const PostPage = (props) => {
  const [post, setPost] = useState(null);
  const [responseCondition, setCondition] = useState(false);

  async function getPost() {
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts?id=${props.match.params.postId}`
      );
      const responsePost = response.data;
      setPost(responsePost);
      setCondition(true);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getPost();
  }, [responseCondition]);

  /* const getPost = () => {
  axios
    .get(
      `https://jsonplaceholder.typicode.com/posts?id=${props.match.params.postId}`
    )
    .then((response) => console.log("response",response))
    .then((response) => setPost(response.data))
    .then(console.log("responseState", responseState))
    .then(setCondition(true))
    .catch((error) => console.error(error))
};

useEffect(() => {
  getPost();
}, [responseCondition]); */

  return (
    <div className="App">
    <Header />
      {responseCondition ? (
        <Post
          title={post[0].title}
          body={post[0].body}
          to={`/`}
          text="Go back"
        />
      ) : (
        <Spinner intent={Intent.PRIMARY} />
      )}
    </div>
  );
};
export default PostPage;

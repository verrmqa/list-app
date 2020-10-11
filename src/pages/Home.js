import React, { useState, useEffect } from "react";
import Post from "../components/Post";
import Header from "../components/Header";
import axios from "axios";
import { FormGroup, InputGroup, Spinner } from "@blueprintjs/core";

const Home = () => {
  const [posts, setPosts] = useState([]);

  const [searchQuery, setQuery] = useState("");

  const getPosts = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((posts) => setPosts(posts.data));
  };

  useEffect(() => {
    getPosts();
  }, []);

  const filteredPosts = posts.filter((post) => {
    return post.title.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <div className="App">
      <Header
        searchQuery={searchQuery}
        setQuery={setQuery}
      />
      {posts.length != 0 ? (
        <div>
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <Post
                title={post.title}
                body={post.body}
                id={post.id}
                key={post.id}
              />
            ))
          ) : (
            <span>No posts found</span>
          )}
        </div>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default Home;

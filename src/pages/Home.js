import React, { useState, useEffect } from "react";
import logo from "../logo.svg";
import Post from "../components/Post";
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
  console.log(filteredPosts);

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
            onChange={(event) => setQuery(event.target.value)}
          />
        </FormGroup>
      </header>

      {
        <div>
          {filteredPosts.map((post) => (
            <Post
              title={post.title}
              body={post.body}
              id={post.id}
              key={post.id}
            />
          ))}
        </div>
      }
    </div>
  );
};

export default Home;

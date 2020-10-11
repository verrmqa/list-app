import React, { useState, useEffect } from "react";
import Post from "../../components/Post";
import Search from "../../components/Search";
import axios from "axios";
import { Spinner, Intent } from "@blueprintjs/core";
import "./style.css";
import "./tablet.css";
import "./mobile.css";

const Home = () => {
  const [posts, setPosts] = useState([]);

  const [searchQuery, setQuery] = useState("");

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((posts) => setPosts(posts.data));
  }, []);

  const filteredPosts = posts.filter((post) => {
    return post.title.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <main className="home">
      <div className="container">
        <Search searchQuery={searchQuery} setQuery={setQuery} />
        {posts.length !== 0 ? (
          <>
            {filteredPosts.length !== 0 ? (
              filteredPosts.map((post) => (
                <Post
                  title={post.title}
                  body={post.body}
                  to={`/${post.id}`}
                  key={post.id}
                  text="See post"
                />
              ))
            ) : (
              <span>No posts found</span>
            )}
          </>
        ) : (
          <Spinner className="spinner" intent={Intent.PRIMARY} />
        )}
      </div>
    </main>
  );
};

export default Home;

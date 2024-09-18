import React, { useState, useEffect } from "react";
import axios from "axios";
import BlogList from "./components/BlogList";
import SearchBar from "./components/SearchBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BlogPost from "./components/BlogPost";
import "./styles.css";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => setPosts(response.data))
      .catch((error) => console.error("Error fetching posts:", error));
  }, []);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleDelete = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  const handleUpdate = (id, updatedPost) => {
    const updatedPosts = posts.map((post) =>
      post.id === id ? { ...post, ...updatedPost } : post
    );
    setPosts(updatedPosts);
  };

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Router>
      <div className="App">
        <SearchBar onSearch={handleSearch} />
        <Routes>
          <Route
            path="/"
            element={
              <BlogList
                posts={filteredPosts}
                onDelete={handleDelete}
                onUpdate={handleUpdate}
              />
            }
          />
          <Route
            path="/post/:id"
            element={<BlogPost posts={posts} onUpdate={handleUpdate} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

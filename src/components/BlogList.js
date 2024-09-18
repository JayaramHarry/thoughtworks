import React from "react";
import BlogItem from "./BlogItem";

const BlogList = ({ posts, onDelete, onUpdate }) => {
  return (
    <div className="blog-list">
      {posts.map((post) => (
        <BlogItem
          key={post.id}
          post={post}
          onDelete={onDelete}
          onUpdate={onUpdate}
        />
      ))}
    </div>
  );
};

export default BlogList;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import EditPost from "./EditPost";

const BlogItem = ({ post, onDelete, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div
      className="blog-item"
      style={{ margin: "20px", padding: "20px", border: "1px solid #ccc" }}
    >
      <h2>{post.title}</h2>
      <p>{post.body.slice(0, 100)}...</p>
      <Link to={`/post/${post.id}`}>
        <p>Read More</p>
      </Link>
      <button onClick={toggleEdit} style={{ marginLeft: "10px" }}>
        Edit
      </button>
      <button onClick={() => onDelete(post.id)} style={{ marginLeft: "10px" }}>
        Delete
      </button>

      {isEditing && (
        <EditPost post={post} onUpdate={onUpdate} toggleEdit={toggleEdit} />
      )}
    </div>
  );
};

export default BlogItem;

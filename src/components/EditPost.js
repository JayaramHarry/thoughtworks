import React, { useState } from "react";

const EditPost = ({ post, onUpdate, toggleEdit }) => {
  const [title, setTitle] = useState(post.title);
  const [body, setBody] = useState(post.body);

  const handleSave = () => {
    onUpdate(post.id, { title, body });
    toggleEdit(); // Close the edit form after saving
  };

  return (
    <div
      style={{ marginTop: "10px", padding: "10px", border: "1px solid #ccc" }}
    >
      <h3>Edit Post</h3>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{
          display: "block",
          marginBottom: "10px",
          width: "100%",
          padding: "5px",
        }}
      />
      <textarea
        value={body}
        onChange={(e) => setBody(e.target.value)}
        style={{
          display: "block",
          marginBottom: "10px",
          width: "100%",
          padding: "5px",
        }}
      />
      <button onClick={handleSave}>Save Changes</button>
    </div>
  );
};

export default EditPost;

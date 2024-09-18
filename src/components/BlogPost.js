import React from "react";
import { useParams, Link } from "react-router-dom";

const BlogPost = ({ posts }) => {
  const { id } = useParams();
  const post = posts.find((p) => p.id === Number(id));

  if (!post) {
    return <div>Post not found!</div>;
  }

  return (
    <div
      className="post-details"
      style={{ margin: "20px", padding: "20px", border: "1px solid #ccc" }}
    >
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <p>
        <strong>User ID:</strong> {post.userId}
      </p>
      <Link to="/">
        <button>Back to Home</button>
      </Link>
    </div>
  );
};

export default BlogPost;

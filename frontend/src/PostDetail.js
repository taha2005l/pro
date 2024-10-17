import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function PostDetail() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/posts/${id}`)
      .then(response => response.json())
      .then(data => setPost(data));

    fetch(`http://localhost:5000/posts/${id}/comments`)
      .then(response => response.json())
      .then(data => setComments(data));
  }, [id]);

  if (!post) return <p>Loading...</p>;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <h2>Comments</h2>
      <ul>
        {comments.map(comment => (
          <li key={comment.id}>{comment.content}</li>
        ))}
      </ul>
    </div>
  );
}

export default PostDetail;

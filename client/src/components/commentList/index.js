import React from "react";

export default function CommentList({ comments = [] }) {
  if (!comments.length) {
    return <p>No comments yet.</p>;
  }

  return (
    <div>
      <h3 className='commentList'>Comments</h3>
      <div>
        {comments.map((comment) => (
          <div key={comment._id}>
            <p>{comment.content}</p>
            <p>Posted By: {comment.user.username}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

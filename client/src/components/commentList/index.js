import React, { useState, useEffect } from "react";
import '../../styles/commentList.css';
import { useQuery, useLazyQuery } from '@apollo/client';
import { GET_USER_BY_ID } from "../../utils/queries";

export default function CommentList({ comments = [] }) {

  if (!comments.length) {
    return <p>No comments yet.</p>;
  }

  return (
    <div>
      <h3 className='commentList'>Comments</h3>
      <div>
        {comments.map((comment) => (
            
          <div className='singleComment' key={comment._id}>
            <p>{comment.content}</p>
            <p>Posted By: {comment.user.username}</p>
          </div>
        ))}
      </div>
    </div>
  );
  
}

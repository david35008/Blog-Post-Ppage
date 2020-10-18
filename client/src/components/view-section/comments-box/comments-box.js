import React from 'react';
import Comment from './Comment';

function CommentBox({ comments, setComments }) {

  return (
    <div className="CommentBox">
      {comments.map((comment, index) => <Comment key={comment.length + index} comment={comment} index={index} />)}
    </div>
  )
}

export default CommentBox;

import React from "react";
import Delete from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { eraseComment } from "../../actions/comment_actions";
import { reviseComment } from "../../actions/comment_actions";
import { Avatar } from "@mui/material";

const CommentItem = ({ comment, currentUserId }) => {
  // handleEdit = (commentId) => {
  //     () => reviseComment(commentId)
  // };

  const deleteComment =
    currentUserId === comment.commenterId ? (
      <Delete onClick={() => eraseComment(comment.id)} />
    ) : null;
  // const editButton = (currentUserId === comment.commenterId) ?
  //             <EditIcon onClick={

  //             }/> : null;

  return (
    <div className="comment">
      <div className="av-and-comment">
        <Avatar></Avatar>
        <div className="comment-column">
          <div className="commenter-and-date">
            <div className="commenter">{comment.user.username}</div>
            <div className="comment-date">
              {/* {comment.createdAt} */} 2 days ago
            </div>
          </div>
          <div className="comment-and-delete">
            <div className="comment-body">{comment.body}</div>
            <div className="delete-comment">{deleteComment}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentItem;

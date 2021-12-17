import React from "react";
import Delete from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import MoreVertIcon from "@mui/icons-material/MoreVert";
// import { eraseComment } from "../../actions/comment_actions";
import { reviseComment } from "../../actions/comment_actions";
import { Avatar } from "@mui/material";

const CommentItem = ({ comment, currentUserId, eraseComment }) => {
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

  function convertDate() {
    const rawDate = Date.now() - new Date(comment.createdAt);

    switch(true) {
      case (rawDate < 3600000): // less than an hour
        return `${Math.round((rawDate/(1000 * 60)))} minute(s) ago`;
      case (rawDate >= 3600000 && rawDate < 86400000): // less than a day
        return `${Math.floor(rawDate / (1000 * 60 * 60))} hour(s) ago`; 
      case (rawDate >= 86400000 && rawDate < 604800000): // less than a week
        return `${Math.floor(rawDate / (1000 * 60 * 60 * 24))} day(s) ago`;
      case (rawDate >= 604800000 && rawDate < 2419200000): // less than a month
        return `${Math.floor(rawDate / (1000 * 60 * 60 * 24 * 7))} weeks(s) ago`;
      case (rawDate >= 2419200000): // months
        return `${Math.floor(rawDate / (1000 * 60 * 60 * 24 * 7 * 4))} month(s) ago`;
    }
  }


  return (
    <div className="comment">
      <div className="av-and-comment">
        <Avatar>
          {/* {comment.user.username[0]} */}
        </Avatar>
        <div className="comment-column">
          <div className="commenter-and-date">
            <div className="commenter">{comment.user.username}</div>
            <div className="comment-date">
              {convertDate()} 
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

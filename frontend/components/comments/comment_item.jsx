import React, {useState, useEffect} from "react";
import Delete from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Avatar } from "@mui/material";
import CommentEditForm from "./comment_edit_form";
import ColorAvatar from '../avatar/color_avatar'

const CommentItem = ({ comment, currentUserId, eraseComment, reviseComment }) => {

  const [editMode, setEditMode] = useState(false)

  const deleteAndEdit =
    currentUserId === comment.commenterId ? (
      <div>
        <Delete onClick={() => eraseComment(comment.id)} />
        <EditIcon onClick={() => setEditMode(true)} />
      </div>
    ) : null;

  function convertDate() {
    const rawDate = Date.now() - new Date(comment.createdAt);

    switch(true) {
      case (rawDate < 3600000): // less than an hour
        if (
          `${Math.round(rawDate / (1000 * 60))} minute(s) ago` ===
          "0 minute(s) ago"
        )
          return "Just now";
       return `${Math.round((rawDate/(1000 * 60)))} minute(s) ago`;
      case (rawDate >= 3600000 && rawDate < 86400000): // less than a day
        return `${Math.floor(rawDate / (1000 * 60 * 60))} hour(s) ago`; 
      case (rawDate >= 86400000 && rawDate < 604800000): // less than a week
        return `${Math.floor(rawDate / (1000 * 60 * 60 * 24))} day(s) ago`;
      case (rawDate >= 604800000 && rawDate < 2419200000): // less than a month
        return `${Math.floor(rawDate / (1000 * 60 * 60 * 24 * 7))} week(s) ago`;
      case (rawDate >= 2419200000): // months
        return `${Math.floor(rawDate / (1000 * 60 * 60 * 24 * 7 * 4))} month(s) ago`;
    }
  }

  let commentItemOrEdit; 

  function toggleCommentItemOrEdit() {
    if (editMode === false) {
      commentItemOrEdit = (
        <div className="comment">
          <div className="av-and-comment">
            <ColorAvatar username={comment.user.username}/>
            <div className="comment-column">
              <div className="commenter-and-date">
                <div className="commenter">{comment.user.username}</div>
                <div className="comment-date">{convertDate()}</div>
              </div>
              <div className="comment-and-buttons">
                <div className="comment-body">{comment.body}</div>
                <div className="delete-edit">{deleteAndEdit}</div>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      commentItemOrEdit = (
        <CommentEditForm
          commentToEdit={comment}
          reviseComment={reviseComment}
          cancelEdit={() => setEditMode(false)}
          currentUserId={currentUserId}
          videoId={comment.videoId}
          username={comment.user.username}
        />
      );
    }
  }

  toggleCommentItemOrEdit();

  return (
    <div>
      {commentItemOrEdit}
    </div>
  );
};

export default CommentItem;

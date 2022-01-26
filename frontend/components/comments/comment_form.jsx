import React from "react";
import { Button, TextField } from "@mui/material";
import { Avatar } from "@mui/material";
import { useState, useEffect } from "react";

const CommentForm = ({ composeComment, videoId, currentUserId, history }) => {

  const [body, setBody] = useState("");
  const [commentButtons, setCommentButtons] = useState(false);

  useEffect(() => {
    setBody("")
    setCommentButtons(false)
  }, [videoId])

  function currentUserCheck() {
    if (!currentUserId) {
      history.push("/login");
    }
  }
  
  function handleSubmit(e) {
    e.preventDefault();

    composeComment(
      {
        body: body,
        commentButtons: commentButtons,
        video_id: videoId,
        commenter_id: currentUserId
      }
    )
      .then(() => {
        setBody("");
        setCommentButtons(false);
      });
  }
  
  function handleCancel(e) {    
    setBody("");
    setCommentButtons(false);
  }

  function showCommentButtons() {
    return commentButtons ? (
      <div className="comment-buttons">
        <Button
          sx={{
            color: "grey",
          }}
          onClick={handleCancel}
        >
          CANCEL
        </Button>

        {body === "" ? (
          <Button
            sx={{
              backgroundColor: "grey",
            }}
            variant="contained"
            disabled
          >
            COMMENT
          </Button>
        ) : (
          <Button
            sx={{
              backgroundColor: "grey",
            }}
            variant="contained"
            onClick={(e) => handleSubmit(e)}
          >
            COMMENT
          </Button>
        )}
      </div>
    ) : null;
  }


    return (
      <div onClick={() => currentUserCheck()}>
        <div className="add-comment">
          <Avatar className="comment-avatar" />
          <div className="comment-form-and-buttons">
            <form className="comment-form">
              <label>
                <input
                  type="text"
                  className="comment-input"
                  value={body}
                  placeholder={"Add a public comment..."}
                  onChange={(e) => setBody(e.target.value)}
                  onClick={() => setCommentButtons(true)}
                />
              </label>
              {showCommentButtons()}
            </form>
          </div>
        </div>
      </div>
    );

}

export default CommentForm;

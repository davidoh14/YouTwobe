import CommentItem from "./comment_item";
import CommentForm from "./comment_form";
import React, { useEffect } from "react";

const CommentIndex = ({ 
  fetchAllComments, 
  comments, 
  videoId, 
  composeComment, 
  reviseComment, 
  currentUserId, 
  eraseComment, 
  history }) => {

  useEffect(() => {
      fetchAllComments(videoId)
  }, [videoId])

  useEffect(() => {
      sortAndMapComments()
  })
  
  function sortAndMapComments() {
    let sortedComments = comments.sort(function (a, b) {
      return a.createdAt - b.createdAt;
    });

    sortedComments.map((comment) => (
      <li key={comment.id}>
        <CommentItem
          comment={comment}
          currentUserId={currentUserId}
          eraseComment={eraseComment}
          reviseComment={reviseComment}
        />
      </li>
    ));
  }

    if (comments) {
      if (comments.length === 0) {
        return (
          <div className="comments">
            <div className="comment-count">This video has no comments</div>
            <div>
              <CommentForm
                composeComment={composeComment}
                videoId={videoId}
                currentUserId={currentUserId}
                history={history}
              />
            </div>
          </div>
        );
      }

      return (
        <div className="comments">
          <div className="comment-count">{comments.length} Comments</div>
          <div>
            <CommentForm
              composeComment={composeComment}
              videoId={videoId}
              currentUserId={currentUserId}
              history={history}
            />
          </div>

          <ul>
            {comments
              .sort((a, b) => {
                if (a.createdAt < b.createdAt) {
                  return 1;
                }
                if (a.createdAt > b.createdAt) {
                  return -1;
                }
                return 0;
              })
              .map((comment) => (
                <li key={comment.id}>
                  <CommentItem
                    comment={comment}
                    currentUserId={currentUserId}
                    eraseComment={eraseComment}
                    reviseComment={reviseComment}
                  />
                </li>
              ))}
          </ul>
        </div>
      );
  }
}

export default CommentIndex;

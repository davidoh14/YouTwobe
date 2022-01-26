import CommentItem from "./comment_item";
import CommentForm from "./comment_form";
import React from "react";

const CommentIndexHooks = ({comments, videoId, composeComment, reviseComment, currentUserId, eraseComment}) => {

  componentDidMount() {
    this.props.fetchAllComments(this.props.videoId);
  }

  componentDidUpdate(prevProps) {
    if (this.props.videoId !== prevProps.videoId) {
      this.props.fetchAllComments(this.props.videoId);
    }
  }

  // Without this componentDidUpdate, the current comment index will appear on the index of subsequent
  // This is because the comment index of any subsequent-loaded videos will still be the same component that was previously loaded.
  // A new fetch request must be performed in order to re-render with the video's respective comments.

  function sortAndMapComments() {
    sortedComments = comments.sort(function (a, b) {
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

    const {
      comments,
      videoId,
      composeComment,
      reviseComment,
      currentUserId,
      eraseComment,
    } = this.props;

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
                history={this.props.history}
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
              history={this.props.history}
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

export default CommentIndexHooks;

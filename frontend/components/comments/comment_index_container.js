import { connect } from "react-redux";
import CommentIndex from "./comment_index";
import { withRouter } from "react-router";
import {
  composeComment,
  reviseComment,
  fetchAllComments,
  eraseComment
} from "../../actions/comment_actions";

const mapStateToProps = (state, ownProps) => {
  return {
    comments: Object.values(state.entities.comments),
    videoId: ownProps.match.params.videoId,
    currentUserId: state.session.id,
    currentUser: state.entities.users[state.session.id]
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchAllComments: (videoId) => dispatch(fetchAllComments(videoId)),
  composeComment: (comment) => dispatch(composeComment(comment)),
  reviseComment: (comment) => dispatch(reviseComment(comment)),
  eraseComment: (commentId) => dispatch(eraseComment(commentId)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CommentIndex)
);

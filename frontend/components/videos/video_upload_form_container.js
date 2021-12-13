import VideoUploadForm from "./video_upload_form";
import { connect } from "react-redux";
import { createVideo } from "../../actions/video_actions";
import { clearVideoErrors } from "../../actions/video_actions";
import { withRouter } from "react-router-dom";

const mSTP = ({ entities, errors, session }) => {
  return {
    currentUser: entities.users[session.id],
    videos: entities.videos,
    errors: errors.videos,
  };
};

const mDTP = (dispatch) => {
  return {
    createVideo: (formData) => dispatch(createVideo(formData)),
    clearVideoErrors: () => dispatch(clearVideoErrors()),
  };
};

export default withRouter(connect(mSTP, mDTP)(VideoUploadForm));

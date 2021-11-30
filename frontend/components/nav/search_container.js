import { connect } from "react-redux";
import Search from "./search";
import { fetchVideos } from "../../actions/video_actions";

const mSTP = ({ entities, session}) => ({
  currentUser: entities.users[session.id],
});

const mDTP = (dispatch) => ({
    fetchVideos: () => dispatch(fetchVideos())
});

export default connect(mSTP, mDTP)(Search);
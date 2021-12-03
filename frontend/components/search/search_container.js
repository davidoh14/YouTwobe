import { connect } from "react-redux";
import { Search } from "./search";
import { withRouter } from "react-router";
import { fetchVideos } from "../../actions/video_actions";

const mSTP = ({ entities, session }, ownProps) => ({
  videos: Object.values(entities.videos),
  currentUser: entities.users[session.id],
});

const mDTP = (dispatch) => ({
    fetchVideos: () => dispatch(fetchVideos())
});

export default withRouter(connect(mSTP, mDTP)(Search));
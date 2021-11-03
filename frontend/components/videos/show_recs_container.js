import { connect } from "react-redux";
import ShowRecs from "./show_recs";
import { fetchVideos } from "../../actions/video_actions";

const mSTP = (state) => {
  return {
    videos: Object.values(state.entities.videos),
  };
};

const mDTP = (dispatch) => {
  return {
    fetchVideos: () => dispatch(fetchVideos()),
  };
};

export default connect(mSTP, mDTP)(ShowRecs);

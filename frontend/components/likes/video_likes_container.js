import { connect } from "react-redux";
import VideoLikes from "./video_likes"
import { createLike, updateLike, deleteLike } from "../../util/like_api_util";

const mSTP = (state) => {
    return {
        likes: Object.values(state.entities.likes)
    };
};

const mDTP = (dispatch) => {
    return {
        createLike: () => dispatch(createLike()),
        updateLike: () => dispatch(updateLike()),
        deleteLike: () => dispatch(deleteLike())
    };
};

export default connect(mSTP, mDTP)(VideoLikes);
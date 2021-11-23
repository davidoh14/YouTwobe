import { connect } from "react-redux";
import VideoLikes from "./video_likes"
import { fetchLikes, createLike, updateLike, deleteLike } from "../../actions/like_actions";

const mSTP = (state) => {
    return {
        likes: Object.values(state.entities.likes),
        currentUserId: state.session.id
    };
};

const mDTP = (dispatch) => {
    return {
        fetchLikes: () => dispatch(fetchLikes()),
        createLike: () => dispatch(createLike()),
        updateLike: () => dispatch(updateLike()),
        deleteLike: () => dispatch(deleteLike())
    };
};

export default connect(mSTP, mDTP)(VideoLikes);
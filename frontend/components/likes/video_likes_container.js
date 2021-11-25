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
        createLike: (like) => dispatch(createLike(like)),
        updateLike: (like) => dispatch(updateLike(like)),
        deleteLike: (likeId) => dispatch(deleteLike(likeId))
    };
};

export default connect(mSTP, mDTP)(VideoLikes);
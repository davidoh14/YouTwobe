import { connect } from "react-redux";
import CommentEditForm from "./comment_edit_form";

const mSTP = (state) => {
    return {
        errors: state.errors.comments
    }
};

const mDTP = (dispatch) => {
    return {
        
    }
}; 

export default connect(mSTP, mDTP)(CommentEditForm);
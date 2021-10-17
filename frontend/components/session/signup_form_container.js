import { connect } from "react-redux";
import SignUpForm from "./signup_form";
import { signup, clearSessionErrors } from "../../actions/session_actions";
import { withRouter } from "react-router";

const mapStateToProps = (state) => ({
  errors: state.errors.session,
});

const mapDispatchToProps = (dispatch) => ({
  signup: (formUser) => dispatch(signup(formUser)),
  clearSessionErrors: () => dispatch(clearSessionErrors()),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(SignUpForm)
);

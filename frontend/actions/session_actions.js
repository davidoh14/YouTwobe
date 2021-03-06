import { postUser, deleteSession, postSession } from "../util/session_api_util";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const CLEAR_SESSION_ERRORS = "CLEAR_SESSION_ERRORS";

const receiveUser = (user) => {
  return {
    type: RECEIVE_CURRENT_USER,
    user,
  };
};

const logoutUser = () => {
  return {
    type: LOGOUT_CURRENT_USER,
  };
};

const receiveErrors = (errors) => {
  return {
    type: RECEIVE_ERRORS,
    errors,
  };
};

export const clearSessionErrors = () => {
  return {
    type: CLEAR_SESSION_ERRORS,
  };
};

export const signup = (formUser) => (dispatch) =>
  postUser(formUser).then(
    (user) => dispatch(receiveUser(user)),
    (errors) => dispatch(receiveErrors(errors.responseJSON))
  );

export const login = (formUser) => (dispatch) => {
  return postSession(formUser).then(
    (user) => dispatch(receiveUser(user)),
    (errors) => { 
      return dispatch(receiveErrors(errors.responseJSON)) }
  )
}

export const logout = () => (dispatch) =>
  deleteSession().then(
    () => dispatch(logoutUser()),
    (errors) => dispatch(receiveErrors(errors.responseJSON))
  );

import { createLike, updateLike, deleteLike } from "../util/like_api_util";

export const RECEIVE_LIKE = "RECEIVE_LIKE";

const receiveLike = (like) => {
    return {
        type: RECEIVE_LIKE,
        like
    }
}

export const createLike = (like) => (dispatch) => {
    return createLike(like).then((like) => 
        dispatch(receiveLike(like)))
}

export const updateLike = (like) => (dispatch) => {
    return updateLike(like).then((like) => 
        dispatch(receiveLike(like)))
}

export const deleteLike = (like) => (dispatch) => {
    return deleteLike(like).then((like) => 
        dispatch(receiveLike(like)))
}
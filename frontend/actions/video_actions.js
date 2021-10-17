import {
  getVideos,
  getVideo,
  postVideo,
  patchVideo,
  deleteVideo,
} from "../util/video_api_util";

export const RECEIVE_ALL_VIDEOS = "RECEIVE_ALL_VIDEOS";
export const RECEIVE_VIDEO = "RECEIVE_VIDEO";
export const REMOVE_VIDEO = "REMOVE_VIDEO";
export const RECEIVE_VIDEO_ERRORS = "RECEIVE_VIDEO_ERRORS";
export const CLEAR_VIDEO_ERRORS = "CLEAR_VIDEO_ERRORS";

const receiveAllVideos = (videos) => {
  return {
    type: RECEIVE_ALL_VIDEOS,
    videos,
  };
};

const receiveVideo = (video) => {
  return {
    type: RECEIVE_VIDEO,
    video,
  };
};

const removeVideo = (videoId) => {
  return {
    type: REMOVE_VIDEO,
    videoId,
  };
};

const receiveVideoErrors = (errors) => {
  return {
    type: RECEIVE_VIDEO_ERRORS,
    errors,
  };
};

export const clearVideoErrors = () => {
  return {
    type: CLEAR_VIDEO_ERRORS,
  };
};

export const fetchVideos = () => (dispatch) => {
  return getVideos().then(
    (videos) => dispatch(receiveAllVideos(videos))
    // (errors) => dispatch(receiveVideoErrors(errors.responseJSON))
  );
};

export const fetchVideo = (videoId) => (dispatch) => {
  return getVideo(videoId).then(
    (video) => dispatch(receiveVideo(video)),
    (errors) => dispatch(receiveVideoErrors(errors.responseJSON))
  );
};

export const createVideo = (formData) => (dispatch) => {
  return postVideo(formData).then(
    (video) => dispatch(receiveVideo(video)),
    (errors) => dispatch(receiveVideoErrors(errors.responseJSON))
  );
};

export const detachVideo = (videoId) => (dispatch) => {
  return deleteVideo(videoId).then(
    () => dispatch(removeVideo(videoId)),
    (errors) => dispatch(receiveVideoErrors(errors.responseJSON))
  );
};

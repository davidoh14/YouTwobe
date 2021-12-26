export const getAllComments = (videoId) => {
  return $.ajax({
    url: `/api/videos/${videoId}/comments`,
    method: "GET",
  });
};

export const postComment = (comment) => {
  return $.ajax({
    url: `/api/videos/${comment.videoId}/comments/`,
    method: "POST",
    data: { comment },
  });
};

export const patchComment = (comment) => {
  return $.ajax({
    url: `/api/videos/${comment.video_id}/comments/${comment.id}`,
    method: "PATCH",
    data: { comment },
  });
};

export const deleteComment = (commentId) => {
  return $.ajax({
    url: `/api/videos/:videoId/comments/${commentId}`,
    method: "DELETE",
  });
};

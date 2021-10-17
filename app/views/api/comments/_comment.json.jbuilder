json.extract! comment, :id, :body, :commenter_id, :video_id

json.user comment.commenter, :username #, :avatar



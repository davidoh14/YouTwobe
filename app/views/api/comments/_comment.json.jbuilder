json.extract! comment, :id, :body, :commenter_id, :video_id, :created_at, :updated_at

json.user comment.commenter, :username #, :avatar

like = comment.likes.select { |like| like.liker_id == @userId }
json.like like[0]
json.likesLength comment.likes.select { |like| like.kind == "like" }.length
json.dislikesLength comment.likes.select { |like| like.kind == "dislike" }.length
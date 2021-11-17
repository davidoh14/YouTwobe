json.extract! video, :id, :title, :description, :uploader_id, :created_at

json.username video.uploader.username

if video.thumbnail.attached?
    json.thumbnail url_for(video.thumbnail)
else
    json.thumbnail ""
end

if video.video.attached?
    json.video url_for(video.video)
else
    json.video ""
end

like = video.likes.select { |like| like.liker_id == @userId }
json.like like[0]
json.likesLength video.likes.select { |like| like.type == "like" }.length
json.dislikesLength video.likes.select { |like| like.type == "dislike" }.length
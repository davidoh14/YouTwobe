@likes.map do |like|
    json.set! like.id do
        json.extract! like, :id, :liker_id, :kind, :likable_type, :likable_id 
    end
end
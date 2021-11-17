class Like < ApplicationRecord

    validates :liker_id,
        uniqueness: { scope: [:likable_id, :likable_type]}

    validates :likable_type,
        inclusion: { in: %w(video comment), message: '%{value} cannot be liked or disliked. Must be a video or comment.'}

    validates :type,
        inclusion: { in: %w(like dislike), message: '%{value} is not a valid like type. Must be like or dislike.'}

    belongs_to :user,
        foreign_key: :liker_id,
        class_name: :User

    belongs_to :video, 
        foreign_key: :video_id,
        class_name: :Video

    belongs_to :likable,
        polymorphic: :true
        
end

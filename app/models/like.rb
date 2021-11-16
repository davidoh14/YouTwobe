class Like < ApplicationRecord

    validates :liker_id,
        uniqueness: { scope: :video_id}

    validates :type,
        inclusion: { in: %w(like dislike), message: '%{value} is not a valid like type. Must be like or dislike'}

    belongs_to :user,
        foreign_key: :liker_id,
        class_name: :User

    belongs_to :video, 
        foreign_key: :video_id,
        class_name: :Video

    belongs_to :likable,
        polymorphic: :true
        
end

class Like < ApplicationRecord

    validates :liker_id,
        uniqueness: { scope: [:likable_id, :likable_type]}

    validates :likable_type,
        inclusion: { in: %w(Video Comment), message: '%{value} cannot be liked or disliked. Must be a video or comment.'}

    validates :kind,
        inclusion: { in: %w(like dislike), message: '%{value} is not a valid like kind. Must be like or dislike.'}

    belongs_to :user,
        foreign_key: :liker_id,
        class_name: :User

    belongs_to :likable,
        polymorphic: :true
        
end

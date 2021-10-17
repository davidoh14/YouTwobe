class Comment < ApplicationRecord
    validates :body, presence: true, length: {maximum: 5000}
    validates :commenter_id, presence: true
    validates :video_id, presence: true

    attr_reader :created_at

    belongs_to :video,
        foreign_key: :video_id,
        class_name: :Video

    belongs_to :commenter,
        foreign_key: :commenter_id,
        class_name: :User
end

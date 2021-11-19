class Video < ApplicationRecord
    validates :title, presence: true, length: {maximum: 70}
    validates :description, length: {maximum: 5000}

    has_one_attached :video
    has_one_attached :thumbnail

    belongs_to :uploader,
        foreign_key: :uploader_id,
        class_name: :User

    has_many :comments,
        foreign_key: :video_id,
        class_name: :Comment

    has_many :likes,
        as: :likable,
        dependent: :destroy

end

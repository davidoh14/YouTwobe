class Api::LikesController < ApplicationController

    def create

    end

    def update

    end

    def delete

    end

    def like_params
        params.require(:like).permit(:liker_id, :type, :likable_id, :likable_type)
    end

end

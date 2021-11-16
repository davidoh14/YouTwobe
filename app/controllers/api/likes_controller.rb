class Api::LikesController < ApplicationController

    def create
        if like_params[:likable_type] === "video"
            likable = Video.find_by(id: like_params[:likable_id])
        else
            likable = Comment.find_by(id: like_params[:likable_id])
        end

        if likable.likes.create(like_params)
            @like = Like.find_by(liker_id: like_params[:liker_id],
            likable_id: like_params[:likable_id])
            render :show
        else
            render json: likable.errors.full_messages, status: unprocessable_entity
        end
    end

    def update
        @like = Like.find_by(id: params[:id])

        if @like.update(like_params)
            render :show
        else
            render json: @like.errors.full_messages, status: unprocessable_entity
        end
    end

    def delete
        @like = Like.find_by(id: params[:id])

        if @like.destroy
            render json: "deleted"
        else
            render json: @like.errors.full_messages, status: unprocessable_entity
        end
    end

    def like_params
        params.require(:like).permit(:liker_id, :type, :likable_id, :likable_type)
    end

end

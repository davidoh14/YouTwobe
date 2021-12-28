class Api::LikesController < ApplicationController

    def index
        @likes = Like.all
        render :index
    end

    def create
        @like = Like.new(like_params)

        if @like.save
            render :show
        else
            render json: @like.errors.full_messages, status: 404
        end
    end

    def update
        @like = Like.find_by(id: params[:id])

        if @like.update(like_params)
            render :show
        else
            render json: @like.errors.full_messages, status: 404
        end
    end

    def destroy
        @like = Like.find_by(id: params[:id])

        if @like.destroy
            render :show
        else
            render json: @like.errors.full_messages, status: 404
        end
    end

    def like_params
        params.require(:like).permit(:liker_id, :kind, :likable_id, :likable_type)
    end

end

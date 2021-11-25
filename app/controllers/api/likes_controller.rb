class Api::LikesController < ApplicationController

    def index
        @likes = Like.all
        render :index
    end

    def create
        # if like_params[:likable_type] == "video"
        #     likable = Video.find_by(id: like_params[:likable_id])
        # else
        #     likable = Comment.find_by(id: like_params[:likable_id])
        # end

        @like = Like.new(like_params)

        if @like.save
            render :show
        # if likable.likes.create(like_params)
        #     @like = Like.find_by(liker_id: like_params[:liker_id],
        #     likable_id: like_params[:likable_id])
        #     puts "----------------------"
        #     puts @like
        #     render :show
        else
            # render json: likable.errors.full_messages, status: unprocessable_entity
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
            # @like.destroy
            # render json: "deleted"
            render :show
        else
            render json: @like.errors.full_messages, status: 404
        end
    end

    def like_params
        params.require(:like).permit(:liker_id, :kind, :likable_id, :likable_type)
    end

end

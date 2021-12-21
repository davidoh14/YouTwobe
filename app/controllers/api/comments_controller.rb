class Api::CommentsController < ApplicationController

    def index
        video = Video.find_by(id: params[:video_id])
        @comments = video.comments
        render :index
    end

    def show
        @comment = Comment.find_by(id: params[:id])
        
        if @comment
            render :show
        else
            render json: ['Comment does not exist'], status:422
        end
    end

    def create
        @comment = Comment.new(comment_params)
        @comment.commenter_id = current_user.id

        if @comment.save
            render :show
        else
            render json: @comment.errors.full_messages, status: 422
        end
    end
    
    def update
        @comment = Comment.find_by(id: params[:id])
        
        
        if @comment
            @comment.update(comment_params)
            render :show
        else
            render json: @comment.errors.full_messages, status: 422
        end
    end

    def destroy
        @comment = Comment.find_by(id: params[:id])
        
        if @comment
            @comment.destroy
            render :show
        else
            render json: @comment.errors.full_messages, status: 422
        end
    end


    private
    def comment_params
        params.require(:comment).permit(:body, :video_id)
    end
end

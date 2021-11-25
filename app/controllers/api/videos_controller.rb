class Api::VideosController < ApplicationController
    def index
        @videos = Video.all
        render :index
    end

    def show
        @video = Video.find_by(id: params[:id])
        
        if @video.save
            render :show
         else 
            render json: @video.errors.full_messages, status: 422
         end
    end

    def create

        @video = Video.new(video_params)

        if @video.save 
          render :show
        else 
          render json: @video.errors.full_messages, status: 422
        end
    end

    def update

    end

    def destroy
          @video = Video.find_by(id: params[:id])

          if @video.destroy 
            render json: @video.id
          else
            render json: @video.errors.full_messages, status: 422
          end
    end

    private
    def video_params
        params.require(:video).permit(:title, :description, :uploader_id, :video, :thumbnail)
    end
end


# before_action: create, edit, edit, require_logged_in
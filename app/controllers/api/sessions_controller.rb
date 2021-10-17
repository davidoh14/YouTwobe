class Api::SessionsController < ApplicationController

    def create
        @user = User.find_by_credentials(
            # params[:user][:username],
            params[:user][:email],
            params[:user][:password]
        )

        if @user
            sign_in!(@user)
            render "api/users/show"
        else
            render json: ['Invalid email and/or password'], status: 401
        end
    end

    def destroy
        if current_user
            sign_out!
            render json: ['logged out']
        else
            render json: ['must be logged in to logout'], status: 404
        end
    end
end


class FavoritesController < ApplicationController

    def index 
        render json: Favorite.all
    end

   def create
        favorite = Favorite.create!(favorite)
        render json: favorite, status: :created
    end


    private 

    def favorite_params
        params.permit(:name, :photograph, :address, :user_id, :restaurant_id)
    end
end

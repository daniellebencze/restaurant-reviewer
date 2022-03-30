class FavoritesController < ApplicationController
rescue_from ActiveRecord::RecordInvalid, with: :render_invalid

    def index 
        render json: Favorite.all
    end

   def create
        favorite = Favorite.create!(favorite_params)
        render json: favorite, status: :created
    end

    private 

    def render_invalid(invalid)
        render json: {"errors": invalid.record.errors.full_messages}
    end
    
    def favorite_params
        params.permit(:restaurant_id)
    end
end

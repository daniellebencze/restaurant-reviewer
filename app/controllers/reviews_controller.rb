class ReviewsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found

    def index
        review = Review.all
        render json: review
    end
   
    def show
        review = Review.find(params[:id])
        render json: review
    end

    def destroy
        review = Review.find(params[:id]).destroy
        head :no_content
    end

    private

    def render_not_found
        render json: {"error": "Review not found"}, status: :not_found
    end


end

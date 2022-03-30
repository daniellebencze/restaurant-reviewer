class Favorite < ApplicationRecord
    has_many :restaurants
    belongs_to :restaurant
end

class RestaurantSerializer < ActiveModel::Serializer
  attributes :id, :photograph, :name, :address, :rating
end

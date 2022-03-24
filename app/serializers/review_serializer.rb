class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :comment
  has_one :restaurant
  has_one :user
end

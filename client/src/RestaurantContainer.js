import React, { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import RestaurantReviews from "./RestaurantReviews";

function RestaurantContainer() {
  const [restaurants, setRestaurants] = useState([]);

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("/restaurants")
      .then((r) => r.json())
      .then(setRestaurants);
  }, []);

  return (
    <div>
      <ul className="cards">
        {restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        ))}
      </ul>
      {/* Testing out review card */}
      <ul className="reviews">
        {reviews.map((review) => (
          <RestaurantReviews key={review.id} review={review} />
        ))}
      </ul>
      {/* end test */}
    </div>
  );
}

export default RestaurantContainer;

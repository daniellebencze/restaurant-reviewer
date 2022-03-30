import React, { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import RestaurantReviews from "./RestaurantReviews";

function RestaurantContainer() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    fetch("/restaurants")
      .then((r) => r.json())
      .then(setRestaurants);
  }, []);

  console.log(restaurants);

  return (
    <div>
      <ul className="cards">
        {restaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant.id}
            restaurant={restaurant}
            setRestaurants={setRestaurants}
            restaurants={restaurants}
          />
        ))}
      </ul>
        <RestaurantReviews />
      </div>
  );
}

export default RestaurantContainer;

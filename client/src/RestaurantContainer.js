import React, { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";

function RestaurantContainer({restaurants}) {
  // const [restaurants, setRestaurants] = useState([]);

  // useEffect(() => {
  //   fetch("/restaurants")
  //     .then((r) => r.json())
  //     .then(setRestaurants);
  // }, []);

  // console.log(restaurants);

  return (
    <div>
      <ul className="cards">
        {restaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant.id}
            restaurant={restaurant}
            restaurants={restaurants}
          />
        ))}
      </ul>
    </div>
  );
}

export default RestaurantContainer;

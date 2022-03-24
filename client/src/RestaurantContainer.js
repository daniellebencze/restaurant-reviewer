import React,{useState, useEffect} from "react";
import RestaurantCard from "./RestaurantCard";

function RestaurantContainer() {

  const [restaurants, setRestaurants] = useState([])  

  const [reviews, setReviews]  = useState([])  

    // useEffect(() => {
    //   fetch("")
    //     .then((response) => response.json())
    //     .then(setRestaurants)
    //     },[]
    // )

  return (
    <div>
       <ul className="cards">
        {restaurants.map(restaurant => 
          <RestaurantCard key ={restaurant.id} restaurant = {restaurant} /> 
        )}   
    </ul>
    </div>
  );
}

export default RestaurantContainer;


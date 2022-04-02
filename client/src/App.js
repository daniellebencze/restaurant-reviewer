import "./App.css";
import React, {useState, useEffect} from "react";
import { Routes, Route } from "react-router-dom";
import LoginScreen from "./LoginScreen";
import RestaurantContainer from "./RestaurantContainer";
import NavBar from "./NavBar";
import Homepage from "./Homepage";
import FavoritesContainer from "./FavoritesContainer";
import RestaurantReviews from "./RestaurantReviews";

function App() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    fetch("/restaurants")
      .then((r) => r.json())
      .then(setRestaurants);
  }, []);

  console.log(restaurants);

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/restaurants" element={<RestaurantContainer restaurants ={restaurants} />} />
        <Route path="/favorites" element={<FavoritesContainer />} />
        {/* <Route path="/reviews" element={
          restaurants.map((restaurant) =>(
        <RestaurantReviews key={restaurant.id} restaurant={restaurant} />
        ))
        } /> */}
        <Route path="/reviews" element={<RestaurantReviews restaurants = {restaurants} />} />

      </Routes>
    </div>
  );
}

export default App;

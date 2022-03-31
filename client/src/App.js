import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginScreen from "./LoginScreen";
import RestaurantContainer from "./RestaurantContainer";
import NavBar from "./NavBar";
import Homepage from "./Homepage";
import FavoritesContainer from "./FavoritesContainer";
import RestaurantReviews from "./RestaurantReviews";

function App() {

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/restaurants" element={<RestaurantContainer />} />
        <Route path="/favorites" element={<FavoritesContainer />} />
        <Route path="/reviews" element={<RestaurantReviews />} />
      </Routes>
    </div>
  );
}

export default App;

import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginScreen from "./LoginScreen";
import RestaurantContainer from "./RestaurantContainer";
import Favorites from "./Favorites";
import NavBar from "./NavBar";
import Homepage from "./Homepage";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/restaurants" element={<RestaurantContainer />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
}

export default App;

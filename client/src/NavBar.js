import React from "react";
import { NavLink, Routes, Route } from "react-router-dom";


function NavBar() {
  
  return (
    <nav className="navbar">
        <NavLink to="/login">LogIn</NavLink>
        <NavLink to="/restaurants">Restaurants</NavLink>
        <NavLink to="/favorites">Favorites</NavLink>
    </nav>
  );
}

export default NavBar;
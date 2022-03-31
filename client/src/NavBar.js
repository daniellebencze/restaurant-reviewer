import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar">
      <NavLink to="/login">Log In</NavLink>
      <NavLink to="/restaurants">Restaurants</NavLink>
      <NavLink to="/favorites">Favorites</NavLink>
      <NavLink to="/reviews">Reviews</NavLink>

    </nav>
  );
}

export default NavBar;

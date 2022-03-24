import React from "react";

function NavBar({ onChangePage }) {
  
    function handleLinkClick(e) {
    e.preventDefault();
    onChangePage(e.target.pathname);
  }

  return (
    <nav className="navbar">
      <a onClick={handleLinkClick} href="/">
        Login Screen
      </a>
      <a onClick={handleLinkClick} href="/restaurants">
        All Restaurants
      </a>
      <a onClick={handleLinkClick} href="/favorites">
        My Favorite Restaurants
      </a>
    </nav>
  );
}

export default NavBar;
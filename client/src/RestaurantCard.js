import React, { useState } from "react";
import FavoriteCards from "./FavoriteCards";

function RestaurantCard({ restaurant, review }) {
  const [favorited, setFavorited] = useState(true);

  function handleFavoriteButtton(e) {
    e.preventDefault();
    setFavorited(!favorited);

    fetch("/favorites", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(restaurant),
    }).then(() => {});
    console.log(restaurant);
  }

  return (
    <div>
      <div className="card">
        <img src={restaurant.photograph} alt={restaurant.name} />
        <h3>{restaurant.name}</h3>
        <h5>{restaurant.address}</h5>

        {favorited && (
          <button onClick={handleFavoriteButtton} className="like_button">
            Favorite
          </button>
        )}
        {!favorited && (
          <button onClick={handleFavoriteButtton} className="like_button">
            UnFavorite
          </button>
        )}
        {/* <button onClick={handleFavoriteButtton} className="like_button">
          {favorited ? "Favorite" : "Unfavorite"}
        </button> */}
      </div>
    </div>
  );
}

export default RestaurantCard;

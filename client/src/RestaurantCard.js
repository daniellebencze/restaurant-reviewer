import React, { useState } from "react";

function RestaurantCard({ restaurant }) {
  const [favorited, setFavorited] = useState(true);

  const toggleOut = () => {
    setFavorited(!favorited);
  };

  return (
    <div>
      <div className="card">
        <img src={restaurant.photograph} alt={restaurant.name} />
        <h3>{restaurant.name}</h3>
        <h5>{restaurant.address}</h5>

        {favorited ? (
          <button onClick={toggleOut} className="like_button">
            Like
          </button>
        ) : (
          <button onClick={toggleOut} className="like_button">
            Dislike
          </button>
        )}
      </div>
    </div>
  );
}

export default RestaurantCard;

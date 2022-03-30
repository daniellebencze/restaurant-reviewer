import React from "react";

function FavoriteCards({ getFavorited }) {
  return (
    <div className="cards">
      <div className="card">
        <img src={getFavorited.photograph} alt={getFavorited.name} />
        <h3>{getFavorited.name}</h3>
        <h5>{getFavorited.address}</h5>
      </div>
    </div>
  );
}

export default FavoriteCards;

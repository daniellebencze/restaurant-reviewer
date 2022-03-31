import React from "react";

function FavoriteCards({ getFavorited, favoriteId }) {

  const handleDelete = e => {
      e.preventDefault()
  
    fetch(`favorites/${favoriteId}`, {
      method: 'DELETE',
    })
}


  return (
      <div className="card">
        <img src={getFavorited.photograph} alt={getFavorited.name} />
        <h3>{getFavorited.name}</h3>
        <h5>{getFavorited.address}</h5>
        <button onClick={handleDelete} className="emoji-button delete">
          🗑
        </button>
      </div>
  );
}

export default FavoriteCards;

import React from "react";

function FavoriteCards({ getFavorited, favoriteId, setGetFavorited }) {

  function handleDelete() {
    fetch(`favorites/${favoriteId}`, {
      method: 'DELETE',
    });
    setGetFavorited((getFavorited) => {
  return getFavorited.filter((e) => e.id !== favoriteId);
});
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



//       setGetFavorited((getFavorited) => (
//        getFavorited.filter((e) => {
//          e.id !== favoriteId;
//        }
//     )
      
// ))
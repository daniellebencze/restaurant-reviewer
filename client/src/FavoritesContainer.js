import React, { useState, useEffect } from "react";
import FavoriteCards from "./FavoriteCards";

function FavoritesContainer() {
  const [getFavorited, setGetFavorited] = useState([]);

  useEffect(() => {
    fetch("/favorites")
      .then((r) => r.json())
      .then(setGetFavorited);
  }, []);
  console.log(setGetFavorited);

  return (
    <div>
      <div>
        {getFavorited.map((getFavorited) => (
          <FavoriteCards key={getFavorited.id} getFavorited={getFavorited} />
        ))}
      </div>
    </div>
  );
}

export default FavoritesContainer;

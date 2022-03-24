import React,{useState} from 'react'

function RestaurantCard(restaurant) {
    const [favorited, setFavorited] = useState(true);

    const toggleOut = () => {
        setFavorited(!favorited) 
      }
  
    return (
        <div>
            <li className="card">      
        <img src={restaurant.image} alt={"restaurant name"} />   
        <h4>{restaurant.name}</h4> 
        <h4>{restaurant.address}</h4>
        
        {favorited ? (
            <button onClick = {toggleOut} className="primary">Like</button>
        ) : (
            <button onClick = {toggleOut}>Dislike</button>
        )}
        </li>
    </div>
  )
}

export default RestaurantCard




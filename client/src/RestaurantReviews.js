import React from "react";

function RestaurantReviews(review) {
  
    return (
    <div>
      <li className="review">
        <h4>{review.comment}</h4>
      </li>
    </div>
  );
}

export default RestaurantReviews;

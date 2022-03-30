import React from "react";
import ReviewForm from "./ReviewForm";

function RestaurantReviews(review) {
  return (
    <div>
      <li className="review">
        <h4>{review.comment}</h4>
        <ReviewForm />
      </li>
    </div>
  );
}

export default RestaurantReviews;

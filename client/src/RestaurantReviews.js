import React, { useState, useEffect } from "react";
import ReviewCard from "./ReviewCard";
import ReviewForm from "./ReviewForm";

function RestaurantReviews() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("/reviews")
      .then((r) => r.json())
      .then(setReviews);
  }, []);

  console.log(reviews);

  return (
    <div>
      <ReviewForm/>
      {reviews.map((review) => (
        <ReviewCard key = {review.id} review = {review} />
      ))}
    </div>
  );
}
export default RestaurantReviews;

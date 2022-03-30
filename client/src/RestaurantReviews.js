// import React from "react";
// import ReviewForm from "./ReviewForm";

// function RestaurantReviews(review) {
//   return (
//     <div>
//       <li className="review">
//         <h4>{review.comment}</h4>
//         <ReviewForm />
//       </li>
//     </div>
//   );
// }

// export default RestaurantReviews;

import React, { useState, useEffect } from "react";

function RestaurantReviews() {
  const [reviews, setReviews] = useState([]);
  //   const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  useEffect(() => {
    fetch("/reviews")
      .then((r) => r.json())
      .then(setReviews);
  }, []);

  console.log(reviews);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newReview = {
      // name,
      comment,
    };
    fetch("/reviews", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newReview),
    });
    console.log(newReview);
  };
  return (
    <div>
      <h2>New Review</h2>
      <form onSubmit={handleSubmit}>
        {/* <input
          onChange={(e) => setName(e.target.value)}
          type="text"
          name="name"
          placeholder="Restaurant name"
        /> */}
        <input
          onChange={(e) => setComment(e.target.value)}
          type="text"
          name="comment"
          placeholder="Write review"
        />
        <button type="submit">Add Review</button>
      </form>
    </div>
  );
}
export default RestaurantReviews;

import React, { useState } from "react";

function ReviewForm({restaurants, review}) {
  const [comment, setComment] = useState("");
  const [id, setId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // setId(e.target.value)

   
    fetch("/reviews", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ 
        restaurant_id: id, comment:comment}),
  }).then((r) => r.json());
  }
  


  return (

    <div className="review_form">
      <h2>Add A New Review</h2>
      <form onSubmit={handleSubmit}>
        <select onChange={(e) => setId(e.target.value)}>
        <option value="">--Select the Restaurant--</option>
        {restaurants.map((restaurant) => (
        <option key = {restaurant.id} value={restaurant.id}>{restaurant.name}</option>
        ))}
        </select>
        
        <input
          onChange={(e) => setComment(e.target.value)}
          type="text"
          name="comment"
          placeholder="Write review"
          value ={comment}
        />
        <button type="submit">Submit Review</button>
      </form>
    </div>
  );
}

export default ReviewForm;
